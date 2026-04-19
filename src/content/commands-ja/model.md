---
name: "/model"
introducedIn: "1.0.0"
description: "Opus Plan Mode: plan モードのみ Opus、それ以外は Sonnet を使う新しい設定を `/model` に追加"
category: slash
---

# /model

Opus Plan Mode: plan モードのみ Opus、それ以外は Sonnet を使う新しい設定を `/model` に追加

## 関連リリース

### v2.1.108

- 次の応答で履歴全体をキャッシュなしで読み直すため、会話中のモデル切り替え前に警告するよう `/model` を改善
### v2.1.105

- AWS Bedrock の非 US リージョンで、inference profile discovery が進行中に `/model` ピッカーが無効な `us.*` モデル ID を `settings.json` に永続化する問題を修正
### v2.1.90

- `/model`、`/config` などの選択画面でスクロール時にヘッダーが消える問題を修正
### v2.1.86

- 複数の Claude Code インスタンスを実行し、そのうちの1つで `/model` を使った際に statusline が別のセッションのモデルを表示する問題を修正
### v2.1.84

- サードパーティ（Bedrock、Vertex、Foundry）向けにピン留めされたデフォルトモデルの effort/thinking 能力検出を上書きする `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` env 変数を追加。`/model` ピッカーラベルをカスタマイズする `_MODEL_NAME`/`_DESCRIPTION` も追加
### v2.1.78

- `/model` ピッカーにカスタムエントリを追加する `ANTHROPIC_CUSTOM_MODEL_OPTION` env 変数を追加。表示用のオプション `_NAME` と `_DESCRIPTION` サフィックス付き変数も追加
### v2.1.75

- `/model` や Option+P でモデル切り替え後に Claude Code ヘッダーの表示モデル名が更新されない問題を修正
### v2.1.73

- Claude が応答中でも動作するよう `/effort` を改善。`/model` の挙動に合わせた
### v2.1.72

- Claude が作業中に `/model` を実行すると結果が表示されない問題を修正
### v2.1.68

- Opus 4.6 は Max・Team 購読者向けにデフォルトで medium effort に。medium effort はほとんどのタスクでうまく動作 — 速度と徹底性のスイートスポット。`/model` でいつでも変更可能
### v2.1.63

- slash コマンドメニューで現在アクティブなモデルを表示するよう `/model` コマンドを改善
### v2.1.51

- `/model` ピッカーがピン留めされたモデルバージョンに対して生のモデル ID ではなく人間が読めるラベル（例: "Sonnet 4.5"）を表示。新しいバージョンが利用可能な場合はアップグレードヒントを表示
### v2.1.47

- 多くのユーザー skill がインストールされている場合に、組み込み slash コマンド（`/help`、`/model`、`/compact` など）が autocomplete ドロップダウンから非表示になる問題を修正 (anthropics/claude-code#22020)
### v2.1.30

- `/model` をキューに入れず即座に実行するよう変更
### v2.1.14

- `/config`、`/context`、`/model`、`/todos` のコマンドオーバーレイが予期せず閉じる問題を修正
### v2.1.7

- `/model` や `/theme` などのローカル slash コマンドを実行した際にスピナーが一瞬点滅する問題を修正
### v2.0.12

- `/model` セレクタでのちらつきを回避
### v1.0.77

- Opus Plan Mode: plan モードのみ Opus、それ以外は Sonnet を使う新しい設定を `/model` に追加
