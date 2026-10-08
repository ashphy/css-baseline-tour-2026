# CSS Baseline Tour 2026

2025年以降に Baseline になった CSS の機能と、もうすぐ使えそうな機能を、触りながら紹介するサイトです。30分程度の発表で、聞き手が手元で操作しながら聞くことを想定しています。

公開URL: https://ashphy.com/css-baseline-tour-2026/

## 紹介している機能

| 機能 | Baseline |
| --- | --- |
| View Transitions | Baseline 2025 |
| Popover | Baseline 2025 |
| Custom Highlight API | Baseline 2026 |
| Container style queries | Baseline 2026 |
| field-sizing | Baseline 2026 |
| text-autospace | 一部 Baseline 2025（normal / no-autospace） |
| text-box | Baseline 未達（Chrome・Safari） |
| Customizable `<select>` | Baseline 未達（Chrome・Safari） |
| word-break: auto-phrase | Baseline 未達（Chrome） |
| Gap decorations | Baseline 未達（Chrome） |
| Grid lanes | Baseline 未達（Safari） |

紹介する機能を選ぶための候補一覧は [docs/candidates.md](docs/candidates.md) にあります。

## ページの構成

1機能1ページです。左にデモ、右にコードを並べます。

- 左端の目次から各ページへ移動できます
- デモが複数あるページは、タブで切り替えます
- コード欄には、デモのソースのうち重要な部分だけを表示します。その前に、使っている機能の一言解説を並べます

## 開発

[mise](https://mise.jdx.dev/) で pnpm の版を固定しています。

```sh
mise install
pnpm install
pnpm dev
```

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバーを `http://localhost:4321/css-baseline-tour-2026/` で起動する |
| `pnpm build` | `dist/` にビルドする |
| `pnpm preview` | ビルド結果を確認する |

## 機能のページを追加する

1. `src/features.ts` の `features` に機能を追加する。並び順がそのまま発表の順番になる
2. `src/demos/<機能>/<デモ>/` に `demo.html`・`style.css`・必要なら `script.js` を置く
3. `src/pages/<機能>.astro` で、デモのファイルを `?raw` で読み込み、`FeatureLayout` に渡す

デモのファイルは、ページへの適用とコード欄の表示の両方に使います。CSS の新しい構文がビルドで書き換えられないよう、加工せずにページに埋め込んでいます。

### コード欄に出す範囲

デモのソースで、コード欄に出したい範囲を `@key` と `@end` のコメントで囲みます。範囲の指定がない言語は、コード欄に表示しません。

```css
/* @key */
.card {
	view-transition-class: card;
}
/* @end */
```

JavaScript では `// @key` と `// @end`、HTML では `<!-- @key -->` と `<!-- @end -->` を使います。

### 使っている機能の解説

各ページのデモに `points` を渡すと、コード欄の先頭に名前と一言の解説を並べます。

```js
points: [
	{ name: 'view-transition-class', description: '複数の要素にまとめてスタイルを当てるためのクラス名' },
],
```

## 公開

`main` へ push すると、GitHub Actions がビルドして GitHub Pages に公開します（`.github/workflows/deploy.yml`）。
