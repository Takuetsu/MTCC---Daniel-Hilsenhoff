'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Carousel Slider
	--------------------*/
	$('.car-slider').owlCarousel({
		loop: true,
		nav: false,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true,
		autoplayTimeout: 4000
	});

	/*------------------
		Overview Slider
	--------------------*/
	$('.overview-slider').owlCarousel({
		loop: true,
		dots: true,
		dotsEach: 2,
		margin: 10,
		nav: true,
		mouseDrag: true,
		items: 2,
		autoplay: true,
		autoplayTimeout: 6000,
		navText : ["<i class='fa fa-chevron-left light'></i>","<i class='fa fa-chevron-right light'></i>"]
	});

	/* -----------------------------------------------
	Hover effect for product + on rafter square image
	------------------------------------------------*/
	$('#sq1').hover(function(){
		$("#box1").toggleClass("box-hl");
	});

	$('#sq2').hover(function(){
		$("#box2").toggleClass("box-hl");
	});

	$('#sq3').hover(function(){
		$("#box3").toggleClass("box-hl");
	});

})(jQuery);

