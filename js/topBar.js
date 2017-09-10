$(document).ready(function(){
    $(".topbar-news").mouseenter(function(){
        $(".topbar-news-banner").show();
        $(this).children("img").hide();
    });
    $(".topbar-news").mouseleave(function(){
        setTimeout(function(){
            $(".topbar-news-banner").hide();
            $(".topbar-news").children("img").show();
        },200)
    });
    var squer = 0;
    var timerTop = setInterval(autoPlayTop,1000);
    function autoPlayTop(){
        squer ++;
        if(squer == 3){
            squer = 0
            $(".tb-slider-box").css("top",0);
        };
        $(".tb-slider-box").animate({
            top:-55*squer + "px",
        },500)
    };
    $(".tb-slider").mouseenter(function(){
        clearInterval(timerTop);
    });
    $(".tb-slider").mouseleave(function(){
        timerTop = setInterval(autoPlayTop,1000);
    })
})