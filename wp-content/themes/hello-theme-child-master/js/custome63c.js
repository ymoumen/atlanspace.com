jQuery(document).ready(function($){
	$('#owl-carousel-1').owlCarousel({
	    loop: true,
	    margin: 30,
	    nav: true,
		dots: false,
	    autoplay:true,
		autoplayTimeout:6500,
		smartSpeed:1050,
	    items: 3,
		//navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			800: {
				items: 3
			}
		}
	});
	
	$('#owl-carousel-3').owlCarousel({
	    loop: true,
	    margin: 30,
	    nav: true,
		dots: true,
	    autoplay:true,
		autoplayTimeout:6500,
		smartSpeed:1050,
	    items: 1,
		//navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			800: {
				items: 1
			}
		}
	});
	
    $('.testimonial-slick-sider').slick({
        dots: true,
        nav:false,
        speed: 300,
        centerMode:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    nav:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    nav:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});