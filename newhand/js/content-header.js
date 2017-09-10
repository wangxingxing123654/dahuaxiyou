
var ul=document.getElementsByClassName("share-icon")[0].children[0];
var lastli=ul.children[4];
var more=document.getElementsByClassName("share-more")[0];
var more_ul=more.children[0];
var more_li =more.children[0];
var li_a=more_li.children[0];
var title=document.getElementsByClassName("header-title")[0];
var rainbow=document.getElementsByClassName("header-rainbow")[0];
var girl=document.getElementsByClassName("header-girl")[0];
var boy=document.getElementsByClassName("header-boy")[0];
var currentopacity=0

lastli.onmouseover=function(){
    more.style.display="block";
}
lastli.onmouseout=function(){
    more.style.display="none";
}
more_li.onmouseover=function(){
    //li_a.style.backgroundColor="#f00";
    more.style.display="block";
}
more_li.onmouseout=function(){
    //li_a.style.backgroundColor="#f00";
    more.style.display="none";
}

title.timer =setInterval(function(){
    currentopacity++;
    currentopacity = currentopacity/10;
    title.style.opacity=currentopacity;
    if(currentopacity>=1){
        title.style.opacity="1";
        clearInterval(title.timer);
    }
    currentopacity=currentopacity*10;
},600)

rainbow.timer =setInterval(function(){
    currentopacity++;
    currentopacity = currentopacity/10;
    rainbow.style.opacity=currentopacity;
    if(currentopacity>=1){
        rainbow.style.opacity="1";
        clearInterval(rainbow.timer);
    }
    currentopacity=currentopacity*10;
},500)

girl.timer =setInterval(function(){
    currentopacity++;
    currentopacity = currentopacity/10;
    girl.style.opacity=currentopacity;
    if(currentopacity>=1){
        girl.style.opacity="1";
        clearInterval(girl.timer);
    }
    currentopacity=currentopacity*10;
},700)

boy.timer =setInterval(function(){
    currentopacity++;
    currentopacity = currentopacity/10;
    boy.style.opacity=currentopacity;
    if(currentopacity>=1){
        boy.style.opacity="1";
        clearInterval(boy.timer);
    }
    currentopacity=currentopacity*10;
},800)