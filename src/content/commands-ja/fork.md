---
name: "/fork"
introducedIn: "2.1.47"
description: "Web search を使用したセッションで `/fork` を使うとクラッシュする問題を修正 — トランスクリプトのデシリアライズによる検索結果の null エントリを適切に処理するように (anthropics/claude-code#25811)"
category: slash
---

# /fork

Web search を使用したセッションで `/fork` を使うとクラッシュする問題を修正 — トランスクリプトのデシリアライズによる検索結果の null エントリを適切に処理するように (anthropics/claude-code#25811)

## 関連リリース

### v2.1.77

- `/fork` を `/branch` にリネーム（`/fork` はエイリアスとして引き続き利用可能）
### v2.1.71

- フォークされた会話（`/fork`）が同じ plan ファイルを共有し、片方のフォークでの plan 編集が他方を上書きする問題を修正
### v2.1.47

- Web search を使用したセッションで `/fork` を使うとクラッシュする問題を修正 — トランスクリプトのデシリアライズによる検索結果の null エントリを適切に処理するように (anthropics/claude-code#25811)
