/**
 * Created by sailor on 2017/7/16.
 */
$(document).ready(function(){

    var eqs = null;  //获取事件源索引值
    var delay = null;   //设置延时触发事件


    $(".topbar-news").mouseenter(function(){
        $(".topbar-news-banner").show();
        $(this).children("img").hide();
    });
    $(".topbar-news").mouseleave(function(){
        setTimeout(function(){
            $(".topbar-news-banner").hide();
            $(".topbar-news").children("img").show();
        },300)
    });

    $(".all-game").mouseenter(function(){
        $(".all-game>div").show();
    });
    $(".all-game").mouseleave(function(){
        setTimeout(function(){
            $(".all-game>div").hide();
        },300)
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




//2首屏部分开始
    //官方/合作切换
    $(".fir-scr-banner-nav a").click(function(){
        $(".fir-scr-banner-box>div").eq($(this).index()).fadeIn().siblings("div").fadeOut();
        $(this).css("background","#3b8bed").siblings("a").css("background","#333e50")
    })
    //官方轮播图切换
    //延时设置
    //自动轮播设置
    var timing = null;   //设置自动轮播
    var key = 0;
    function autoPlay(){
        $(".fir-scr-banner1-item a").eq(key).stop().fadeIn().siblings("a").fadeOut();
        $(".scr-banner1-nav a").eq(key).addClass("on").siblings("a").removeClass("on");
        key++;
        if(key == 5){
            key = 0;
        }
    }
    timing = setInterval(autoPlay,2000)
    //鼠标移动上去停止
    $(".fir-scr-banner-box").mouseenter(function(){
        //console.log(55);
        clearInterval(timing)
    })
    //鼠标放开开始定时器

    var eqs1 = null;  //获取事件源索引值
    var delay1 = null;   //设置延时触发事件
    $(".fir-scr-banner-box").mouseleave(function(){
        timing = setInterval(autoPlay,1000)
    })

    $(".scr-banner1-nav a").mouseenter(function(){
        eqs1 = $(this).index();
        key = eqs1;
        delay1 = setTimeout(function(){
            $(".fir-scr-banner1-item a").eq(eqs1).stop().fadeIn().siblings("a").fadeOut();
            $(".scr-banner1-nav a").eq(eqs1).addClass("on").siblings("a").removeClass("on");
        },200)
    })
    $(".scr-banner1-nav a").mouseleave(function(){
        clearTimeout(delay1);
    })
    //合作轮播图切换
    //延时设置
    var eqs2 = null;  //获取事件源索引值
    var delay2 = null;   //设置延时触发事件
    $(".fir-scr-banner2-nav a").mouseenter(function(){
        eqs2 = $(this).index();
        delay2 = setTimeout(function(){
            $(".fir-scr-banner2-item a").eq(eqs2).stop().fadeIn().siblings("a").fadeOut();
            $(".fir-scr-banner2-nav a").eq(eqs2).addClass("on").siblings("a").removeClass("on");
        },200)
    })
    $(".fir-scr-banner2-nav a").mouseleave(function(){
        clearTimeout(delay2);
    })

    //首屏右侧tab切换
    var eqs3 = null;  //获取事件源索引值
    var delay3 = null;   //设置延时触发事件
    $(".fir-news-nav a").mouseenter(function(){
        eqs3 = $(this).index();
        delay3 = setTimeout(function(){
            $(".fir-news-nav .nav-line").stop().animate({left:eqs3*75+"px"},300);
            $(".fir-news-item").eq(eqs3).show().siblings(".fir-news-item").hide();
            $(".fir-news-nav a").eq(eqs3).addClass("on").siblings("a").removeClass("on");
        },200)
    })
    $(".fir-news-nav a").mouseleave(function(){
        clearTimeout(delay3);
    })


    //2首屏部分结束
    //3藏宝阁部分开始
    var eqs4 = null;
    var delay4 = null;
    $(".cbg-news-nav a").mouseenter(function(){
        eqs4 = $(this).index();
        delay4 = setTimeout(function(){
            $(".cbg-news-nav .i-line").stop().animate({left:eqs4*84+"px"},300);
            $(".cbg-news-list").eq(eqs4).show().siblings(".cbg-news-list").hide();
            $(".cbg-news-nav a").eq(eqs4).addClass("on").siblings("a").removeClass("on");
        },200)
    })
    $(".cbg-news-nav a").mouseleave(function(){
        clearTimeout(delay4);
    })

    //3藏宝阁部分结束
    //4梦幻图库部分开始
    //梦幻图库事件触发
    //for (var i = 0; i < 10; i++) {
    //    $(".pic-m-box-list li").eq(i).mouseenter(hoverDir);
    //    $(".pic-m-box-list li").eq(i).mouseleave(hoverDir);
    //};

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 10; j++) {
            $(".pic-m-box-list").eq(i).children("ul").children("li").eq(j).mouseenter(hoverDir);
            $(".pic-m-box-list").eq(i).children("ul").children("li").eq(j).mouseleave(hoverDir);
        }
    };

    //for (var i = 0; i < 10; i++) {
    //        $(".pic-m-box-list").eq(1).children("ul").children("li").eq(i).mouseenter(hoverDir);
    //        $(".pic-m-box-list").eq(1).children("ul").children("li").eq(i).mouseleave(hoverDir);
    //};
    //事件触发函数封装
    function hoverDir(e){
        var w = $(this).width();
        console.log($(this));
        var h = $(this).height();
        var offsetP = document.getElementsByClassName("pic-m-box")[0];
        console.log(this.offsetLeft + offsetP.offsetLeft)
        console.log(this.offsetLeft)
        console.log(e.pageX)
        var x = (e.pageX - (this.offsetLeft + offsetP.offsetLeft) - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - (this.offsetTop + offsetP.offsetTop) - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        console.log(e.pageX)
        console.log(Math.atan2(y, x) );
        if(e.type == "mouseenter"){
            if(direction == 0){
                $(this).children("a").children("span").stop().css("top","-95px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("a").children("span").stop().css("top","95px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("a").children("span").stop().css("top","0px").css("left","126px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 3){
                $(this).children("a").children("span").stop().css("top","0px").css("left","-126px").animate({top:"0px",left:"0px"},300);
            }
        }else{
            if(direction == 0){
                $(this).children("a").children("span").stop().animate({top:"-95px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("a").children("span").stop().animate({top:"113px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("a").children("span").stop().animate({top:"0px",left:"126px"},300);
            }else if(direction == 3){
                $(this).children("a").children("span").stop().animate({top:"0px",left:"-126px"},300)
            }
        }
    }
    //梦幻图库导航特效
    //$(".pic-m-nva a").mouseenter(function(){
    //    $(".nav-line").stop().delay(1000).animate({left:$(this).index()*100+"px"},100);
    //})
    var delay5 = null;
    var eqs5 = null;
    $(".pic-m-nva a").mouseenter(function(){
        eqs5 = $(this).index();
        delay5 = setTimeout(function(){
            $(".nav-line").stop().animate({left:eqs5*100+"px"},200);
            $(".pic-m-box-list").eq(eqs5).show().siblings(".pic-m-box-list").hide();
            $(".pic-m-nva a").eq(eqs5).addClass("on").siblings("a").removeClass("on");

        },200)
    })
    $(".pic-m-nva a").mouseleave(function(){
        clearTimeout(delay5);
    })

    //武神坛事件触发
    $(".wst-img").mouseenter(hoverDirWst);
    $(".wst-img").mouseleave(hoverDirWst);
    function hoverDirWst(e){
        var w = $(this).width();
        var h = $(this).height();
        var offsetP = document.getElementsByClassName("pic-r")[0];
        var x = (e.pageX - (this.offsetLeft + offsetP.offsetLeft) - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - (this.offsetTop + offsetP.offsetTop) - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        console.log(direction);
        if(e.type == "mouseenter"){
            if(direction == 0){
                $(this).children("span").stop().css("top","-90px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("span").stop().css("top","90px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("span").stop().css("top","0px").css("left","190px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 3){
                $(this).children("span").stop().css("top","0px").css("left","-190px").animate({top:"0px",left:"0px"},300);
            }
        }else{
            if(direction == 0){
                $(this).children("span").stop().animate({top:"-90px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("span").stop().animate({top:"190px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("span").stop().animate({top:"0px",left:"190px"},300);
            }else if(direction == 3){
                $(this).children("span").stop().animate({top:"0px",left:"-190px"},300)
            }
        }
    }

//4梦幻图库部分结束
//5梦幻百科部分开始
    //梦幻百科左侧搜索框效果
    $("#but").focus(function(){
        if($("#but").val() == "请输入关键字"){
            $(this).val("");
        };
    })
    $("#but").blur(function(){
        if($("#but").val() == ""){
            $(this).val("请输入关键字");
        };
    })
    //提示关键字不能为空效果
    $("#search").click(function(){
        if($("#but").val() == "请输入关键字" || $("#but").val() == ""){
            $(".alert-box").show();
        }
    })
    $(".alert-close").click(function(){
        $(".alert-box").hide();
    })
    $(".btn-close").click(function(){
        $(".alert-box").hide();
    })
    //论坛热帖tab栏切换
    var eqs6 = null;
    var delay6 = null;
    $(".baike-news-nav a").mouseenter(function(){
        eqs6 = $(this).index();
        delay6 = setTimeout(function(){
            $(".baike-news-nav .i-line").stop().animate({left:eqs6*70+"px"},200);
            $(".baike-news-list").eq(eqs6).show().siblings(".baike-news-list").hide();
            $(".baike-news-nav a").eq(eqs6).addClass("on").siblings("a").removeClass("on");
        },200)
    })
    $(".baike-news-nav a").mouseleave(function(){
        clearTimeout(delay6);
    })

//5梦幻百科部分结束

//6赛事信息开始
    //alert(555);
    //赛事小图
    //for (var i = 0; i < 2; i++) {
    //    $(".match-simg").eq(i).mouseenter(hoverDirMatchR);
    //    $(".match-simg").eq(i).mouseleave(hoverDirMatchR);
    //}

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 2; j++) {
            $(".match-m-slider-item").eq(i).children("a.match-simg").eq(j).mouseenter(hoverDirMatchL)
            $(".match-m-slider-item").eq(i).children("a.match-simg").eq(j).mouseleave(hoverDirMatchL)
        }
    }
    function hoverDirMatchR(e){
        var w = $(this).width();
        var h = $(this).height();
        var offsetP = document.getElementsByClassName("match-m-box-slider")[0];
        var x = (e.pageX - (this.offsetLeft + offsetP.offsetLeft) - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - (this.offsetTop + offsetP.offsetTop) - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        console.log(direction);
        if(e.type == "mouseenter"){
            if(direction == 0){
                $(this).children("span").stop().css("top","-113px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("span").stop().css("top","113px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("span").stop().css("top","0px").css("left","150px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 3){
                $(this).children("span").stop().css("top","0px").css("left","-150px").animate({top:"0px",left:"0px"},300);
            }
        }else{
            if(direction == 0){
                $(this).children("span").stop().animate({top:"-113px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("span").stop().animate({top:"113px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("span").stop().animate({top:"0px",left:"150px"},300);
            }else if(direction == 3){
                $(this).children("span").stop().animate({top:"0px",left:"-150px"},300)
            }
        }
    }

    //赛事大图
    //$(".match-bimg").mouseenter(hoverDirMatchL);
    //$(".match-bimg").mouseleave(hoverDirMatchL);

    for (var i = 0; i < 4; i++) {
        $(".match-m-slider-item").eq(i).children("a.match-bimg").mouseenter(hoverDirMatchL);
        $(".match-m-slider-item").eq(i).children("a.match-bimg").mouseleave(hoverDirMatchL);
    }
    function hoverDirMatchL(e){
        var w = $(this).width();
        var h = $(this).height();
        var offsetP = document.getElementsByClassName("match-m-box-slider")[0];
        var x = (e.pageX - (this.offsetLeft + offsetP.offsetLeft) - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - (this.offsetTop + offsetP.offsetTop) - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        console.log(direction);
        if(e.type == "mouseenter"){
            if(direction == 0){
                $(this).children("span").stop().css("top","-236px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("span").stop().css("top","236px").css("left","0px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("span").stop().css("top","0px").css("left","260px").animate({top:"0px",left:"0px"},300);
            }else if(direction == 3){
                $(this).children("span").stop().css("top","0px").css("left","-260px").animate({top:"0px",left:"0px"},300);
            }
        }else{
            if(direction == 0){
                $(this).children("span").stop().animate({top:"-236px",left:"0px"},300);
            }else if(direction == 2){
                $(this).children("span").stop().animate({top:"236px",left:"0px"},300);
            }else if(direction == 1){
                $(this).children("span").stop().animate({top:"0px",left:"260px"},300);
            }else if(direction == 3){
                $(this).children("span").stop().animate({top:"0px",left:"-260px"},300)
            }
        }
    }

    //赛事导航
    var delay7 = null;
    var eqs7 = null;
    $(".match-m-box-nav a").mouseenter(function () {
        eqs7 = $(this).index();
        delay7 = setTimeout(function(){
            $(".match-m-box-nav .nav-line").stop().animate({left:eqs7*100 + "px"},200);
            $(".match-m-slider-item").eq(eqs7).show().show().siblings(".match-m-slider-item").hide();
            $(".match-m-box-nav a").eq(eqs7).addClass("on").siblings("a").removeClass("on");
        },200)
    });
    $(".match-m-box-nav a").mouseleave(function(){
        clearTimeout(delay7)
    })

    //左侧关注导航
    //for (var i = 0; i < 4; i++) {
    //    $(".app-box-nav a").eq(i)
    //}
    $(".app-box-nav a").mouseenter(function(){
        $(".app-box-wrap-item").eq($(this).index()).show().siblings(".app-box-wrap-item").hide();
        $(this).children("i").css("opacity",1).parent("a").siblings("a").children("i").css("opacity",0.5)
    })

    //右侧小轮播图
    //自动播放
    var timingS = null;
    var keyS = 0;
    function autoPlayS(){
        $(".match-r-silder-item").eq(keyS).stop().fadeIn().siblings("a").fadeOut();
        $(".match-r-silder-box .match-r-nav a").eq(keyS).addClass("on").siblings("a").removeClass("on");
        keyS++;
        if(keyS == 4){
            keyS = 0;
        }
        //console.log(keyS);
    }
    timingS = setInterval(autoPlayS,2000);
    $(".match-r-silder-box").mouseenter(function(){
        clearInterval(timingS);
    })
    $(".match-r-silder-box").mouseleave(function(){
        timingS = setInterval(autoPlayS,1000);
    })
    var eqs1 = null;  //获取事件源索引值
    var delay1 = null;   //设置延时触发事件
    $(".match-r-silder-box .match-r-nav a").mouseenter(function(){
        eqs = $(this).index();
        keyS = eqs;
        console.log(eqs);
        delay = setTimeout(function(){
            $(".match-r-silder-item").eq(eqs).stop().fadeIn().siblings(".match-r-silder-item").fadeOut();
            $(".match-r-silder-box .match-r-nav a").eq(eqs).addClass("on").siblings("a").removeClass("on");
        },200)
    })
    $(".match-r-silder-box .match-r-nav a").mouseleave(function(){
        clearTimeout(delay);
    })
//6赛事信息结束
//7角色展示手风琴开始
    //alert(55)
    //手风琴外围效果
    var temp = 0;

    //为了测试
    $(".li-out").click(function(){
        temp = $(this).index()*6;
        console.log($(this).index());
        $(this).animate({width:"819px"},200).siblings("li").animate({width:"70px"},200)
        $(this).children("a").css("background","#f24854").parent("li").siblings("li").eq(0).children("a").css("background","#3b8bed");
        $(this).children("a").css("background","#f24854").parent("li").siblings("li").eq(1).children("a").css("background","#499df5");
        $(this).children("a").css("overflow","visible").parent("li").siblings("li").children("a").css("overflow","hidden")
    })

    //手风琴里面的效果
    var timer8 = null;
    var eqs8 = null;
    $(".piano-in").children("li").mouseenter(function(){
        //alert(55)
        eqs8 = $(this).index() + temp;
        timer8 = setTimeout(function(){
            $(".role-txt").eq(eqs8).css("background","#f5f9ff").parent("li").animate({width:"449px"},200).siblings("li").animate({width:"60px"},200).children("a").css("background","")
            $(".role-txt").eq(eqs8).children(".role-img").css("opacity",1).css("filter","grayscale(0%)").parent(".role-txt").parent("li").siblings("li").children(".role-txt").children(".role-img").css("opacity",0.8).css("filter","grayscale(100%)")
            //$("")
        },200)
    })
    $(".piano-in").children("li").mouseleave(function(){
        clearTimeout(timer8)
    })

//7角色展示手风琴结束
//网站底部动画特效开始

    var i = 0
    setInterval(function(){
        i++;
        if(i == 8){
            i=0;
        };
        console.log(55);
        $(".west-gif").css("backgroundPositionY",i*199*-1 + "px")
    },150)

//网站底部动画特效结束
//网站音乐特效开始
    var flag = true;//假设没有播放的
    window.onscroll = function() {
        var music = document.getElementById('music');
        var scroH = $("body").scrollTop();
        if (scroH > 2800) {
            if(flag){
                flag = false;
                clearInterval(music.timer2);
                music.play();
                music.volume = 0;
                music.timer = setInterval(function(){
                    music.volume += 0.1;
                    if(music.volume > 0.9){
                        music.volume = 1;
                        clearInterval(music.timer);
                        console.log(music.volume);
                    }
                },200)
            }
        };
        if(scroH < 2000){
            if(!flag){
                flag = true;
                clearInterval(music.timer);
                music.timer2 = setInterval(function(){
                    music.volume -= 0.1;
                    if(music.volume < 0.1){
                        music.volume = 0;
                        music.pause();
                        clearInterval(music.timer2);
                    }
                },300) 
            }
        }
    }

//网站音乐特效结束
})