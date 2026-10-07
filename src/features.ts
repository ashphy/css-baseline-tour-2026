export interface Feature {
	slug: string;
	title: string;
	/** Baselineの状態。例: "Baseline 2025" */
	status: string;
	summary: string;
	mdn: string;
}

/** 発表で紹介する順番 */
export const features: Feature[] = [
	{
		slug: 'view-transitions',
		title: 'View Transitions',
		status: 'Baseline 2025',
		summary: '画面の状態変化を、前後のスナップショットをつなぐアニメーションで表現する',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/API/View_Transition_API',
	},
	{
		slug: 'popover',
		title: 'Popover',
		status: 'Baseline 2025',
		summary: 'HTMLの属性だけで、最前面に表示されるポップオーバーを開閉する',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/API/Popover_API',
	},
	{
		slug: 'custom-highlights',
		title: 'Custom Highlight API',
		status: 'Baseline 2026',
		summary: 'DOMを変えずに、テキストの任意の範囲に色や下線を付ける',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/API/CSS_Custom_Highlight_API',
	},
	{
		slug: 'container-style-queries',
		title: 'Container style queries',
		status: 'Baseline 2026',
		summary: '親要素のカスタムプロパティの値に応じて、子要素のスタイルを切り替える',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries',
	},
	{
		slug: 'field-sizing',
		title: 'field-sizing',
		status: 'Baseline 2026',
		summary: '入力欄の大きさを、入力内容に合わせて自動で伸び縮みさせる',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/field-sizing',
	},
	{
		slug: 'text-autospace',
		title: 'text-autospace',
		status: '一部 Baseline 2025（normal / no-autospace）',
		summary: '和文と英字・数字の間に、自動で少し空きを入れる',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/text-autospace',
	},
	{
		slug: 'text-box',
		title: 'text-box',
		status: 'Baseline 未達（Chrome・Safari）',
		summary: '文字の上下にある余分な空きを削り、見た目の位置をそろえる',
		mdn: 'https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/text-box',
	},
];

export function url(path = '') {
	return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
}
