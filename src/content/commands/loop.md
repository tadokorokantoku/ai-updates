---
name: "/loop"
introducedIn: "1.5.0"
description: "任意のプロンプトやスラッシュコマンドを定期間隔で実行する"
category: slash
---

例: `/loop 5m /review` で5分ごとに `/review` を実行。

間隔を省略するとモデル自身が `ScheduleWakeup` で次回実行時間を決める動的モードになる。

## 使い方

```
/loop 10m /babysit-prs
/loop /check-deploy   # 動的モード
```
