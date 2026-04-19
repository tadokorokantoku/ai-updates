---
name: "/security-review"
introducedIn: "2.1.70"
description: "古い git バージョンで `/security-review` コマンドが `unknown option merge-base` で失敗する問題を修正"
category: slash
---

# /security-review

古い git バージョンで `/security-review` コマンドが `unknown option merge-base` で失敗する問題を修正

## 関連リリース

### v2.1.108

- モデルが Skill ツール経由で `/init`、`/review`、`/security-review` などの組み込みスラッシュコマンドを発見・呼び出し可能に
### v2.1.70

- 古い git バージョンで `/security-review` コマンドが `unknown option merge-base` で失敗する問題を修正
