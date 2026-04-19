---
name: check-claude-code-releases
description: Claude Code の新バージョンが npm に出てるかを確認し、`src/content/releases/` に未追加なら、リリースノート追加・新コマンド抽出・highlights 生成までを一連で実行する。定期実行向け（何も更新がなければ即 exit）。
tools: Read, Edit, Write, Glob, Grep, Bash, Skill, WebFetch
---

# Claude Code 新リリース自動取り込みスキル

`@anthropic-ai/claude-code` の npm 最新バージョンを取得し、`src/content/releases/` に未登録のバージョンがあれば取り込む。未登録がなければ即終了。

## ステップ

### 1. 差分バージョン検出

```bash
LATEST=$(npm view @anthropic-ai/claude-code version)
echo "npm latest: $LATEST"

# 既存バージョン一覧（数値ソート）
ls src/content/releases/ | sed 's/\.md$//' | sort -V > /tmp/existing-versions.txt
tail -1 /tmp/existing-versions.txt

# 全バージョンを取得して未登録を洗い出し
npm view @anthropic-ai/claude-code versions --json | \
  python3 -c 'import json,sys; [print(v) for v in json.load(sys.stdin)]' | \
  sort -V > /tmp/all-versions.txt

comm -23 /tmp/all-versions.txt /tmp/existing-versions.txt > /tmp/new-versions.txt
wc -l /tmp/new-versions.txt
```

`/tmp/new-versions.txt` が空なら **ここで終了**（何もしない）。以降のステップは新バージョンがある場合のみ。

### 2. 各新バージョンの情報を取得

各バージョンについて publish date と release notes を取得。

```bash
for V in $(cat /tmp/new-versions.txt); do
  # publish 日時
  npm view "@anthropic-ai/claude-code@$V" time.$V
done
```

リリースノート本文の取得元（優先順）：
1. https://docs.claude.com/en/release-notes/claude-code （公式）を WebFetch
2. GitHub `anthropics/claude-code` の releases（あれば）
3. npm パッケージ内の `CHANGELOG.md`

いずれも取れない場合、バンドル分析（ステップ 3）だけで代用し、本文は最低限の bullet で作成。

### 3. バンドルから新コマンドを抽出

release notes に載らないコマンド追加もあるので必ずチェック：

```bash
mkdir -p /tmp/cc-bundle && cd /tmp/cc-bundle
# 最新の新バージョンだけ取得すれば十分（既存のコマンドは登録済みなので、
# 新規分はそのバージョンに含まれる）
NEW=$(tail -1 /tmp/new-versions.txt)
npm i "@anthropic-ai/claude-code@$NEW" --prefix . 2>&1 | tail -3

# 2.1.113 以上はネイティブバイナリ、未満は bundled cli.js
BUNDLE=$(ls node_modules/@anthropic-ai/claude-code/cli.js 2>/dev/null || \
         ls node_modules/@anthropic-ai/claude-code-*/claude 2>/dev/null | head -1)

# スラッシュコマンド名を抽出
if file "$BUNDLE" | grep -q "Mach-O\|ELF"; then
  strings "$BUNDLE" | grep -oE '"/[a-z][a-z0-9-]+"' | sort -u > /tmp/bundle-cmds.txt
else
  grep -oE '"/[a-z][a-z0-9-]+"' "$BUNDLE" | sort -u > /tmp/bundle-cmds.txt
fi

cd -
ls src/content/commands/ | sed 's/\.md$//' | sort > /tmp/existing-cmds.txt
# 未登録コマンド
comm -23 <(sed 's/"//g; s|/||' /tmp/bundle-cmds.txt | sort) /tmp/existing-cmds.txt > /tmp/new-cmds.txt
cat /tmp/new-cmds.txt
```

### 4. リリースノートファイル作成

各新バージョン `X.Y.Z` について：

- `src/content/releases/X.Y.Z.md`（英語）
- `src/content/releases-ja/X.Y.Z.md`（日本語訳）

frontmatter:
```yaml
---
version: "X.Y.Z"
date: YYYY-MM-DDTHH:MM:SS+00:00
---
```

本文は取得元から転記した `- ...` 箇条書き。コマンド/パス/フラグは `` ` `` で囲む。日本語は英語本文から翻訳する（専門用語は英語のまま残す：Bedrock, MCP, CLAUDE_CODE_* など）。

### 5. 新コマンドファイル作成

`/tmp/new-cmds.txt` の各コマンドについて `src/content/commands/{id}.md` と `commands-ja/{id}.md`：

```yaml
---
name: "/name"
introducedIn: "X.Y.Z"
description: "一行説明"
category: slash
---

（本文：コマンドの使い方説明）
```

`category` は基本 `slash`。CLI フラグなら `cli` / `flag`。
`description` は release notes の該当行から抽出。release notes に言及なしならバンドルの周辺文字列から推測するか、一旦 `"（未記載）"` と入れて TODO コメントで後追い。

### 6. highlights 再生成

```
/regenerate-release-highlights
```

新しく追加したバージョンだけが対象になる（既存の highlights は触らない）。

### 7. ビルド確認

```bash
npx astro build 2>&1 | tail -5
```

エラーが出たら frontmatter / markdown の syntax をチェックして修正。

### 8. コミット（push はしない）

```bash
git add src/content/
git commit -m "Add vX.Y.Z release notes$(test -s /tmp/new-cmds.txt && echo ' and new commands')"
```

push はユーザーがレビューしてから手動で行う。

## 冪等性

- 既に登録済みのバージョンは touch しない
- `/tmp/new-versions.txt` が空なら何もせずに終了（定期実行の空振り前提）
- 途中でエラーが出たら commit せずに終了して状態を残す

## 実行例

```
/check-claude-code-releases
```

新バージョンがなければ「新規なし」とだけ報告。あれば追加作業を実行してコミット後、何を追加したかユーザーに報告する。
