# 取り上げる機能の候補

web-features（Baselineの判定元データ）v3.40.1 から、CSSに関係する機能を抽出した一覧（2026-10-07時点）。

- 対応ブラウザの版は web-features の値。部分的な実装は含まないため、実際には対応済みでも載っていないことがある（例: Anchor positioning は Chrome 125・Firefox 147 でも実装済みだが部分実装扱い）
- Edge は Chrome と同じ版のため省略
- 重要性は独断による。高: 多くのサイトで使い道があり、触って違いがわかる / 中: 特定の用途で役立つ / 低: 用途が限られる、古くからある、またはCSS以外の要素が大きい
- 各区分の中は重要性の順に並べている

## 2025年以降にBaselineになった機能（33件）

| 重要性 | 機能 | 解説 | Baselineになった日 |
|---|---|---|---|
| 高 | Popover | HTMLの popover 属性で、ページの最前面にポップオーバーを表示する。JavaScriptなしで開閉できる | 2025-01-27 |
| 高 | ::details-content | `<details>` の開閉される中身部分を選択する疑似要素。開閉アニメーションなどに使う | 2025-09-16 |
| 高 | View transitions | ページ内の状態変化をアニメーションでつなぐ（同一ドキュメント内のView Transitions） | 2025-10-14 |
| 高 | shape() | line・curve などの命令で図形を描く関数。clip-path などで、px と % を混ぜた形を作れる | 2026-02-24 |
| 高 | Custom highlights | DOMを変えずに、任意のテキスト範囲に色を付ける（CSS Custom Highlight API）。検索結果の強調などに使う | 2026-03-24 |
| 高 | @scope | スタイルの適用範囲を、ある要素の内側（と下限）に限定する @scope 規則 | 2026-03-24 |
| 高 | contrast-color() | 背景色に対して読みやすい文字色（白か黒）を自動で選ぶ関数 | 2026-04-10 |
| 高 | Container style queries | 親要素のカスタムプロパティの値に応じてスタイルを切り替えるコンテナクエリ | 2026-05-19 |
| 高 | field-sizing | `<textarea>` や `<input>` の大きさを入力内容に合わせて自動で伸び縮みさせる | 2026-06-16 |
| 高 | sibling-count() and sibling-index() | 兄弟要素の中での順番（sibling-index）と総数（sibling-count）を数値で取得する関数。段差アニメーションなどに使える | 2026-08-18 |
| 中 | content-visibility | 画面外の要素の描画を必要になるまで省略し、表示を高速化する | 2025-09-15 |
| 中 | view-transition-class | 複数のView Transitionの対象に共通のクラス名を付け、まとめてスタイルを当てる | 2025-10-14 |
| 中 | scrollbar-color | スクロールバーのつまみと溝の色を指定する | 2025-12-12 |
| 中 | Active view transition | View Transitionの実行中だけルート要素に一致する疑似クラス。遷移の種類で切り替えもできる | 2026-01-13 |
| 中 | ric unit | ルート要素の全角文字（「水」）の幅を基準にした長さの単位。日本語の字下げなどに使える | 2026-01-13 |
| 中 | :open | `<details>`・`<dialog>`・`<select>` などが開いているときに一致する疑似クラス :open | 2026-05-11 |
| 中 | progress() | ある値が2つの値の間のどの位置にあるかを0〜1の比率で返す関数 | 2026-09-01 |
| 中 | alpha() | 既存の色の透明度だけを変えた色を作る関数 | 2026-09-14 |
| 中 | light-dark() image values | light-dark() で色だけでなく画像やグラデーションもライト/ダークで切り替えられる | 2026-09-14 |
| 低 | print-color-adjust | 印刷時に背景色などをインク節約のために省略するかを指定する | 2025-05-01 |
| 低 | abs() and sign() | CSSの計算で絶対値（abs）と符号（sign）を求める関数 | 2025-06-26 |
| 低 | Spelling and grammar text decorations | スペルミス・文法ミスと同じ波線の装飾を任意のテキストに付ける | 2025-12-12 |
| 低 | rcap unit | ルート要素の大文字の高さを基準にした長さの単位 | 2026-01-13 |
| 低 | rch unit | ルート要素の「0」の幅を基準にした長さの単位 | 2026-01-13 |
| 低 | rex unit | ルート要素の小文字xの高さを基準にした長さの単位 | 2026-01-13 |
| 低 | text-indent: each-line | 改行（`<br>`）の後の行にも字下げを適用する | 2026-03-13 |
| 低 | text-indent: hanging | 1行目以外を字下げする（ぶら下げインデント） | 2026-03-13 |
| 低 | baseline-shift | 要素の位置をベースラインから上下にずらす。上付き・下付きの調整に使う | 2026-03-24 |
| 低 | Math font family | 数式表示用のブラウザ既定フォントを使う | 2026-03-24 |
| 低 | Name-only container queries | コンテナの名前だけで判定するコンテナクエリ（サイズ条件なし） | 2026-05-07 |
| 低 | crisp-edges | 画像を拡大したときにぼかさず、輪郭をくっきり保つ | 2026-05-07 |
| 低 | text-decoration-skip-ink: all | 下線が文字と重なる部分を常に途切れさせる | 2026-05-07 |
| 低 | overflow-anchor | 上に要素が追加されたときにスクロール位置がずれないようにする（スクロールアンカー）の有効・無効を指定する | 2026-09-14 |

## Baseline未達: Chrome・Firefox・Safariすべてに実装済み（7件）

| 重要性 | 機能 | 解説 | 対応ブラウザ |
|---|---|---|---|
| 中 | accent-color | チェックボックスやラジオボタンなどのフォーム部品の強調色を指定する | Chrome 93 / Firefox 92 / Safari 26.2 |
| 低 | ::selection | 選択したテキストの色を ::selection で指定する | Chrome 1 / Firefox 62 / Safari 1.1 |
| 低 | background-attachment | 背景画像をスクロールに合わせて動かすか固定するかを指定する | Chrome 1 / Firefox 25 / Safari 15.4 |
| 低 | Cursor styles | マウスカーソルの形を指定する | Chrome 68 / Firefox 27 / Safari 11 |
| 低 | Fullscreen API | 特定の要素を全画面表示にする | Chrome 71 / Firefox 64 / Safari 16.4 |
| 低 | Picture-in-picture (video) | 動画を小窓で最前面に表示する（ピクチャー・イン・ピクチャー） | Chrome 69 / Firefox 153 / Safari 13.1 |
| 低 | resize (CSS property) | ユーザーが要素の大きさをドラッグで変えられるようにする | Chrome 4 / Firefox 5 / Safari 4 |

## Baseline未達: 2つのブラウザエンジンで実装済み（38件）

| 重要性 | 機能 | 解説 | 対応ブラウザ |
|---|---|---|---|
| 高 | attr() | HTMLの属性値を、数値や色などの型付きの値としてどのプロパティでも使える attr() | Chrome 133 / Firefox 155 |
| 高 | Cross-document view transitions | 別ページへの移動をアニメーションでつなぐ（MPAのView Transitions）。このサイト自体で使える | Chrome 126 / Safari 18.2 |
| 高 | Customizable `<select>` | `<select>` の見た目（ボタン、選択肢、ドロップダウン）をCSSで自由に変える | Chrome 135 / Safari 27 |
| 高 | display animation | display: none との切り替えをアニメーションさせる | Chrome 117 / Safari 18 |
| 高 | Scroll-driven animations | スクロール量や要素の表示位置に連動してアニメーションを進める | Chrome 115 / Safari 26 |
| 高 | text-autospace | 和文と英数字の間に自動で少し空きを入れる | Firefox 145 / Safari 27 |
| 高 | text-box | 文字の上下の余白を削り、フォントの実際の高さで配置をそろえる | Chrome 133 / Safari 18.2 |
| 中 | ::marker | リストの番号や記号を ::marker で装飾する | Chrome 86 / Firefox 80 |
| 中 | Anchor positioning animations and transitions | アンカーの位置や大きさの変化に合わせて、配置した要素をアニメーションさせる | Chrome 125 / Safari 26 |
| 中 | background-clip: border-area | 背景を枠線の部分だけに描く。グラデーションの枠線などに使う | Chrome 150 / Safari 18.2 |
| 中 | background-clip: text | 背景を文字の形で切り抜く。グラデーション文字などに使う | Chrome 120 / Safari 14 |
| 中 | Font metric overrides | Webフォントの行の高さに関わる値を上書きし、読み込み前後のレイアウトのずれを減らす | Chrome 87 / Firefox 89 |
| 中 | overscroll-behavior | スクロール領域の端まで来たときに親へスクロールが伝わるのを止める | Chrome 144 / Firefox 150 |
| 中 | stretch | 要素を親の空き領域いっぱいに広げるサイズ指定のキーワード | Chrome 138 / Safari 27 |
| 中 | text-wrap: pretty | 段落の最終行に1語だけ残るのを避けるなど、読みやすい改行位置を選ぶ | Chrome 117 / Safari 26 |
| 低 | ::spelling-error and ::grammar-error | スペルミス・文法ミスと判定された部分の見た目を変える疑似要素 | Chrome 121 / Safari 17.4 |
| 低 | :autofill | ブラウザが自動入力したフォーム欄に一致する疑似クラス | Chrome 110 / Safari 15 |
| 低 | alignment-baseline | 要素を親のどのベースライン（文字の基準線）にそろえるかを指定する | Chrome 1 / Safari 5.1 |
| 低 | Anchor positioning transforms | アンカー要素に transform がかかっていても、その位置を基準に配置する | Chrome 144 / Safari 27 |
| 低 | at-rule() | @supports で、ある @規則（@container など）に対応しているかを判定する | Chrome 148 / Firefox 157 |
| 低 | baseline-source | 複数行の要素を、最初の行と最後の行のどちらのベースラインでそろえるか指定する | Chrome 111 / Firefox 115 |
| 低 | box-decoration-break | 行をまたいだ要素で、背景や枠線を行ごとに閉じて描くかを指定する | Chrome 130 / Firefox 32 |
| 低 | Case-sensitive attribute selector | 属性セレクタで大文字・小文字を区別して一致させる（s フラグ） | Firefox 66 / Safari 27 |
| 低 | color-mix() with three or more colors | color-mix() で3色以上を混ぜる | Firefox 150 / Safari 27 |
| 低 | COLRv1 | グラデーションなどを含む多色フォント形式（COLRv1）に対応する | Chrome 98 / Firefox 107 |
| 低 | cross-origin() for url() | CSSで読み込むファイルのCORS（オリジン間リソース共有）の扱いを指定する | Chrome 150 / Safari 26.2 |
| 低 | font-language-override | 言語ごとに異なる字形（例: 中国語と日本語の漢字の形）を指定して表示する | Chrome 143 / Firefox 34 |
| 低 | font-variant-emoji | 絵文字をカラー表示にするかテキスト表示にするかを指定する | Chrome 131 / Firefox 141 |
| 低 | Hyphenate limit chars | ハイフネーションする単語の最小文字数などを指定する | Chrome 109 / Firefox 137 |
| 低 | Media element pseudo-classes | 動画・音声の再生中・一時停止中・ミュートなどの状態に一致する疑似クラス | Firefox 150 / Safari 15.4 |
| 低 | Page selectors | 印刷時に最初のページや左右のページだけにスタイルを当てる | Chrome 18 / Safari 6 |
| 低 | page-orientation | 印刷時に、特定のページだけ向きを回転させる | Chrome 85 / Firefox 122 |
| 低 | path() | SVGのパス記法で clip-path などの形を指定する | Chrome 88 / Firefox 97 |
| 低 | referrer-policy() for url() | CSSで読み込むファイルのリクエストで送るリファラーを指定する | Chrome 150 / Safari 26.2 |
| 低 | text-justify | 両端揃えのとき、文字間と単語間のどちらで空きを調整するかを指定する | Chrome 145 / Firefox 55 |
| 低 | Time-relative pseudo-selectors | 動画の字幕で、表示済み・これから表示される字幕に一致する疑似クラス | Chrome 23 / Safari 7 |
| 低 | user-select | テキストを選択できるかどうかを指定する | Chrome 54 / Firefox 69 |
| 低 | Widows and orphans | ページや段の区切りで、前後に残す最少行数を指定する | Chrome 25 / Safari 1.3 |

## Baseline未達: 1つのブラウザエンジンのみ実装（68件）

| 重要性 | 機能 | 解説 | 対応ブラウザ |
|---|---|---|---|
| 高 | ::scroll-button | スクロール領域に、前後へスクロールするボタンを疑似要素 ::scroll-button で作る | Chrome 135 |
| 高 | @function | 引数を受け取って値を返す独自のCSS関数を @function で定義する | Chrome 139 |
| 高 | Anchor positioning | ある要素（アンカー）の位置を基準に別の要素を配置する。ツールチップやメニューをJavaScriptなしで配置できる | Safari 27 |
| 高 | Container scroll-state queries | スクロール中・stickyで貼り付いている・スナップしているなどの状態でスタイルを切り替える | Chrome 133 |
| 高 | corner-shape | border-radius の角の形を、面取り・切り欠き・スクワークル（なめらかな角丸）などに変える | Chrome 139 |
| 高 | Gap decorations | Grid・Flexboxの要素間の隙間に区切り線を引く（column-rule・row-rule） | Chrome 149 |
| 高 | Grid lanes | 要素を隙間なく詰めるレイアウト。いわゆるMasonry（Pinterest風）レイアウト | Safari 26.4 |
| 高 | if() | 条件に応じて値を切り替えるインラインの条件分岐関数 if() | Chrome 137 |
| 高 | Interest invokers | interestfor 属性で、ホバーやフォーカスで「興味を示した」ときにポップオーバーなどを表示する | Chrome 142 |
| 高 | interpolate-size | height: auto などのキーワードの大きさへのアニメーションを、ページ全体で有効にする | Chrome 129 |
| 高 | Scroll markers | スクロール位置を示すドット（::scroll-marker）を作る。CSSだけでカルーセルを作れる | Chrome 135 |
| 高 | text-fit | テキストをコンテナの幅いっぱいに合うよう自動で拡大・縮小する | Chrome 150 |
| 高 | text-spacing-trim | 日本語の括弧や句読点の前後の余分な空き（約物の詰め）を調整する | Chrome 123 |
| 高 | word-break: auto-phrase | 日本語の文章を文節の区切りで改行する | Chrome 119 |
| 中 | ::column | 段組みの各段を選択する疑似要素 ::column。段ごとのスクロールマーカーなどに使う | Chrome 135 |
| 中 | Anchor position container queries | アンカー配置した要素が代替位置（fallback）に移ったかをコンテナクエリで判定する | Chrome 143 |
| 中 | border-shape | 枠線の形自体を任意の図形にする | Chrome 147 |
| 中 | calc-size() | auto などのキーワードの大きさを計算に使える関数。height: auto へのアニメーションに使う | Chrome 129 |
| 中 | Element-scoped view transitions | ページ全体ではなく、特定の要素の中だけでView Transitionを実行する | Chrome 147 |
| 中 | flex-wrap: balance | Flexboxで折り返した各行の要素数を均等にそろえる | Chrome 150 |
| 中 | initial-letter | 段落の最初の文字を複数行分の大きさにするドロップキャップ | Chrome 110 |
| 中 | margin-trim | コンテナの端に接する子要素の余白（margin）を取り除く | Safari 16.4 |
| 中 | overlay | ポップオーバーやダイアログを閉じるアニメーション中も最前面に残す（transition で使う） | Chrome 117 |
| 中 | random() | 指定した範囲のランダムな値を返す関数 random() | Safari 26.2 |
| 中 | Range syntax for style queries | スタイルクエリで > や < を使ってカスタムプロパティの値の大小を判定する | Chrome 142 |
| 中 | reading-flow | Grid・Flexboxで、見た目の並び順どおりにTabキーのフォーカスや読み上げを行う | Chrome 137 |
| 中 | Responsive iframes | `<iframe>` の大きさを中身に合わせて自動調整する | Chrome 154 |
| 中 | Scroll marker target pseudo-classes | スクロールマーカーのうち、現在表示中の項目に一致する疑似クラス :target-current | Chrome 142 |
| 中 | scroll-target-group | 目次のアンカーリンクをスクロールマーカーとして扱い、表示中の項目を強調する | Chrome 140 |
| 低 | :has-slotted | Shadow DOMの `<slot>` に要素が差し込まれているときに一致する疑似クラス | Firefox 136 |
| 低 | caret-shape | テキスト入力のカーソル（キャレット）の形をブロックや下線にする | Chrome 144 |
| 低 | Column breaks | 段組みレイアウトで、段の区切り位置を break-before などで制御する | Chrome 102 |
| 低 | cross-fade() | 2つの画像を割合を指定して重ね合わせた画像を作る | Safari 10 |
| 低 | Custom ellipses | はみ出したテキストの省略記号を「…」以外の任意の文字列にする | Firefox 9 |
| 低 | Device posture | 折りたたみ端末が開いているか折れているかでスタイルを切り替えるメディアクエリ | Chrome 132 |
| 低 | display-mode media query | ブラウザのタブ表示か、インストールしたアプリ（PWA）としての表示かで切り替えるメディアクエリ | Chrome 47 |
| 低 | display: ruby | 任意の要素を `<ruby>`（ルビ）と同じレイアウトで表示する | Firefox 88 |
| 低 | DOM overlays for WebXR | WebXR（VR/AR）の画面の上にHTMLを重ねて表示する | Chrome 83 |
| 低 | dynamic-range-limit | HDR画像・動画の最大輝度を抑える | Chrome 136 |
| 低 | filter() | 背景画像などのCSS画像だけにフィルター（ぼかしなど）をかける関数 | Safari 9.1 |
| 低 | font-palette animation | カラーフォントの配色（font-palette）をアニメーションで切り替える | Chrome 121 |
| 低 | font-synthesis-position | 上付き・下付き文字をブラウザが合成するかを指定する | Firefox 118 |
| 低 | font-variant-position | フォントに用意された上付き・下付き専用の字形を使う | Firefox 34 |
| 低 | font-width | フォントの幅（condensed、expanded など）で書体を選ぶ。font-stretch の新しい名前 | Safari 18.4 |
| 低 | Hanging punctuation | 行頭・行末の句読点を枠の外に出し、文字の端をそろえる | Safari 26.5 |
| 低 | image-rendering: smooth | 画像を拡大するときになめらかに補間する | Firefox 93 |
| 低 | integrity() for url() | CSSで読み込むファイルを、ハッシュ値で改ざんがないか検証する | Chrome 150 |
| 低 | interactivity | CSSで要素を操作不能（inert）にする | Chrome 135 |
| 低 | inverted-colors media query | OSで色反転が有効かを判定するメディアクエリ | Safari 9.1 |
| 低 | justify-self in block layouts | ブロックレイアウトでも justify-self で横位置をそろえられる | Chrome 130 |
| 低 | mask-border | 画像を使って要素の縁をマスクする | Safari 17.2 |
| 低 | named-feature() | @supports で、名前の付いたCSSの機能に対応しているかを判定する | Chrome 150 |
| 低 | object-view-box | 画像の一部の範囲を切り抜き・拡大して表示する | Chrome 104 |
| 低 | overflow-clip-margin | はみ出した内容を切り取る位置を、要素の外側にどれだけ広げるか指定する | Firefox 148 |
| 低 | paint() | JavaScript（Paint Worklet）で描いた画像を背景などに使う | Chrome 65 |
| 低 | prefers-reduced-transparency media query | OSで「透明度を下げる」が有効かを判定するメディアクエリ | Chrome 119 |
| 低 | Reversed counter-reset | カウンターを逆順（カウントダウン）で数える | Firefox 96 |
| 低 | ruby-overhang | ルビが隣の文字の上にはみ出してよいかを指定する | Safari 18.2 |
| 低 | scroll-initial-target | ページを開いたときの初期スクロール位置を特定の要素にする | Chrome 133 |
| 低 | speak-as | 読み上げ時に、文字を1文字ずつ読むか、数字を桁ごとに読むかなどを指定する | Safari 11.1 |
| 低 | symbols() | リストの記号などのカウンタースタイルをその場で定義する関数 | Firefox 35 |
| 低 | text-decoration in ::selection | テキストを選択したときの下線などの装飾を ::selection で指定する | Chrome 105 |
| 低 | text-size-adjust | スマートフォンでブラウザが文字を自動拡大する動作を止める・調整する | Chrome 54 |
| 低 | UI fonts | OSのUIフォント（ui-sans-serif、ui-rounded など）を指定する | Safari 13.1 |
| 低 | video-dynamic-range media query | 端末がHDR動画を表示できるかを判定するメディアクエリ | Firefox 100 |
| 低 | Viewport segments | 折りたたみ端末の2画面それぞれの位置・大きさを取得してレイアウトする | Chrome 138 |
| 低 | Window Controls Overlay | インストールしたWebアプリで、タイトルバーの領域にも内容を表示する | Chrome 105 |
| 低 | window-drag | 要素をウィンドウを移動するためのつまみ（タイトルバー相当）にする | Chrome 152 |
