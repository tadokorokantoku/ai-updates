---
name: "/remote-control"
introducedIn: "2.1.51"
description: "`/remote-control` と `claude remote-control` にオプションの名前引数を追加 (`/remote-control My Project` または `--name \"My Project\"`)。claude.ai/code に表示されるカスタムセッションタイトルを設定可能"
category: slash
---

# /remote-control

`/remote-control` と `claude remote-control` にオプションの名前引数を追加 (`/remote-control My Project` または `--name "My Project"`)。claude.ai/code に表示されるカスタムセッションタイトルを設定可能

## 関連リリース

### v2.1.101

- Remote Control の複数の問題を修正: セッションクラッシュ時に worktree が削除される問題、接続失敗がトランスクリプトに残らない問題、ローカルセッションの brief モードで誤った「Disconnected」表示、`CLAUDE_CODE_ORGANIZATION_UUID` のみ設定されている場合に `/remote-control` が SSH 越しに失敗する問題
### v2.1.80

- ゲートウェイやサードパーティプロバイダーのデプロイで機能しない `/remote-control` が表示される問題を修正
### v2.1.79

- [VSCode] `/remote-control` を追加 — セッションを claude.ai/code にブリッジし、ブラウザや電話から続行可能に
### v2.1.69

- `/remote-control` と `claude remote-control` にオプションの名前引数を追加 (`/remote-control My Project` または `--name "My Project"`)。claude.ai/code に表示されるカスタムセッションタイトルを設定可能
