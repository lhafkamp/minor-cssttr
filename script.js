const button = document.querySelector('.login button');
const dialog = document.querySelector('.popup');
const main = document.querySelector('main');
const proNav = Array.from(document.querySelectorAll('nav ol li a'));
const form = Array.from(document.querySelectorAll('form input'));
const loaderbox = document.querySelector('#loaderbox');

// the definition of hacky
setTimeout(function() {
	loaderbox.style.opacity = 0;
	setTimeout(function() {
		loaderbox.style.display = 'none';
	}, 850);
}, 800);

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
// TODO fix tabprob
const product = document.querySelector('.menu li:nth-child(2)');
const about = document.querySelectorAll('.menu li:nth-child(3)');
const subnav = document.querySelector('.menu li ul');

function getSubNav() {
	subnav.style.padding = '2em 1em 1em 0';
	subnav.style.position = 'absolute';
	subnav.style.display = 'block';
}

function removeSubNav() {
	subnav.style.display = 'none';
}

product.addEventListener('keyup', getSubNav);
about.forEach(a => a.addEventListener('keyup', removeSubNav));

