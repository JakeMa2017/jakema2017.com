$(document).ready(function(){
    $("#name").fadeIn(500, function() {
    	$("#dnav1").fadeIn(500);
    	$("#dnav2").fadeIn(1000);
    	$("#dnav3").fadeIn(1500);
    	$('div.padding').removeClass('padding');
    });

    $("#nav1").hover(function(){
        $("#nav1").animate({fontSize: '+=15px'}, 100);
        $("#nav2").css('color', 'gray');
        $("#nav3").css('color', 'gray');
    },
    function() {
    	$("#nav1").animate({fontSize: '-=15px'}, 100);
    	$("#nav2").css('color', 'white');
        $("#nav3").css('color', 'white');
    });

    $("#nav2").hover(function(){
        $("#nav2").animate({fontSize: '+=15px'}, 100);
        $("#nav1").css('color', 'gray');
        $("#nav3").css('color', 'gray');
    },
    function() {
    	$("#nav2").animate({fontSize: '-=15px'}, 100);
    	$("#nav1").css('color', 'white');
        $("#nav3").css('color', 'white');
    });

    $("#nav3").hover(function(){
        $("#nav3").animate({fontSize: '+=15px'}, 100);
        $("#nav1").css('color', 'gray');
        $("#nav2").css('color', 'gray');
    },
    function() {
    	$("#nav3").animate({fontSize: '-=15px'}, 100);
    	$("#nav2").css('color', 'white');
        $("#nav1").css('color', 'white');
    });
});
