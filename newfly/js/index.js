/**
 * Created by Ambitious on 2017/7/17 Mon.
 */


//轮播图
var scroll = document.getElementById("scroll");
var ul = scroll.children[0];
var lis = scroll.children[0].children;
var imgWidth = scroll.children[0].children[0].offsetWidth;
var arrowLeft = scroll.children[1].children[0];
//var arrowRight = document.getElementsByClassName("arrow-right")[0];
var arrowRight = scroll.children[1].children[1];
//获取P文字
var ptitle = document.getElementsByClassName("scroll-top")[0].children;

//点击右边箭头

//for(var i=0;i<ptitle.length;i++){
//    ptitle[i].index=i;
//    arrowRight.onclick = onclickHandle;
//}
arrowRight.onclick = onclickHandle;
var currentIndex = 0;
function onclickHandle() {
    if (currentIndex == lis.length - 1) {
        currentIndex = 0;
        ul.style.left = 0 + "px";
    }
    currentIndex++;
    var target = imgWidth * currentIndex * -1;
    animate(ul, target);
    //ul.style.left=imgWidth*currentIndex*-1+"px";
    //console.log(ul.style.left);
    for (var i = 0; i < ptitle.length; i++) {
        ptitle[i].className = "";
    }
    ptitle[currentIndex].className = "p1";
    console.log(this)
}
//点击左边箭头
arrowLeft.onclick = onclickHandle2;
function onclickHandle2() {
    if (currentIndex == 0) {
        currentIndex = lis.length - 1;
        ul.style.left = imgWidth * currentIndex * -1 + "px";
    }
    currentIndex--;
    var target = imgWidth * currentIndex * -1;
    animate(ul, target);
    //ul.style.left=imgWidth*currentIndex*-1+"px";
    console.log(ul.style.left);
}
var timer = setInterval(onclickHandle, 2000);
scroll.onmouseover = function () {
    clearInterval(timer)

};
scroll.onmouseout = function () {
    timer = setInterval(onclickHandle, 2000);
};


//获取弹幕元素
var zhezhao = document.getElementById("zhezhao");
var zhezhaoContral = document.getElementById("zhezhaoContral");
var button_one = document.getElementById("button-one");
var audio = document.getElementsByTagName("audio")[0];
var button_two = document.getElementById("button-two");
//弹幕
var currentIndexZ = 0;
var timerZ = setInterval(function () {
    currentIndexZ++;
    var target = 4 * currentIndexZ * -1;
    animate(zhezhaoContral, target);
}, 20);
setTimeout(function () {
    clearInterval(timerZ);
    zhezhao.style.display = "none";
    currentIndexZ = 0;
}, 20000);

//点击页面  停止弹幕
zhezhao.onclick = function () {
    clearInterval(timerZ);
    button_two.style.background = "url('./images/audio_d7da069.png') no-repeat right 0";
    zhezhao.style.display = "none";
    currentIndexZ = 0;

};
//点击页面按钮  开启弹幕
button_two.onclick = function () {
    zhezhao.style.display = "block";
    button_two.style.background = "url('./images/audio_d7da069.png') no-repeat right -48px";
    timerZ = setInterval(function () {
        currentIndexZ++;
        var target = 4 * currentIndexZ * -1;
        animate(zhezhaoContral, target);
    }, 20);
};


//控制音乐播放
var flag = true;
button_one.onclick = function () {
    if (flag == false) {
        button_one.style.background = "url('images/audio_d7da069.png') no-repeat left -48px";
        audio.play();
        flag = true;
        return;
    }
    if (flag) {
        button_one.style.background = "url('images/audio_d7da069.png') no-repeat left 0";
        audio.pause();
        flag = false;
        return;
    }
};

//手指弹动
var button_three = document.getElementById("button-three");
var currentIndexFiger = 0;
setInterval(function () {
    currentIndexFiger -= 4;
    button_three.style.left = currentIndexFiger + "px";
    if (currentIndexFiger <= -20) {
        var timerSSF = setInterval(function () {
            currentIndexFiger += 4;
            button_three.style.left = currentIndexFiger + "px";
            if (currentIndexFiger >= 0) {
                clearInterval(timerSSF)
            }
        }, 30);
    }
}, 30);


//顶部广告固定
var close = document.getElementById("close");
var ad_pic = document.getElementById("ad-pic");
var topBar = document.getElementById("topBar");
close.onclick = onclickClose;
function onclickClose() {
    ad_pic.style.display = "none";
    topBar.style.paddingTop = 0 + "px";
    flag2 = 0;
};

var flag2 = 1;
window.onscroll = function () {
    if(flag2){
        if (getScroll().top > 150) {
            ad_pic.style.display = "block";
            topBar.style.paddingTop = 150 + "px";

        } else {
            ad_pic.style.display = "none";
            topBar.style.paddingTop = 0 + "px";
        }
    }
};
//大于150后点击关闭不再显示
//if (onclickClose && getScroll().top > 150) {
//    ad_pic.style.display = "none";
//}
//页面滚出去的距离
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.offsetLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.offsetTop || 0
    }
}


//romantic 图片左右滑动
var currentIndexSlide = 0;
var pic_one = document.getElementById("pic-one");
var romantic_two_left = document.getElementById("romantic-two-left");
//var target1 = pic_one.offsetWidth;

setInterval(function () {
    currentIndexSlide -= 4;
    pic_one.style.left = currentIndexSlide + "px";
    if (currentIndexSlide <= -300) {
        //clearInterval(timerS);
        var timerSS = setInterval(function () {
            currentIndexSlide += 4
            pic_one.style.left = currentIndexSlide + "px";
            if (currentIndexSlide >= 0) {
                clearInterval(timerSS)
            }
        }, 35);
    }
}, 35);


//匀速动画
//var current = 0;
function animate(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var current = element.offsetLeft;
        var step = 60;
        current += target - current >= 0 ? step : -step;
        element.style.left = current + "px";
        if (Math.abs(current - target) <= step) {
            element.style.left = target + "px";
            clearInterval(element.timer);
        }
    }, 20)
}


// jq角色介绍tab切换效果
$(document).ready(function () {
    $(".intro-center>ul>li").mouseenter(function () {
        $("li.wushi").removeClass("wushi");
        $(this).addClass("wushi");
        // $(".intro-bottom .intro-bottom-box").eq($(this).index()).addClass("on").siblings(".intro-bottom-box").removeClass("on");
        $(".intro-bottom-box").eq($(this).index()).show().siblings(".intro-bottom-box").fadeOut(10);
    })
})





