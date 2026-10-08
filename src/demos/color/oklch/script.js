const demo = document.querySelector('.oklch-demo');

demo.querySelectorAll('.oklch-picker').forEach((picker) => {
	picker.addEventListener('input', (event) => {
		const { name, value } = event.target;
		picker.style.setProperty(`--${name}`, value);
		picker.querySelectorAll(`[data-value="${name}"]`).forEach((el) => (el.textContent = value));
	});
});

// sRGB の色を、oklch の l（0〜1）に変換する
function toLightness(color) {
	const oklch = color.match(/^oklch\(([\d.]+)/);
	if (oklch) return Number(oklch[1]);
	const [r, g, b] = color
		.match(/[\d.]+/g)
		.slice(0, 3)
		.map((v) => {
			const c = v / 255;
			return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
		});
	const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
	const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
	const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
	return 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
}

// 各色の下に、白黒にしたときの明るさを表示する
function updateGrays(compare) {
	compare.querySelectorAll('li').forEach((li) => {
		const lightness = toLightness(getComputedStyle(li.querySelector('.oklch-color')).backgroundColor);
		const gray = li.querySelector('.oklch-gray');
		gray.textContent = Math.round(lightness * 100);
		gray.style.background = `oklch(${lightness} 0 0)`;
		gray.style.color = lightness > 0.6 ? '#18202c' : 'white';
	});
}

demo.querySelectorAll('.oklch-compare').forEach((compare) => {
	const values = compare.querySelectorAll('.oklch-value');
	compare.querySelector('input[name="lightness"]').addEventListener('input', (event) => {
		const lightness = `${event.target.value}%`;
		compare.style.setProperty('--l', lightness);
		values.forEach((value) => (value.textContent = lightness));
		updateGrays(compare);
	});
	updateGrays(compare);
});
