//#region FUNCTIONS DECLARATIONS
function carouselIndicators(){
    var carW = $('.item-img').width();
    $('.carousel-indicators').width(carW);
}

function carouselControls(){
    var liFirst = $("#ind-first").offset();
    var liLast = $("#ind-last").offset();


    $("#arrow-control-left").css({top : (liFirst.top - $('#header').height() - 6 ), left : (liFirst.left - $("#arrow-control-left").width() - 18)});


    $("#arrow-control-right").css({top : (liLast.top - $("#header").height() - 6) , left : ( liLast.left + $("#ind-last").width() + 28 ) });
}

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
    var $wHeight = $("#carousel-maquette").height();
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



    //article content fixes

}

$("#nav-fold a").click(function() {
        $("#header-navbar-folded").toggleClass("nav-visible");
        $("#header-navbar-folded").toggleClass("nav-invisible");
        navClick();
});
$("#nav-fold-2").click(function() {
        $("#header-navbar-folded").toggleClass("nav-visible");
        $("#header-navbar-folded").toggleClass("nav-invisible");
        navClick();
});

function carouselClicksFunction() {
    //all carousel clicks function are replaced there because resizing and positioning make them bug and needs to have reinitialization at each resize, hence call of this super clickFunction at the opening of the page and then at each resize
    //that only carousel clicks are involved is perhaps due to the elements being positioned with jquery/js code
    $("#arrow-control-left").click(function() {
        $('#carousel-maquette').carousel('prev'); 
    });
    $("#arrow-control-right").click(function() {
        $('#carousel-maquette').carousel('next'); 
    });  
    
    $('#ind-first').click(function(){
        $('#carousel-maquette').carousel(0);
    });
    $('#ind-second').click(function(){
        $('#carousel-maquette').carousel(1);
    });
    $('#ind-third').click(function(){
        $('#carousel-maquette').carousel(2);
    });
    $('#ind-last').click(function(){
        $('#carousel-maquette').carousel(3);
    });
}

//#endregion


//#region CALLS
//put calls here AFTER the declarations to avoid bugs and put it in the RIGHT order
sizingboxes();
carouselClicksFunction();
carouselIndicators();
carouselControls();

$("#carousel-maquette").on('resize', function (){
    $wHeight = $("#carousel-maquette").height();
    $item.height($wHeight);
});

$('.carousel').carousel({
    // interval: 6000,
    // pause: "true"
    interval: false
});


$(window).resize(function(){
    sizingboxes();
    carouselClicksFunction();
    carouselIndicators();
    navClick();
    carouselControls();
    // there is a 17px difference between indicated screen css width and the window width and innerwidth which are showed the same by width() and innerWidth() methods and the script bugs when screen is asked instead of window ??? though it hadn't bugged in the first try ???
    if( $(window).width() >= 975 ) {
        $('#header').css({height: "68px"});
    }
});

//#endregion
