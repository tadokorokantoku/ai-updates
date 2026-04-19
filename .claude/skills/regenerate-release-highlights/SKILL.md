---
name: regenerate-release-highlights
description: Claude Code の新しい日本語リリースノート (src/content/releases-ja/*.md) が追加されたときに、影響の大きい変更のみを抽出して frontmatter の highlights を生成する。新バージョン追加時や、複数バージョンをまとめて処理したいときに使う。
tools: Read, Edit, Write, Glob, Grep, Bash
---

# Claude Code リリース highlights 再生成スキル

`src/content/releases-ja/` の日本語リリースノート本文から、影響の大きい変更だけを抽出して frontmatter の `highlights` フィールドに書き込む。カード一覧のプレビュー表示で意味のある項目だけを見せるのが目的。

## 前提

- 対象ディレクトリ: `src/content/releases-ja/`
- ファイル形式: Astro content collection (frontmatter + 本文 bullet list)
- frontmatter schema: `version`, `date`, `highlights` (optional)
- `highlights` は optional なので、該当項目ゼロのバージョンではキーごと削除する

## 実行する前の確認

どのファイルを処理するか確認する：
- 新規に追加された 1〜数バージョンなら直接処理
- 全件再生成なら並列 agent で分割処理（1バッチ 35〜45 ファイル、タイムアウト回避）

```bash
# 処理対象の確認
ls src/content/releases-ja/ | wc -l
grep -L '^highlights:' src/content/releases-ja/*.md  # highlights 未設定のファイル
```

## 選定基準（該当項目のみ highlights に含める）

本文の箇条書きから、以下のいずれかに該当する項目のみ pickup：

1. **モデルの追加 / 変更**
   - 新モデル対応、モデル ID 追加、context window 拡張、デフォルトモデル変更
   - 例: "Opus 4.X に対応"、"Claude 4.6 Sonnet (1M context) に対応"、"Haiku 4.5 を追加"
   - **対象外**: モデルの出力トークン上限変更などの細かい設定調整（ただし「x モデルの 1M context をデフォルト有効化」のような主要な変更は含める）

2. **スラッシュコマンドの新規追加 / 削除**
   - `/foo` コマンドの新規登場、または既存コマンドの削除
   - 例: "`/rewind` コマンドを追加"、"`/batch` コマンドを削除"
   - **対象外**:
     - 既存コマンドの機能改善、引数追加、バグ修正
     - リネーム（ただし旧名をエイリアスとして残す場合、文脈によって判断）
     - エイリアス追加（新規コマンド実体ではないため原則除外、ただし実質的に新機能なら含める）

3. **Skill の新規追加 / 削除**
   - 新しい skill の導入または廃止
   - 例: "`security-review` skill を追加"、"`/claude-api` skill を追加"
   - **対象外**: 既存 skill の更新（"Updated the X skill..." 等）

## セキュリティ系は含めない

重大性の判定が難しいため、**セキュリティ系修正は highlights に含めない方針**。本文には残っているので詳細ページ (`/ja/releases/{version}/detail`) で参照可能。

以下のキーワードを含む highlight は生成しない：
- 権限バイパス / パーミッションバイパス
- 任意コード実行 / 任意コマンド実行
- コマンドインジェクション
- サンドボックス脱出
- 認証情報漏洩
- 脆弱性 / セキュリティ問題
- 密輸 / バイパス修正

## 出力ルール

- **件数**: 1バージョンあたり上限5件、0件もOK
- **文体**: 体言止め、「〜を追加」「〜を修正」「〜に対応」。ですます調は使わない
- **長さ**: 1件20〜40文字程度。元の文章が長ければ要約する
- **保持する表記**:
  - コマンド名: `` `/foo` `` （バッククォート付き）
  - フラグ: `` `--foo` ``
  - 識別子: `` `FOO_BAR` ``
  - モデル名: Opus 4.7, Sonnet 4.6 等はそのまま
- **該当項目0件の場合**: frontmatter から `highlights` キーを完全に削除（空配列 `[]` ではなく、キーごと消す）
- **本文は一切変更しない**: `---` 以降の箇条書きは保持

## 実装手順

### 少数ファイル（1〜10個）の場合

直接 Read → Edit/Write で処理。

### 多数ファイル（数十〜数百）の場合

並列 agent で分割処理。1 agent あたり 35〜45 ファイル程度（タイムアウト回避のため、過去に 54 ファイル/agent で一度タイムアウト発生）。

```bash
# バッチ分割の例
ls src/content/releases-ja/ | split -l 40 - /tmp/ja_batch_
```

各 agent に以下を渡す：
- 対象ファイルリスト（カンマ区切りで prompt に直接埋め込む）
- 選定基準（上記）
- 出力ルール（上記）
- 参考例: 既存の正しい highlights を持つファイル（例: `2.1.0.md`, `2.1.32.md` 等）

### 検証

```bash
# highlights 数の確認
grep -l '^highlights:' src/content/releases-ja/*.md | wc -l

# セキュリティ系が紛れ込んでないか確認
for f in src/content/releases-ja/*.md; do
  awk '/^---$/{c++; next} c==1' "$f" | grep -HE '権限バイパス|任意コード実行|コマンドインジェクション|サンドボックス脱出|認証情報漏洩|セキュリティ|脆弱性|密輸|バイパス修正' | sed "s|(standard input)|$f|"
done

# ページが 200 応答することを確認
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/ja/releases
```

## 参考になる既存の highlights

スタイルの見本として以下を参照：

- `src/content/releases-ja/1.0.0.md` — モデル追加（Sonnet 4 / Opus 4）
- `src/content/releases-ja/2.0.0.md` — コマンド新規追加（`/rewind`, `/usage`）
- `src/content/releases-ja/2.0.17.md` — モデル追加＋モード動作変更
- `src/content/releases-ja/2.0.20.md` — Skill サポート追加
- `src/content/releases-ja/2.1.92.md` — コマンド削除（`/tag`, `/vim`）
- `src/content/releases-ja/2.1.111.md` — 複数カテゴリの混在例

## 注意点

- **本文の翻訳は別タスク** — 本スキルは既に日本語化された本文を前提に highlights のみ生成する。新規バージョンの英語→日本語翻訳は別の流れで行う
- **英語版 (`src/content/releases/`) は触らない** — 元データ保存用
- **`version` と `date` は変更しない**
