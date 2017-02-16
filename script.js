const button = document.querySelector('button');
const dialog = document.querySelector('.popup');
const main = document.querySelector('main');
const proNav = Array.from(document.querySelectorAll('nav ol li a'));

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
about.forEach(a => a.addEventListener('change', removeSubNav));

