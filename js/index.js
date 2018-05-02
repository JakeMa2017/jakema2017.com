$(document).ready(function(){

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------

    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    (function () {
        $(".fullHeight").height($(window).height());

        // Make sure the size always fit to window by changing the size of window
        $(window).resize(function(){
            $(".fullHeight").height($(window).height());
        });

    }());
    
    // -------------------------------------------------------------
    // Parallax Section Divider
    // -------------------------------------------------------------
    var controller = new ScrollMagic.Controller();


    // parallax scene

    var parallaxTl = new TimelineMax();
    parallaxTl
        // .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.secDivider', 2, {y: '-50%', ease:Power0.easeNone}, 0)
        ;

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.secDivider-parallax',
        triggerHook: 1,
        duration: '100%'
    })
    .setTween(parallaxTl)
    .addTo(controller);

    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: true

        }).init();

    }());

});
