const demo = document.querySelector('.oklch-demo');
const values = demo.querySelectorAll('.oklch-value');

demo.querySelector('input[name="lightness"]').addEventListener('input', (event) => {
	const lightness = `${event.target.value}%`;
	demo.style.setProperty('--l', lightness);
	values.forEach((value) => (value.textContent = lightness));
});
