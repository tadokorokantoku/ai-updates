---
name: "/compact"
introducedIn: "2.0.31"
description: "既存の compact 境界を尊重するようにし、`/compact` が `prompt_too_long` で失敗する問題を修正"
category: slash
---

# /compact

既存の compact 境界を尊重するようにし、`/compact` が `prompt_too_long` で失敗する問題を修正

## 関連リリース

### v2.1.98

- `DISABLE_COMPACT` が設定されているときは `/compact` ヒントを非表示化
### v2.1.85

- 会話が大きくなりすぎて compact リクエスト自体が収まらなくなった場合に `/compact` が "context exceeded" で失敗する問題を修正
### v2.1.69

- SDK コンシューマ（Claude Code Remote の Web UI、VSCode 拡張）で `/compact` サマリがユーザーバブルとして表示される問題を修正
### v2.1.47

- 多くのユーザー skill がインストールされている場合に、組み込み slash コマンド（`/help`、`/model`、`/compact` など）が autocomplete ドロップダウンから非表示になる問題を修正 (anthropics/claude-code#22020)
### v2.1.16

- `/compact` 実行後に "context remaining" 警告が非表示にならない問題を修正
### v2.1.15

- `/compact` 実行後に "Context left until auto-compact" 警告が消えない問題を修正
### v2.1.14

- 類似コマンド（例: `/context` と `/compact`）を入力した際に slash コマンド autocomplete が誤ったコマンドを選択する問題を修正
### v2.0.31

- 既存の compact 境界を尊重するようにし、`/compact` が `prompt_too_long` で失敗する問題を修正
