const button = document.querySelector('button');
const dialog = document.querySelector('.popup');
const main = document.querySelector('main');
const progress = document.querySelector('progress');
const proNav = Array.from(document.querySelectorAll('nav ol li a'));

function openDialog() {
	dialog.style.display = 'block';
	main.classList.add('de-emphasized');
}

function removeDialog() {
	dialog.style.display = 'none';
	main.classList.remove('de-emphasized');
}

// TODO add a's
function addProgress() {
	if (progress.value < 0.26) {
		proNav[0].style.color = '#2ecc71';
	} else {
		proNav[1].style.color = '#2ecc71';
	}
}

addProgress();

button.addEventListener('click', openDialog);
dialog.addEventListener('click', removeDialog);
progress.addEventListener('click', addProgress);
