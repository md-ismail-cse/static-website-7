/*=============================================
                Preloader
===============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Bootstrap Title
===============================================*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/*=============================================
                Home Slider
===============================================*/
$(function () {
    $('#home-slider').bxSlider({
        auto: true,
        mode: 'fade',
        infiniteLoop: true,
        speed: 100
    });
})

/* =========================================
                Navigation
============================================ */
$(function () {
    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("site-top-nav");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $("#back-to-top").fadeIn();
        } else {
            header.classList.remove("sticky");
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});


/* =========================================
                About
============================================ */

// Process bar
$(function () {
    $("#about-progress-bar").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

//Process Number
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
});

/*=============================================
                Team
===============================================*/
$(function () {
    $("#team-items").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 4
            }
        }
    });
});

/*=============================================
                Portfolio
===============================================*/
$(function () {
    $("#portfolio-01-items").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
});


//Isotope
$(window).on('load', function () {

    // Initialize Isotope
    $("#portfolio-container").isotope({});

    // filter items on button click
    $("#portfolio-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#portfolio-container").isotope({
            filter: filterValue
        });

        // active button
        $("#portfolio-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

//Magnific-popup
$(function () {
    $('.portfolio-view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================================
                Testimonials
===============================================*/
$(function () {
    $("#testimonials-items").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
});

/*=============================================
                Clients
===============================================*/
$(function () {
    $("#clients-items").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });
});