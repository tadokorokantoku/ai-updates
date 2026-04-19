---
name: "/feedback"
introducedIn: "2.1.14"
description: "説明文が非常に長い場合に `/feedback` コマンドが無効な GitHub issue URL を生成する問題を修正"
category: slash
---

# /feedback

説明文が非常に長い場合に `/feedback` コマンドが無効な GitHub issue URL を生成する問題を修正

## 関連リリース

### v2.1.108

- `/feedback` のリトライを修正: 失敗後に説明文を編集せずに Enter で再送信できるように
### v2.1.91

- 利用不可時に slash メニューから消えるのではなく、理由を説明するよう `/feedback` を改善
### v2.1.86

- 大きなトランスクリプトファイルを持つ非常に長いセッションで `/feedback` を使用した際に発生する可能性のある out-of-memory クラッシュを修正
### v2.1.77

- `/feedback` テキスト入力での Ctrl+D が前方削除するのではなく、2回押しでセッションを終了するよう修正
### v2.1.14

- 説明文が非常に長い場合に `/feedback` コマンドが無効な GitHub issue URL を生成する問題を修正
