const list = document.querySelector('.gallery-list');
const detail = document.querySelector('.gallery-detail');
let current;

list.addEventListener('click', (event) => {
	const thumb = event.target.closest('.gallery-thumb');
	if (!thumb) return;
	current = thumb;

	// @key
	// 変更前: クリックしたサムネイルに名前を付ける
	thumb.style.viewTransitionName = 'hero';

	document.startViewTransition(() => {
		// 変更後: 名前を詳細側の .gallery-hero に移す
		thumb.style.viewTransitionName = '';
		detail.style.setProperty('--hue', thumb.style.getPropertyValue('--hue'));
		detail.querySelector('.gallery-title').textContent = thumb.textContent;
		list.hidden = true;
		detail.hidden = false;
	});
	// @end
});

detail.querySelector('.gallery-back').addEventListener('click', async () => {
	const transition = document.startViewTransition(() => {
		list.hidden = false;
		detail.hidden = true;
		current.style.viewTransitionName = 'hero';
	});
	await transition.finished;
	current.style.viewTransitionName = '';
});
