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
];

export function url(path = '') {
	return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
}
