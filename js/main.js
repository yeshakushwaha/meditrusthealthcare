(function ($) {

"use strict";





	/* Preloader */

	var win = $(window);

	win.on('load',function() {

		$('.page-loader').delay(350).fadeOut('slow');

	});	

	

	/* menu last class added */

	$('ul.basic-menu li').slice(-2).addClass('menu-p-right');

	

	
	/* meanmenu */
	$('#mobile-nav').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['+'],
	});

	// 03. Sidebar Js
	$(".nav-bar").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	// ////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	/* hamburgers menu option  */

	$('.hamburger').on('click', function () {

		$(this).toggleClass('is-active');

		$(this).next().toggleClass('nav-menu-show')

	});


	

	/* TOP Menu Stick  */

	win.on('scroll',function() {

	if ($(this).scrollTop() > 1){  

		$('#sticky-header').addClass("sticky");

	  }

	  else{

		$('#sticky-header').removeClass("sticky");

	  }

	}); 

	

	/* magnificPopup video view */

	$('.popup-video').magnificPopup({

		type: 'iframe'

	});	

	

	/* magnificPopup img view */

	$('.popup-link').magnificPopup({

		type: 'image',

		gallery: {

		  enabled: true

		}

	});	

	



	/* main-slider */

	$('.slider-active').owlCarousel({

		loop:true,

		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],

		nav:true,

		animateOut: 'fadeOut',

		responsive:{

			0:{

				items:1

			},

			600:{

				items:1

			},

			1000:{

				items:1

			}

		}

	})	

	

	/* main-slider */

	$('.testimonial-active').owlCarousel({

		loop:true,

		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],

		nav:true,

		animateOut: 'fadeOut',

		responsive:{

			0:{

				items:1

			},

			768:{

				items:2

			},

			1000:{

				items:2

			}

		}

	})

	/* main-slider */

	$('.dep-slider').owlCarousel({

		loop:true,

		autoplay:true,

		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],

		nav:true,

		animateOut: 'fadeOut',

		responsive:{

			0:{

				items:1

			},

			768:{

				items:1

			},

			1000:{

				items:1

			}

		}

	})	

	

	/* portfolio-slider */

	$('.clients-active').owlCarousel({

		loop:true,

		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],

		nav:true,

		autoplay:true,

		animateOut: 'fadeOut',

		responsive:{

			0:{

				items:2

			},

			450:{

				items:3

			},

			768:{

				items:5

			},

			1000:{

				items:6

			}

		}

	})





	/* imagesLoaded active */

	$('#portfolio-grid').imagesLoaded( function() {

		

		/* Filter menu */

		$('.filter-menu').on( 'click', 'button', function() {

		  var filterValue = $(this).attr('data-filter');

		  $grid.isotope({ filter: filterValue });

		});	



		/* filter menu active class  */

		$('.filter-menu button').on('click', function(event) {

			$(this).siblings('.active').removeClass('active');

			$(this).addClass('active');

			event.preventDefault();

		});



		/* Filter active */

		var $grid = $('#portfolio-grid').isotope({

		  itemSelector: '.portfolio-item',

		  percentPosition: true,

		  masonry: {

			columnWidth: '.portfolio-item',

		  }

		});		

		

	});	

	

	/* scrollUp */

	$.scrollUp({

		scrollName: 'scrollUp', // Element ID

		topDistance: '300', // Distance from top before showing element (px)

		topSpeed: 300, // Speed back to top (ms)

		animation: 'fade', // Fade, slide, none

		animationInSpeed: 1000, // Animation in speed (ms)

		animationOutSpeed: 1000, // Animation out speed (ms)

		scrollText: '<i class="ion-chevron-up"></i>', // Text for element

	});	

	

	/* Price filter active */

	$( "#slider-range" ).slider({

		range: true,

		min: 0,

		max: 500,

		values: [ 75, 300 ],

		slide: function( event, ui ) {

			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );

		}

	});

	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +

		" - $" + $( "#slider-range" ).slider( "values", 1 ) );

	







})(jQuery);	








(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

