
$(document).ready(function() {

    //#region FUNCTIONS DECLARATIONS

    function navClick(){
        var cpt1I = $("#nav-fold i");
        var cpt1H = $("#header-navbar-folded");
        var cpt1HH = $("#header-navbar");
        var cpt2Ii = $("#nav-fold-2 i");

        function subfunction_invisible(){
            cpt1I.removeClass("fa-angle-left");
            cpt1H.removeClass("d-flex");
            cpt1I.addClass("fa-angle-right");
            cpt1H.addClass("d-none");
            cpt1HH.css("justify-content", "flex-end");
            cpt2Ii.removeClass("fa-angle-down");
            cpt2Ii.addClass("fa-angle-right");
            if( $(window).width() <= 975 ) {
                $('#header').css({height: "68px"});
            }

        }
        function subfunction_visible(){
            cpt1I.removeClass("fa-angle-right");
            cpt1H.removeClass("d-none");
            cpt1I.addClass("fa-angle-left");
            cpt1H.addClass("d-flex");
            cpt1HH.css("justify-content", "normal");
            cpt2Ii.removeClass("fa-angle-right");
            cpt2Ii.addClass("fa-angle-down");
            if( $(window).width() < 975 ) {
                $('#header').css({height: "136px"});
            }
        }

        
        cpt1H.hasClass("nav-invisible") ? subfunction_invisible() : subfunction_visible();
    }

    function sizingboxes(){
        var $item = $('.carousel-item'); 
        var $itemDiv = $('.carousel-item .row div');
        var $wHeight = $("#carousel-maquette").height();
        var $imgWidth = $('.carousel-item img').width();
        $item.eq(0).addClass('active');
        $item.height($wHeight); 

        var $navHeight = $('#header-navbar-folded').height();
        $('#header-navbar-folded li a div').height($navHeight);
        var $iPixelSize = $('#header-navbar-folded i').css("font-size");
        var $iSize = parseInt($iPixelSize, 10);
        $('.nav-text').height($navHeight - $iSize);

        var $pDiv = $('.nav-text p');
        var $pHeight = $pDiv.height();
        var $tDivHeight = $('.nav-text').height();
        $pDiv.parent().css('position','relative');
        $pDiv.css('position', 'absolute');
        var $pTop = ($tDivHeight - $pHeight)/2;
        $pDiv.css('top', $pTop);
    }

    //#endregion


    //#region CALLS
    sizingboxes();

    $("#carousel-maquette").on('resize', function (){
        $wHeight = $("#carousel-maquette").height();
        $item.height($wHeight);
    });

    $('.carousel').carousel({
        interval: 6000,
        pause: "false"
    });

    $("#nav-fold a").click(function() {
        $("#header-navbar-folded").toggleClass("nav-visible");
        $("#header-navbar-folded").toggleClass("nav-invisible");
        navClick();
        //console.log($(window).width());
    });

    $("#nav-fold-2").click(function() {
        $("#header-navbar-folded").toggleClass("nav-visible");
        $("#header-navbar-folded").toggleClass("nav-invisible");
        navClick();
        //console.log($(window).width());
    });

    $(window).resize(function(){
        sizingboxes();
        navClick();
        // there is a 17px difference between indicated screen css width and the window width and innerwidth which are showed the same by width() and innerWidth() methods and the script bugs when screen is asked instead of window ??? though it hadn't bugged in the first try ???
        if( $(window).width() >= 975 ) {
            $('#header').css({height: "68px"});
            
        }
    });

    //#endregion
});



