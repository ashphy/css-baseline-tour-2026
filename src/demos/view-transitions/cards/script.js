const list = document.querySelector('.cards');
const cards = [...list.children];

function shuffle(items) {
	const result = [...items];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

document.querySelector('.cards-toolbar').addEventListener('click', (event) => {
	const action = event.target.closest('button')?.dataset.action;

	// @key
	// DOMの変更を startViewTransition() のコールバック内で行う
	document.startViewTransition(() => {
		if (action === 'shuffle') list.append(...shuffle(cards));
		if (action === 'sort') list.append(...cards);
		if (action === 'filter') {
			cards.forEach((card, i) => {
				if (i % 2 === 0) card.hidden = !card.hidden;
			});
		}
	});
	// @end
});
