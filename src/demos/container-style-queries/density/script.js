const list = document.querySelector('.density-list');

document.querySelector('select[name="density"]').addEventListener('change', (event) => {
	list.style.setProperty('--density', event.target.value);
});
