$(document).ready(function(){
    $("#nav-fold a").click(function() {
        var cptI = $("#nav-fold i");
        var cptH = $("#header-navbar-folded");
        cptI.hasClass("fa-angle-left") ? cptH.css({visibility: "hidden"}) : cptH.css({visibility: "visible"});
        cptI.toggleClass("fa-angle-left");
        cptI.toggleClass("fa-angle-down");
    });
});

var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
    });
    $(this).remove();
});

$(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
});

$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});
$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});



