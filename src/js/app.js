(function(e) {
    e(window.jQuery, window, document);
})(function($, window, document) {
    console.log('init');
    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            //app.select2();
            app.headerResponsive();
            app.slider();
            app.maps();
            app.arrowUp();
        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        select2: function() {
            $(document).ready(function() {
                $("select").select2();
            });
        },
        headerResponsive: function() {
            $(document).ready(function() {
                $("#navToggle a").click(function(e) {
                    e.preventDefault();
                    $(".nav-dress").slideToggle("medium");
                    $("#logo").toggleClass("menuUp menuDown");

                });

                $(window).resize(function() {
                    if ($(window).width() >= "600") {
                        $(".nav-dress").css("display", "block");
                        if ($("#logo").attr('class') == "menuDown") {
                            $("#logo").toggleClass("menuUp menuDown");
                        }
                    } else {
                        $(".nav-dress").css("display", "none");

                    }
                });

                $(".head-dress .nav-dress ul li a").click(function(e) {
                    if ($(window).width() <= "600") {
                        if ($(this).sibling().size > 0) {
                            $(this).siblings().slideToggle("fast");
                            $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');

                        }

                    }
                });

            });
        },
        slider: function() {
            $(document).ready(function() {
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    dots: true,
                    autoplay: true,
                    items: 3,
                    nav: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                })

            });

        },
        maps: function() {
            $(document).ready(function() {
                var myLatLng = { lat: -25.363, lng: 131.044 };

                // Create a map object and specify the DOM element
                // for display.
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: myLatLng,
                    zoom: 4
                });

                // Create a marker and set its position.
                var marker = new google.maps.Marker({
                    map: map,
                    position: myLatLng,
                    title: 'Hello World!'
                });

            });

        },
        arrowUp: function() {
            $(document).ready(function() {
                $('#return-to-top').click(function() { // When arrow is clicked
                    $('body,html').animate({
                        scrollTop: 0 // Scroll to top of body
                    }, 500);
                });

            });

        },

    }
    $(document).ready(function() {
        app.init($);
    });

});