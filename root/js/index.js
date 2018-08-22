$(document).ready(function(){
    $("#nav-fold a").click(function() {
        var cptI = $("#nav-fold i");
        var cptH = $("#header-navbar-folded");
        cptI.hasClass("fa-angle-left") ? cptH.css({visibility: "hidden"}) : cptH.css({visibility: "visible"});
        cptI.toggleClass("fa-angle-left");
        cptI.toggleClass("fa-angle-down");
    });
});