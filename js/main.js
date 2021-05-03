var doc = jQuery(document);
doc.ready(function(){
    "use strict";
    $("html,body").animate({ scrollTop: 0 }, "slow");
    var typed = new Typed('.mytext', {
        strings: ['We treat customers as God'],
        smartBackspace: true, // Default value
        // loop:true,
        backDelay: 2000,
        typeSpeed: 10
    });
    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });
    if($(window).scrollTop()<200)
    {
        $('.navbar-nav').addClass('navbar-nav-bg');
    }
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=200)
        {
            $('header').addClass('overlay');
            $('.navbar-nav').removeClass('navbar-nav-bg');
        }
        else if($('header').hasClass('overlay'))
        {
            $('header').removeClass('overlay');
        }
        else
        {
            $('.navbar-nav').addClass('navbar-nav-bg');
	    }
    });
        $grid = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });
});