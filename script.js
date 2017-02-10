const button = document.querySelector('button');
const dialog = document.querySelector('.popup');
const main = document.querySelector('main');

function openDialog() {
	dialog.style.display = 'block';
	main.classList.add('de-emphasized');
}

function removeDialog() {
	dialog.style.display = 'none';
	main.classList.remove('de-emphasized');
}

button.addEventListener('click', openDialog);
dialog.addEventListener('click', removeDialog);
