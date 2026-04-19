---
name: "/config"
introducedIn: "2.0.12"
description: "`/config` の \"verbose\" 設定変更がセッションをまたいで永続化されるように"
category: slash
---

# /config

`/config` の "verbose" 設定変更がセッションをまたいで永続化されるように

## 関連リリース

### v2.1.110

- `Ctrl+G` 外部エディタで Claude の最終応答をコメント付きコンテキストとして表示するオプションを追加（`/config` から有効化）
- テレメトリ無効化ユーザー（Bedrock、Vertex、Foundry、`DISABLE_TELEMETRY`）向けにセッション recap を有効化。`/config` または `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=0` でオプトアウト可能
### v2.1.108

- セッション復帰時にコンテキストを提供する recap 機能を追加。`/config` で設定可能、`/recap` で手動呼び出し可。テレメトリ無効化時は `CLAUDE_CODE_ENABLE_AWAY_SUMMARY` で強制可能
### v2.1.105

- `/config` のラベルと説明を分かりやすく改善
### v2.1.101

- アプリ内設定書き込み（例: `/add-dir --remember`、`/config`）がメモリ内スナップショットを更新せず、削除されたディレクトリがセッション中に取り消されない問題を修正
### v2.1.92

- `/vim` コマンドを削除（vim モードは `/config` → Editor mode で切り替え）
### v2.1.90

- `/model`、`/config` などの選択画面でスクロール時にヘッダーが消える問題を修正
### v2.1.83

- `/config` メニューで検索カーソルとリスト選択が同時に表示される問題を修正
### v2.1.79

- `/config` メニューに "Show turn duration" トグルを追加
### v2.1.73

- `/output-style` コマンドを非推奨化 — `/config` を使用。出力スタイルはプロンプトキャッシュ向上のためセッション開始時に固定
### v2.1.72

- `/config` を改善 — Escape で変更キャンセル、Enter で保存して閉じる、Space で設定トグル
### v2.1.69

- `/config` 検索ボックスがフォーカスされていて空のときに Tab/矢印キーで Settings タブを循環できない問題を修正
### v2.1.49

- `/config` で verbose モードを切り替えた際に thinking ブロック表示が更新されない問題を修正 — memo comparator が verbose 変更を正しく検出するように
### v2.1.14

- `/config`、`/context`、`/model`、`/todos` のコマンドオーバーレイが予期せず閉じる問題を修正
### v2.1.6

- `/config` コマンドに検索機能を追加し、設定をすばやくフィルタリングできるように
### v2.1.3

- `/config` にリリースチャンネル（`stable` または `latest`）トグルを追加
### v2.0.71

- `/config` コマンドのエイリアスとして `/settings` を追加
### v2.0.12

- `/config` の "verbose" 設定変更がセッションをまたいで永続化されるように
