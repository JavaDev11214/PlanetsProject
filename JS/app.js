// jQuery: header and containers of content fade in
$('.name').hide().fadeIn(1000);

$('#mercury')
	.hide()
	.fadeIn(1000);
$('#venus')
	.hide()
	.fadeIn(1000);
$('#mars')
	.hide()
	.fadeIn(1000);
$('#earth')
	.hide()
	.fadeIn(1000);
$('#jupiter')
	.hide()
	.fadeIn(1000);

$('ul li').hide().slideDown();

// javascript and the DOM
const pageWrap = document.querySelector('html');
const textInput = document.getElementById('textInput');
const myButton = document.getElementById('myButton');
const spanCopyright = document.getElementById('spanCopy');
const myImage = document.querySelectorAll('img');
const header2 = document.querySelectorAll('h2');

// the color that user types into the text field will be the background color of page after button is clicked
myButton.addEventListener('click', () => {
	if(textInput.value === 'black') {
		pageWrap.style.backgroundColor = textInput.value;
		spanCopyright.style.color = 'white';
		for(let i = 0; i < header2.length; i++) {
			header2[i].style.color = 'white';
		}
	} else if(textInput.value === 'white'){
		pageWrap.style.backgroundColor = textInput.value;
		spanCopyright.style.color = 'black';
		for(let i = 0; i < header2.length; i++) {
			header2[i].style.color = 'black';
		}
	} else {
		pageWrap.style.backgroundColor = textInput.value;
	}
});






