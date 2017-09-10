var topBar=document.getElementById("bar");
var header=document.getElementById("header");
var main_box=document.getElementById("main-box")
var top_mask=document.getElementById("top-mask")
var main_content=document.getElementById("main-content");
var right_side=document.getElementsByClassName("right-side")[0];
var currentRight=0;



function getScroll(){
    return {
        left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop || 0
    }
};

window.onscroll= function () {
    var scrollTop=getScroll().top;
    var maxHeight=topBar.offsetHeight+header.offsetHeight+main_box.offsetHeight;
    if(scrollTop>=maxHeight){
        main_box.className="main-box fixed";
        top_mask.className="top-mask top-mask-show ";
        main_content.style.paddingTop=main_box.offsetHeight+"px";
        right_side.style.position="fixed"
        right_side.style.top="100px"
        right_side.style.right="-152px"
    }else{
        main_box.className="main-box";
        top_mask.className="top-mask ";
        main_content.style.paddingTop=""
        right_side.style.position="absolute"
        right_side.style.top="600px"
        right_side.style.right="-328px"
    }
    right_side.timer=setInterval(function(){
        currentRight++
        right_side.onmouseover=function(){
            right_side.style.position="fixed"
            right_side.style.top="100px"
            right_side.style.right="0"
            if(currentRight>=0){
                right_side.style.right="0"
                clearInterval(right_side.timer)
            }
        }
        right_side.onmouseout=function(){
            right_side.style.top="100px"
            right_side.style.right="-152px"
        }
    },1000)

}
