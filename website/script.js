const button = document.querySelector('.login button');
const main = document.querySelector('main');
const form = Array.from(document.querySelectorAll('form input'));
const loaderbox = document.querySelector('#loaderbox');
const intro = document.querySelector('.intro');
const login = document.querySelector('.login');

function enableButton() {
	if (form[0].value !== '' && form[1].value !== '') {
		button.removeAttribute('disabled');
		button.removeAttribute('enabled');
	}
}

// the definition of hacky
function nextPage() {
	loaderbox.style.opacity = 1;
	loaderbox.style.display = 'block';
	setTimeout(function() {
		loaderbox.style.opacity = 0;
		setTimeout(function() {
			loaderbox.style.display = 'none';
		}, 850);
		intro.classList.remove('hide');
		intro.style.display = 'flex';
		login.classList.add('hide');
	}, 800);
}

button.addEventListener('click', nextPage);
form[1].addEventListener('input', enableButton);

