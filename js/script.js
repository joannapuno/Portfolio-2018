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
$('#downLink').click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $('#down').offset().top + offset
    }, 1000);
});

// About Down Arrow Button
$('#downAboutLink').click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $('#down').offset().top + offset
    }, 1000);
});
// What I do Down Arrow Button
$('#downWhatLink').click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $('#downWhat').offset().top + offset
    }, 1000);
});

// Projects Down Arrow Button
$('.downWorkLink').click(function() {
    var offset = 20; 

    $('html, body').animate({
        scrollTop: $('#downWork').offset().top + offset
    }, 2000);
});

// Contact Me Down Arrow Button
$('.downContactLink').click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $('#downContact').offset().top + offset
    }, 2000);
});
// Back to Top Down Arrow Button
$('.toTopLink').click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $('#toTop').offset().top + offset
    }, 2000);
});

// Hover on Project + Query/Window Resize
let eventFired = 0;

if ($(window).width() < 960) {
    $('.project-box').mouseover(function () {
        $(this).find('.hover-buttons').css({'display':'none'});
    });
}
else {
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
    eventFired = 1;
}

(function ($) {
    $(document).ready(function() {

        $(window).resize(function() {
            if ($(window).width() > 700) {
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
            }
           else {
            $('.project-box').mouseover(function () {
                $(this).find('.hover-buttons').css({'display':'none'});
            });
           }
        }); 
    });
})(jQuery);




// // Animate on Scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $( '#design' ).css('transform','translate(200px,0px)');
        $( '#develop' ).css('transform','translate(-200px,0px)');
       
    } else {
        $( '#design, #develop' ).css('position','relative');
        
    }
});
