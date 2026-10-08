const button = document.querySelector('.contrast-button');

document.querySelector('input[name="bg"]').addEventListener('input', (event) => {
	button.style.setProperty('--bg', event.target.value);
});
