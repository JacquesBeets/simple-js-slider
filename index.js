var slider = document.getElementById('slider');

var counter = 0;
var time = 4000;
var images = [
	'https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
	'https://images.unsplash.com/photo-1558039719-79cb7b60d279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
	'https://images.unsplash.com/photo-1557990441-afaa9cfc4b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80'
];

// Callback function
function slide() {
	var slide = slider.querySelectorAll('.slide');

	if (counter < images.length - 1) {
		slide[counter].style.transform = 'translateX(-100%)';
		slide[counter + 1].style.opacity = '1';
		counter++;
	} else {
		counter = 0;
		setImageStyles();
	}
}

function addImagesToDom() {
	var i = 0;
	images.forEach(function() {
		var html = '<img id="%id%" name="slide" class="slide" src="%src%">';
		var newHtml = html.replace('%src%', images[i]);
		newHtml = newHtml.replace('%id%', i);

		slider.insertAdjacentHTML('beforeend', newHtml);
		i++;
	});

	setImageStyles();
}

function setImageStyles() {
	slider.style.position = 'relative';
	var slide = slider.querySelectorAll('.slide');
	slide.forEach(function(e) {
		e.style.position = 'absolute';
		e.style.height = '100%';
		e.style.width = '100%';
		e.style.objectFit = 'cover';
		e.style.transform = 'translateX(0%)';
		e.style.transition = 'all 0.5s ease';
		e.style.opacity = '0';
	});
	slide[0].style.opacity = '1';
}

addImagesToDom();

var timer = setInterval(slide, time);

window.onload = timer;
