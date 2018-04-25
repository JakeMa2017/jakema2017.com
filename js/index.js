$(document).ready(function(){

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

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

    var controller = new ScrollMagic.Controller();

    var introTl = new TimelineMax();

    // introTl
    //     .to($('.bcg-parallax .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
    //     .to($('.bcg-parallax'), 0.7, {autoAlpha: 0.5, ease:Power1.easeNone}, '-=1.4');

    // var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.bcg-parallax',
    //     triggerHook: 5,
    //     duration: '100%'
    // })
    // .setTween(introTl)
    // .addTo(controller);

    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: true

        }).init();

    }());

});