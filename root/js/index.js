$(document).ready(function(){
    $("#nav-fold a").click(function() {
        $(this).css("color") == 'rgb(255, 255, 255)' ? ($(this).css({color: "blue"}), $("#header-navbar-folded").css({visibility: "hidden"}) ) : ($(this).css({color: "white"}), $("#header-navbar-folded").css({visibility: "visible"}) );
        $("#nav-fold i").toggleClass("fa-angle-left");
        $("#nav-fold i").toggleClass("fa-angle-down");
    });
});