---
name: "/voice"
introducedIn: "2.1.69"
description: "Remote Control セッションでローカルスラッシュコマンド (`/voice`、`/cost`) を実行した際の Android アプリクラッシュを修正"
category: slash
---

# /voice

Remote Control セッションでローカルスラッシュコマンド (`/voice`、`/cost`) を実行した際の Android アプリクラッシュを修正

## 関連リリース

### v2.1.84

- 現在の認証設定で利用できないスラッシュコマンド (`/voice`、`/mobile`、`/chrome`、`/upgrade` など) を表示せずに非表示にするように
### v2.1.76

- npm 経由でインストールした Windows で `/voice` が動作しない問題を修正
- `/voice` を改善。有効化時にディクテーション言語を表示し、`language` 設定が音声入力でサポートされない場合に警告
### v2.1.75

- トグルを2回行わないと新規インストール時に音声モードが正しく有効化されない問題を修正
### v2.1.69

- Remote Control セッションでローカルスラッシュコマンド (`/voice`、`/cost`) を実行した際の Android アプリクラッシュを修正
