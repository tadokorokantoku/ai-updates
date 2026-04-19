---
name: "/doctor"
introducedIn: "0.2.9"
description: "`/doctor` コマンドによる包括的なエラーメッセージと診断機能"
category: slash
---

# /doctor

`/doctor` コマンドによる包括的なエラーメッセージと診断機能

## 関連リリース

### v2.1.110

- MCP サーバーが複数の config スコープで異なるエンドポイントを持って定義されている場合に警告するよう `/doctor` を改善
### v2.1.105

- `/doctor` のレイアウトをステータスアイコン付きに改善。`f` を押すと報告された問題を Claude が修正
### v2.1.6

- `/doctor` に Updates セクションを追加し、自動更新チャンネルと利用可能な npm バージョン（stable/latest）を表示
### v2.1.3

- 到達不能な permission ルールの検出と警告を追加。`/doctor` とルール保存後に警告を表示し、各ルールのソースと実行可能な修正ガイダンスを提供
### v2.0.67

- `/doctor` で autoupdater が無効化されている理由を表示
### v2.0.12

- `/doctor` コマンドによる包括的なエラーメッセージと診断機能
