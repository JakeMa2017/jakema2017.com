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

// Time at the footnote

//document.getElementById('dateee').innerHTML = new Date();

function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var mon = today.getMonth();
    var date = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    mon += 1;
    mon = checkTime(mon);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dateee').innerHTML =
    mon + "/" + date + "/" + y + " " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

