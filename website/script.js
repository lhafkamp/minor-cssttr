var button = document.querySelector('.login button');
var main = document.querySelector('main');
var form = Array.from(document.querySelectorAll('form input'));
var loaderbox = document.querySelector('#loaderbox');
var intro = document.querySelector('.intro');
var login = document.querySelector('.login');
var chatButton = document.querySelector('.menu ul li:nth-child(3)');
var chat = document.querySelector('.chatOption');
var chatInput = document.querySelector('.chatOption input');
var closeButton = document.querySelector('.close');

function enableButton() {
	if (form[0].value !== '' && form[1].value !== '') {
		button.removeAttribute('disabled');
		button.removeAttribute('enabled');
	}
}

// the definition of hacky
function nextPage() {
	loaderbox.style.opacity = 1;
	loaderbox.style.display = 'flex';
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

function slideInChat() {
	chat.classList.add('show');
	setTimeout(() => {
		chat.style.marginLeft = '0';
	}, 100);
}

function closeChat() {
	chat.style.marginLeft = '-25em';
	setTimeout(function() {
		chat.classList.add('hide');
	}, 400);
}

function closeChatWithEnter(e) {
	if (e.keyCode === 13) {
		chat.style.marginLeft = '-25em';
		setTimeout(function() {
			chat.classList.add('hide');
		}, 400);
	}
}

closeButton.addEventListener('click', closeChat);
chatInput.addEventListener('keydown', closeChatWithEnter);
chatButton.addEventListener('click', slideInChat);
button.addEventListener('click', nextPage);
form[1].addEventListener('input', enableButton);

