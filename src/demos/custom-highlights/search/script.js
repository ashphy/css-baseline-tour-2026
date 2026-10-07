const input = document.querySelector('.search-input');
const text = document.querySelector('.search-text');
const count = document.querySelector('.search-count');

// @key
const highlight = new Highlight();
CSS.highlights.set('search', highlight);
// @end

function update() {
	highlight.clear();
	const query = input.value.trim().toLowerCase();
	if (query) {
		const walker = document.createTreeWalker(text, NodeFilter.SHOW_TEXT);
		for (let node = walker.nextNode(); node; node = walker.nextNode()) {
			const content = node.textContent.toLowerCase();
			for (let i = content.indexOf(query); i !== -1; i = content.indexOf(query, i + query.length)) {
				// @key
				// 一致した範囲を Range で表し、ハイライトに追加する。DOMは変更しない
				const range = new Range();
				range.setStart(node, i);
				range.setEnd(node, i + query.length);
				highlight.add(range);
				// @end
			}
		}
	}
	count.textContent = `${highlight.size} 件見つかりました`;
}

input.addEventListener('input', update);
update();
