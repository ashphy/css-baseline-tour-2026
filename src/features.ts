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
];

export function url(path = '') {
	return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
}
