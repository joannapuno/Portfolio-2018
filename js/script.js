// console.log('working!');

// Hamburger Menu YUMMM
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

// Down Arrow Button
$("#downLink").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#down").offset().top + offset
    }, 1000);
});


//Scroll up when Refreshed
var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
});




