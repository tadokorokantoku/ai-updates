---
name: "/context"
introducedIn: "2.0.30"
description: "`/context` が \"max_tokens must be greater than thinking.budget_tokens\" エラーメッセージで失敗することがある問題を修正"
category: slash
---

# /context

`/context` が "max_tokens must be greater than thinking.budget_tokens" エラーメッセージで失敗することがある問題を修正

## 関連リリース

### v2.1.111

- `/context` グリッドが行間に余分な空白行でレンダリングされる問題を修正
### v2.1.110

- `/context`、`/exit`、`/reload-plugins` が Remote Control（モバイル/Web）クライアントから動作するように
### v2.1.101

- `/context` の Free space と Messages の内訳がヘッダーのパーセンテージと食い違う問題を修正
### v2.1.74

- `/context` コマンドに実行可能な提案を追加 — コンテキストを多く消費するツール、メモリ肥大、容量警告を特定し、具体的な最適化のヒントを提示
### v2.1.69

- サーバーからのすべての MCP ツールに対して `/context` が同一のトークン数を表示する問題を修正
### v2.1.20

- `/context` などの一部コマンドでの重複出力を修正
### v2.1.14

- verbose モードで `/context` コマンドがステータスラインと同じトークン数とパーセンテージを表示するよう修正
- `/config`、`/context`、`/model`、`/todos` のコマンドオーバーレイが予期せず閉じる問題を修正
- 類似コマンド（例: `/context` と `/compact`）を入力した際に slash コマンド autocomplete が誤ったコマンドを選択する問題を修正
### v2.1.0

- `/context` の skill トークン推定を修正し、frontmatter のみのロードを正確に反映
### v2.0.74

- `/context` コマンドの可視化を改善し、skill と agent をソース別にグループ化、slash コマンド、トークン数でソート
### v2.0.72

- 非対話モードでカスタムシステムプロンプトが `/context` コマンドで尊重されない問題を修正
### v2.0.30

- `/context` が "max_tokens must be greater than thinking.budget_tokens" エラーメッセージで失敗することがある問題を修正
