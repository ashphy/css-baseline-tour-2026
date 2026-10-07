const card = document.querySelector('.variant-card');

document.querySelector('select[name="variant"]').addEventListener('change', (event) => {
	card.style.setProperty('--variant', event.target.value);
});
