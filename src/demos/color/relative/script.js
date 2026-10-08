const demo = document.querySelector('.relative-demo');

demo.querySelector('input[name="base"]').addEventListener('input', (event) => {
	demo.style.setProperty('--base', event.target.value);
});
