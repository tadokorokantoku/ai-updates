---
name: "/rename"
introducedIn: "2.0.64"
description: "名前付きセッションサポートを追加: `/rename` でセッションに名前を付け、REPL から `/resume <name>` またはターミナルから `claude --resume <name>` で再開"
category: slash
---

# /rename

名前付きセッションサポートを追加: `/rename` でセッションに名前を付け、REPL から `/resume <name>` またはターミナルから `claude --resume <name>` で再開

## 関連リリース

### v2.1.111

- `/clear` が `/rename` で設定したセッション名を破棄し、statusline 出力で `session_name` が失われる問題を修正
### v2.1.110

- まだ実行中または異常終了したセッションで `--resume` が `/rename` の名前の代わりに最初のプロンプトを表示する場合がある問題を修正
### v2.1.108

- `claude --resume <session-id>` で `/rename` 経由のカスタムセッション名と色が失われる問題を修正
### v2.1.101

- `claude -p --resume <name>` を改善。`/rename` または `--name` で設定したセッションタイトルを受け付けるように
### v2.1.81

- `/rename` が Remote Control セッションのタイトルを同期しない問題を修正
### v2.1.75

- `/rename` 使用時にセッション名をプロンプトバーに表示するように
### v2.1.70

- `/rename` を改善。Claude が処理中でも動作するように (従来は黙ってキューに入っていた)
### v2.1.47

- 会話再開後に `/rename` で設定したカスタムセッションタイトルが失われる問題を修正 (anthropics/claude-code#23610)
- `/rename` コマンドがデフォルトでターミナルタブのタイトルを更新するように (anthropics/claude-code#25789)
### v2.1.41

- `/rename` を改善。引数なしで呼び出すと会話コンテキストから自動でセッション名を生成
### v2.1.19

- 異なるディレクトリ (git worktree など) から再開した際に `/rename` と `/tag` が正しいセッションを更新しない問題を修正
### v2.0.64

- 名前付きセッションサポートを追加: `/rename` でセッションに名前を付け、REPL から `/resume <name>` またはターミナルから `claude --resume <name>` で再開
