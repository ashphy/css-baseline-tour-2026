const text = document.querySelector('.lint-text');
const list = document.querySelector('.lint-list');

const rules = [
	{ type: 'lint-error', pattern: /サーバ(?!ー)/g, message: '「サーバ」は「サーバー」に統一' },
	{ type: 'lint-error', pattern: /出来る/g, message: '「出来る」は「できる」とひらがなで書く' },
	{ type: 'lint-error', pattern: /下さい/g, message: '「下さい」は「ください」とひらがなで書く' },
	{ type: 'lint-warning', pattern: /事/g, message: '形式名詞の「事」は「こと」とひらがなで書く' },
];

// @key
const highlights = {
	'lint-error': new Highlight(),
	'lint-warning': new Highlight(),
};
CSS.highlights.set('lint-error', highlights['lint-error']);
CSS.highlights.set('lint-warning', highlights['lint-warning']);
// @end

function check() {
	Object.values(highlights).forEach((highlight) => highlight.clear());
	const messages = new Set();
	const walker = document.createTreeWalker(text, NodeFilter.SHOW_TEXT);
	for (let node = walker.nextNode(); node; node = walker.nextNode()) {
		for (const { type, pattern, message } of rules) {
			for (const match of node.textContent.matchAll(pattern)) {
				const range = new Range();
				range.setStart(node, match.index);
				range.setEnd(node, match.index + match[0].length);
				highlights[type].add(range);
				messages.add(message);
			}
		}
	}
	list.replaceChildren(
		...[...messages].map((message) => Object.assign(document.createElement('li'), { textContent: message })),
	);
}

text.addEventListener('input', check);
check();
