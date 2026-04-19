---
name: "/loop"
introducedIn: "2.1.71"
description: "プロンプトや slash コマンドを定期的な間隔で実行する `/loop` コマンドを追加（例: `/loop 5m check the deploy`）"
category: slash
---

# /loop

プロンプトや slash コマンドを定期的な間隔で実行する `/loop` コマンドを追加（例: `/loop 5m check the deploy`）

## 関連リリース

### v2.1.113

- `/loop` を改善: Esc で保留中の wakeup をキャンセル可能、wakeup は明確さのため "Claude resuming /loop wakeup" と表示
### v2.1.105

- `/proactive` が `/loop` のエイリアスに
### v2.1.85

- スケジュールされたタスク（`/loop`、`CronCreate`）が発火した際のタイムスタンプマーカーをトランスクリプトに追加
### v2.1.73

- Bedrock/Vertex/Foundry とテレメトリ無効化時に `/loop` が利用できない問題を修正
### v2.1.71

- プロンプトや slash コマンドを定期的な間隔で実行する `/loop` コマンドを追加（例: `/loop 5m check the deploy`）
