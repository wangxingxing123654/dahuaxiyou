$(function(){
    $(".con1_title li").on("mouseover",function(){
        var index = $(this).index();
        $(".xz").removeClass("xz");
        $(this.children[1]).addClass("xz");
//                字体变色
        $(".con1_title li a").css("color","#f7cf91");
        $(this.children[0]).css("color","#fff");
//                换视频
        $(".con1_videos ul").eq(index).siblings().hide();
        $(".con1_videos ul").eq(index).show();
    });
//            con1:
//            图片放大，出现边框效果
    $(".con1_videos li>a").on("mouseover",function(){
//                $(this.children[0]).css("position","relative").stop().animate({width:364,height:240,top:-10,left:-15.6},200);
        $(this.children[0]).css("position","relative").css({width:364,height:240,top:-10,left:-10});
        $(this).css("border","3px solid #ffce7a").css({width:338,height:214});
//                $(this).siblings("s").animate({"transform":"rotate(1deg)"},500);
    });
    $(".con1_videos li>s").on("mouseover",function(){
//                $(this.children[0]).css("position","relative").stop().animate({width:364,height:240,top:-10,left:-10},200);
        $(this).siblings("a").children().eq(0).css("position","relative").css({width:364,height:240,top:-10,left:-10});
        $(this).siblings("a").css("border","3px solid #ffce7a").css({width:338,height:214});

    });
//            恢复原状
    $(".con1_videos li>a").on("mouseout",function(){
//                $(this.children[0]).css("position","relative").stop().animate({width:344,height:220,top:0,left:0},200);
        $(this.children[0]).css("position","relative").css({width:344,height:220,top:0,left:0});
        $(this).css("border","").css({width:344,height:220});
    });

//            图案旋转效果

//            con2-right
    $(".con2_right .right_news_img>a").on("mouseover",function(){
        $(this.children[0]).css("position","relative").css({width:271,height:184,top:-10,left:-10});

    });

//            恢复原状
    $(".con2_right .right_news_img>a").on("mouseout",function(){
        $(this.children[0]).css("position","relative").css({width:251,height:164,top:0,left:0});
    });

//            con3
    var json = [{
        "pk_pm":1,"pk_name":"紫禁城","pk_dq":"北京1区","pk_gj":12,"pk_yj":12,"pk_four":8,"pk_eight":16,
        "pk_sixteen":13,"pk_integral":5092},{"pk_pm":2,"pk_name":"蝴蝶泉","pk_dq":"云南区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":4466},{"pk_pm":3,"pk_name":"西栅老街","pk_dq":"浙江1区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":4198},{"pk_pm":4,"pk_name":"流花湖","pk_dq":"广东4区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":3998},{"pk_pm":5,"pk_name":"姑苏城","pk_dq":"江苏2区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":3240},{"pk_pm":6,"pk_name":"小梅沙","pk_dq":"深圳2区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2405},{"pk_pm":7,"pk_name":"百花村","pk_dq":"福建2区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2201},{"pk_pm":8,"pk_name":"罗浮山","pk_dq":"广东3区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2104},{"pk_pm":9,"pk_name":"朱紫坊","pk_dq":"福建1区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2075},{"pk_pm":10,"pk_name":"河姆渡","pk_dq":"浙江3区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":1947},{"pk_pm":11,"pk_name":"星海湾","pk_dq":"浙江1区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":1947},{"pk_pm":12,"pk_name":"西栅老街","pk_dq":"浙江1区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":4198},{"pk_pm":13,"pk_name":"流花湖","pk_dq":"广东4区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":3998},{"pk_pm":14,"pk_name":"姑苏城","pk_dq":"江苏2区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":3240},{"pk_pm":15,"pk_name":"小梅沙","pk_dq":"深圳2区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2405},{"pk_pm":16,"pk_name":"百花村","pk_dq":"福建2区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2201},{"pk_pm":17,"pk_name":"罗浮山","pk_dq":"广东3区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2104},{"pk_pm":18,"pk_name":"朱紫坊","pk_dq":"福建1区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":2075},{"pk_pm":19,"pk_name":"河姆渡","pk_dq":"浙江3区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":1947},{"pk_pm":20,"pk_name":"星海湾","pk_dq":"浙江1区","pk_gj":10,"pk_yj":10,"pk_four":7,"pk_eight":11,
        "pk_sixteen":20,"pk_integral":1947}];

//            动态添加数据

    for (var i = 0; i < 10; i++) {
        for(key in json[i]){
            $(".pk_pm").eq(i+1).text(json[i]["pk_pm"]);
            $(".pk_name").eq(i+1).text(json[i]["pk_name"]);
            $(".pk_dq").eq(i+1).text(json[i]["pk_dq"]);
            $(".pk_gj").eq(i+1).text(json[i]["pk_gj"]);
            $(".pk_yj").eq(i+1).text(json[i]["pk_yj"]);
            $(".pk_four").eq(i+1).text(json[i]["pk_four"]);
            $(".pk_eight").eq(i+1).text(json[i]["pk_eight"]);
            $(".pk_sixteen").eq(i+1).text(json[i]["pk_sixteen"]);
            $(".pk_integral").eq(i+1).text(json[i]["pk_integral"]);
        }
    }
    $("#btn_sl").click(function(){
        for (var i = 0; i < 10; i++) {
            for(key in json[i]){
                $(".pk_pm").eq(i+1).text(json[i]["pk_pm"]);
                $(".pk_name").eq(i+1).text(json[i]["pk_name"]);
                $(".pk_dq").eq(i+1).text(json[i]["pk_dq"]);
                $(".pk_gj").eq(i+1).text(json[i]["pk_gj"]);
                $(".pk_yj").eq(i+1).text(json[i]["pk_yj"]);
                $(".pk_four").eq(i+1).text(json[i]["pk_four"]);
                $(".pk_eight").eq(i+1).text(json[i]["pk_eight"]);
                $(".pk_sixteen").eq(i+1).text(json[i]["pk_sixteen"]);
                $(".pk_integral").eq(i+1).text(json[i]["pk_integral"]);
            }
        }
    })
    $("#btn_xl").click(function(){
        for (var i = 10; i < 20; i++) {
            for(key in json[i]){
                $(".pk_pm").eq(i+1-10).text(json[i]["pk_pm"]);
                $(".pk_name").eq(i+1-10).text(json[i]["pk_name"]);
                $(".pk_dq").eq(i+1-10).text(json[i]["pk_dq"]);
                $(".pk_gj").eq(i+1-10).text(json[i]["pk_gj"]);
                $(".pk_yj").eq(i+1-10).text(json[i]["pk_yj"]);
                $(".pk_four").eq(i+1-10).text(json[i]["pk_four"]);
                $(".pk_eight").eq(i+1-10).text(json[i]["pk_eight"]);
                $(".pk_sixteen").eq(i+1-10).text(json[i]["pk_sixteen"]);
                $(".pk_integral").eq(i+1-10).text(json[i]["pk_integral"]);
            }
        }
    })
//            ---------------------------------------------
//            con4_title
    $(".con4 .right_title li").on("mouseover",function(){
        $(this).css("background","url(images/index_z_a8d2253.png)no-repeat -1796px -470px");
    });
    $(".con4 .right_title li").on("mouseout",function(){
        $(this).css("background","");
    });

//            con4_right_title
    $(".con4 .right_title li").on("click",function(){
        var index = $(this).index();
        $(".xz").removeClass("xz");
        $(this.children[1]).addClass("xz");
//                字体变色
        $(".con4 .right_title li a").css("color","#f7cf91");
        $(this.children[0]).css("color","#fff");
//                换视频
        $(".con4_news").eq(index).siblings("ul").hide();
        $(".con4_news").eq(index).show();
    });



//            con4_news
    $(".con4_news_img>a").on("mouseover",function(){
        $(this.children[0]).css("position","relative").css({width:364,height:240,top:-10,left:-10});
        $(this).css("border","3px solid #ffce7a").css({width:338,height:214});
    });

//            恢复原状
    $(".con4_news_img>a").on("mouseout",function(){
        $(this.children[0]).css("position","relative").css({width:344,height:220,top:0,left:0});
        $(this).css("border","").css({width:344,height:220});
    });



//            con5_right
    $(".con5_right .right_news_img").on("mouseover",function(){
        $(this).children().children().css("position","relative").css({width:175,height:146,top:-10,left:-10});
    });

//            恢复原状
    $(".con5_right .right_news_img").on("mouseout",function(){
        $(this).children().children().css("position","relative").css({width:155,height:126,top:0,left:0});
    });

});
