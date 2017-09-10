
var topBar_middle=document.getElementsByClassName("topBar-middle")[0];
var topBar_middle_big=document.getElementsByClassName("topBar-middle-big")[0];
var game=document.getElementsByClassName("game")[0];
var bar=document.getElementById("bar");
var zhuce=document.getElementsByClassName("zhuce")[0];
var buy=document.getElementsByClassName("buy")[0];
var catalogue=document.getElementsByClassName("catalogue")[0];
var advertisemen=document.getElementsByClassName("advertisemen")[0];

topBar_middle.onmouseover=function(){
    topBar_middle.children[0].style.display="none";
    topBar_middle_big.style.display="block";
    topBar_middle_big.style.zIndex=5;
}
topBar_middle.onmouseout=function(){
    topBar_middle.children[0].style.display="block";
    topBar_middle_big.style.display="none";
}
zhuce.onmouseover=function(){
    zhuce.style.backgroundColor="rgba(244,244,244,0.5)";
    zhuce.style.borderBottomColor="#bc2e2e";
}
zhuce.onmouseout=function(){
    zhuce.style.backgroundColor="#fbfbfb"
    zhuce.style.color="#000";
    zhuce.style.borderBottomColor="#fbfbfb";
}
buy.onmouseover=function(){
    buy.style.backgroundColor="rgba(244,244,244,0.5)";
    buy.style.borderBottomColor="#bc2e2e";
}
buy.onmouseout=function(){
    buy.style.backgroundColor="#fbfbfb"
    buy.style.color="#000";
    buy.style.borderBottomColor="#fbfbfb";
}
catalogue.onmouseover=function(){
    catalogue.style.backgroundColor="rgba(244,244,244,0.5)";
    catalogue.style.borderBottomColor="#bc2e2e";
    game.style.display="block";
}
catalogue.onmouseout=function(){
    catalogue.style.backgroundColor="#fbfbfb"
    catalogue.style.color="#000";
    catalogue.style.borderBottomColor="#fbfbfb";
    game.style.display="none";
    game.style.zIndex="50";
}
advertisemen.onmouseover=function(){
    advertisemen.style.backgroundColor="rgba(244,244,244,0.5)";
    advertisemen.style.borderBottomColor="#bc2e2e";
}
advertisemen.onmouseout=function(){
    advertisemen.style.backgroundColor="#fbfbfb"
    advertisemen.style.color="#000";
    advertisemen.style.borderBottomColor="#fbfbfb";
}



//var squer = 0;
//var timerTop = setInterval(autoPlayTop,1000);
//function autoPlayTop(){
//    squer ++;
//    if(squer == 3){
//        squer = 0
//        $(".tb-slider-box").css("top",0);
//    };
//    $(".tb-slider-box").animate({
//        top:-55*squer + "px",
//    },500)
//};
//$(".tb-slider").mouseenter(function(){
//    clearInterval(timerTop);
//});
//$(".tb-slider").mouseleave(function(){
//    timerTop = setInterval(autoPlayTop,1000);
//})
