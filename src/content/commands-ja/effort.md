---
name: "/effort"
introducedIn: "2.1.76"
description: "Claude が応答中でも動作するよう `/effort` を改善。`/model` の挙動に合わせた"
category: slash
---

# /effort

Claude が応答中でも動作するよう `/effort` を改善。`/model` の挙動に合わせた

## 関連リリース

### v2.1.111

- Opus 4.7 向けに `high` と `max` の間に位置する `xhigh` effort レベルを追加。`/effort`、`--effort`、モデルピッカーから利用可能。他モデルは `high` にフォールバック
- 引数なしで呼び出すとインタラクティブスライダーが開くように `/effort` を改善。矢印キーでレベル間を移動、Enter で確定
### v2.1.94

- API キー、Bedrock/Vertex/Foundry、Team、Enterprise ユーザーのデフォルト effort レベルを medium から high に変更（`/effort` で制御）
### v2.1.80

- auto が現在解決する値を表示するよう `/effort` を改善。ステータスバーインジケータと一致
### v2.1.76

- モデルの effort レベルを設定する `/effort` slash コマンドを追加
### v2.1.73

- Claude が応答中でも動作するよう `/effort` を改善。`/model` の挙動に合わせた
