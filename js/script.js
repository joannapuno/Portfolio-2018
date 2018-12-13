////////////////// HAMBURGER MENU ///////////////////////
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

////////////////// SCROLLING ON CLICK FUNCTION///////////////////////

// Main Down Arrow Button
$("#downLink").click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $("#down").offset().top + offset
    }, 1000);
});

// About Down Arrow Button
$("#downAboutLink").click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $("#down").offset().top + offset
    }, 1000);
});

// Projects Down Arrow Button
$("#downWorkLink").click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $("#downWork").offset().top + offset
    }, 2000);
});

// Contact Me Down Arrow Button
$("#downContactLink").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#downContact").offset().top + offset
    }, 2000);
});

// Hover on Project

(function ($) {
    $(document).ready(function() {
        $('.project-box').mouseover(function () {
            $(this).find('.hover-buttons').css({'display':'flex'});
            $(this).find('.project-content').css({'background':'#FFE3FA'});
            $(this).find('img').css({'opacity':'.2'});
        });
        $('.project-box').mouseout(function () {
            $(this).find('.hover-buttons').css({'display':'none'});
            $(this).find('.project-content').css({'background':'#FFE3FA'});
            $(this).find('img').css({'opacity':'1'});
        });
    });
})(jQuery);




// // Animate on Scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $( "#design" ).css('transform','translate(200px,0px)');
        $( "#develop" ).css('transform','translate(-200px,0px)');
       
    } else {
        $( "#design, #develop" ).css('position','relative');
        
    }
    });




