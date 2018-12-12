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


// //Scroll up when Refreshed
// var body = $("html, body");
// body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
// });

////////////////// INTERACTIVE FUNCTIONS - FUN!!! ///////////////////////

// Hover on Project box
$('.thumb').mouseover(function(){
    $(this).css('opacity','.2');
    $('.hover-text span').text('Project Title');
    
}).mouseout(function(){
    $(this).css('opacity','1');
    
});

// Animate on Scroll
$(document).ready(function() {

    $(window).scroll(function() {
    
      if ($(window).scrollTop() > 500) {
          $(this).show("slide", { direction: "left" }, 1000);
      }
      if ($(window).scrollTop() < 500) { $('.work-info-text').slideUp(500);
      }
    });
    });


    



