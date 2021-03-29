(function($) {
    $(document).ready(function() {
        //sticky menu when scroll
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $(".header-section").addClass("sticky_top_section");
            } else {
                $(".header-section").removeClass("sticky_top_section");
            }
        });


        

        //mobile menu custom js
        $(".mobile-home-btn").on("click", function() {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });
        $(".mobile-menu-btn").on("click", function() {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function() {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function() {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $('.food').owlCarousel({
        loop:true,
        margin:20,
        autoplay: false,
        responsiveClass:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:2,
                loop:true
            },
            1000:{
                items:3,
                loop:true
            }
        }
    });

    });
})(jQuery);