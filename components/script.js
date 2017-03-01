const button = document.querySelector('.login button');
const dialog = document.querySelector('.popup');
const main = document.querySelector('main');
const proNav = Array.from(document.querySelectorAll('nav ol li a'));
const form = Array.from(document.querySelectorAll('form input'));

function openDialog() {
	dialog.style.display = 'block';
	main.classList.add('de-emphasized');
}

function removeDialog() {
	dialog.style.display = 'none';
	main.classList.remove('de-emphasized');
}

function enableButton() {
	if (form[0].value !== '' && form[1].value !== '') {
		button.removeAttribute('disabled');
		button.removeAttribute('enabled');
	}
}

button.addEventListener('click', openDialog);
dialog.addEventListener('click', removeDialog);
form[1].addEventListener('input', enableButton);


// nav focus

const product = document.querySelector('.product');
const subnav = document.querySelector('.menu li ul');


function showNav(e) {
	if (e.code === 'Tab' && e.target.classList.contains('product') || e.target.classList.contains('hi')) {
		subnav.style.padding = '2em 1em 1em 0';
		subnav.style.position = 'absolute';
		subnav.style.display = 'block';
	} else {
		subnav.style.display = 'none';
	}
}

document.addEventListener('keyup', showNav);
