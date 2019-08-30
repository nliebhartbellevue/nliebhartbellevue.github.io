// call scroll function when user has scrolled past a point
window.onscroll = function() {
	scrollFunc();
};

function scrollFunc() {
	const nav = document.getElementById('main-nav');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		nav.classList.add('nav-color');
	} else {
		nav.classList.remove('nav-color');
	}
}
