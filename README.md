# Claude Code Updates

Claude Code の非公式リリース情報サイト。日本語版のみ公開する。

## 検証環境

https://ai-updates.katsuki104.workers.dev/ （Cloudflare Workers にデプロイ）

## コンテンツ構成

```
src/content/
├── releases/      ← 英語のリリースノート（データ原本・ビルド対象外）
├── releases-ja/   ← 日本語版リリースノート（公開対象）
├── commands/      ← 英語のコマンド情報（データ原本・ビルド対象外）
└── commands-ja/   ← 日本語版コマンド情報（公開対象）
```

### データ原本を残す方針

`src/content/releases/` と `src/content/commands/` は**英語のデータ原本**として保持する。どのページからも参照されず、ビルド出力にも含まれないが、以下の理由で削除しない：

- `check-claude-code-releases` skill が npm から取り込んだ一次情報を格納する先
- 日本語版 (`releases-ja/`, `commands-ja/`) の翻訳元・照合用
- 将来的に英語ページを復活させる際のデータソース

`src/pages/` 配下に英語版ページ (`/releases`, `/commands`) は存在しない。ルーティングは `/ja/*` のみで、`/` にアクセスすると `/ja/releases` にリダイレクトする。

### highlights の扱い

- **`releases-ja/`**: `regenerate-release-highlights` skill で**厳選した項目のみ** `highlights` フィールドに設定（モデル追加・コマンド新規追加/削除・skill 追加など影響の大きい変更のみ）
- **`releases/` (英語版)**: `check-claude-code-releases` が取り込み時に全 bullet を highlights として入れたまま（表示されないので問題なし）

## 開発コマンド

| コマンド            | 用途                                         |
| :------------------ | :------------------------------------------- |
| `npm install`       | 依存パッケージをインストール                 |
| `npm run dev`       | dev server 起動 (`localhost:4321`)           |
| `npm run build`     | `./dist/` へビルド                           |
| `npm run preview`   | ビルド結果をローカルプレビュー               |

## 関連 skill

- `check-claude-code-releases` — npm の新バージョンを検知してリリースノートを取り込む
- `regenerate-release-highlights` — `releases-ja/` の highlights を再生成
