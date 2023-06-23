(function($) {

	"use strict";


	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: false,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back control-collapse'></span>","<span class='ion-ios-arrow-forward control-collapse'></span>"],
	    responsive:{
	      0:{
	        items:1
		  },

		  920:{
			items:2
	      },
	      1000:{
	        items:2
	      },
	      1220:{
	        items:3
	      },
		  1600:{
	        items:4
	      },
		  2300:{
	        items:5
	      }
	    }
		});

	};
	carousel();

})(jQuery);