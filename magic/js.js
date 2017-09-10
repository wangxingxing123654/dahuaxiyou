$(function(){
    var ul01 = $("#ul01");
    var timer = null;
    var k = 0;
    var lis = $(".lis");
    //开启自动定时器
    timer = setInterval(function(){
        dsq();
    },2000);

    //鼠标移入——停止定时器
    $(".topTu").on("mouseover",function(){
        clearInterval(timer);
    });

    //鼠标移出——重新开启定时器
    $(".topTu").on("mouseout",function(){
        timer = setInterval(function(){
            dsq();
        },2000);
    });

    //点击下面按钮
    lis.on("click",function(){
        var index = $(this).index();
        moveByBtn(index);
        for(var i = 0; i < lis.length; i++){
            lis.removeClass("diao");
        }
        $(this).addClass("diao");
    });

    //按钮控制ul移动的函数
    function moveByBtn(index){
        k = index;
        var temp = -1200 * index;
        ul01.animate({left:temp+"px"},"normal");
    };

    //封装定时器逻辑的函数
    function dsq(){
        if(k == 4){
            ul01.css("left","0px");
            k = 0;
        }
        k++;

        for(var i = 0; i < lis.length; i++){
            lis.removeClass("diao");
        }
        if(k == 4){
            lis.eq(0).addClass("diao");
        }else {
            lis.eq(k).addClass("diao");
        }

        var target = -1200 * k;
        ul01.animate({left:target+"px"},"normal");
    };
    //以上是顶部的轮播图-------------------------------

    //注册按钮，弹出框
    $("#zc").on("click",function(){
        $("#zck").css("display","block");
    });
    $(".zck_btn").on("click",function(){
        $("#zck").css("display","none");
    });
    //礼包按钮，弹出框
    $(".libao").on("click",function () {
        $("#lbk").css("display","block");
    });
    $(".lbk_btn").on("click",function(){
        $("#lbk").css("display","none");
    });
    //下载按钮，弹出框
    $("#loaddown").on("click",function(){
        $("#ldk").css("display","block");
    });
    $("#ldk").on("click",function(){
        $("#ldk").css("display","none");
    });

    //下图 轮播图02
    var timer2 = null;
    var n = 0;
    //先调用一次函数，防止画面延迟
    dsq2();
    //一开始载入时的轮播图
    timer2 = setInterval(function(){
        n++;
        dsq2();
    },2500);

    //鼠标移入，停止定时器
    $(".lunbotu02").on("mouseover",function(){
        clearInterval(timer2);
        $(".left").stop().animate({opacity:"1"},"slow");
        $(".right").stop().animate({opacity:"1"},"slow");
    });
    //鼠标移出，重新开启定时器
    $(".lunbotu02").on("mouseout",function(){
        timer2 = setInterval(function(){
            n++;
            dsq2();
        },2500);
        $(".left").stop().animate({opacity:"0.2"},"slow");
        $(".right").stop().animate({opacity:"0.2"},"slow");
    });

    //左按钮控制图片显示
    $(".left").on("click",function(){
        n--;
        dsq2();
    });
    //右按钮控制图片显示
    $(".right").on("click",function(){
        n++;
        dsq2();
    });

    //定时器内函数
    function dsq2(){
        if(n > 6){
            n = 0;
        }else if(n < 0){
            n = 6;
        }
        $("#ul02").children().css("display","none");
        $("#ul03").children().css("display","none").css("left","0px");
        $(".joblogo").css("display","none").css("opacity","0");
        $("#ul02").children().eq(n).css("display","block");
        $("#ul03").children().eq(n).css("display","block").animate({left:'-900px'},"normal");
        var count = 0;
        var timer3 = setInterval(function(){
            console.log(count);
            count++;
            if(count == 12){
                $(".joblogo").eq(n).css("display","block").stop().animate({opacity:"1"},700);
                clearInterval(timer3);
            }
        },50);
        console.log("n = "+n);
    };
    //以上是第二个轮播图-----------------------------------------------------------

    //侧边栏
    $(".special").on("mouseover",function(){
        $(".special").stop().animate({left:"0px",opacity:"0.95"},"normal");
    });
    $(".special").on("mouseout",function(){
        $(".special").stop().animate({left:"-980px",opacity:"0.4"},"normal");
    });
    $(".special").addClass("fixed");

    //视频轮播
    $("#spcar").children().hover(
        function(){
            index = $(this).index();
            $(".sptubiao").eq(index).css("display","block");
            $(this).css("top","-4px");
        },
        function(){
            $(".sptubiao").eq(index).css("display","none");
            $(this).css("top","0px");
        }
    );
})

