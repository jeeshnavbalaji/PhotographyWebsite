//[Master Javascript]

//Project:	Photography Studio  - Onepage Html Responsive Template
//Version:	1.1
//Last change:	24/05/2017 [fixed bug]
//Primary use:	Photography Studio  - Onepage Html Responsive Template 


//template script here

$(document).ready(function(){
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 81
    });

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').on('click', function(event) {
		$(this).closest('.collapse').collapse('toggle');
	});

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


    // Initialize and Configure Scroll Reveal Animation
	
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    

	
	// Masterslider 
	var slider = new MasterSlider();
	 
		slider.control('arrows' ,{insertTo:'#masterslider'});  
		slider.control('bullets'); 
	 
		slider.setup('masterslider' , {
			width:1024,
			height:768,
			space:5,
			view:'fade',
			layout:'fullscreen',
			speed:20,
			autoplay:true
		});
	
	// prettyPhoto

	$("a[rel^='alternate']").prettyPhoto();

}); // End of use strict


