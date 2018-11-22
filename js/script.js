// console.log('working!');

/* A simple and scalable hamburger menu using css transitions. */
var isActive = false;

$('.menuBtn').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}
	isActive = !isActive;
});

