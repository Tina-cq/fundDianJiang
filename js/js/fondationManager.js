/**
 * Created by jingwan on 2017/7/18.
 */
//<script>
//var timer02;
var mySwiper;

//window.scrollTo(0,0);
//timer02=setInterval(function(){
//    //var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
//    //alert(scrollTop)
//    window.scrollTo(0,0);
//
//}, 1);

//************************************************************************
var index01;
var zz,star,end,ss;
var windowhei=$("body").height()+137;
var windowhei02=$("html").height();

//window.onload= window.onresize=function(){

//************************************************************************************************详情页1出现
//    $("#frame_content").css("opacity",0);
//    $("#frame_content02").css("opacity",0);
  /*  var timer=setTimeout(function(){
        $("#frame_content").hide();
        $("#frame_content02").hide();
    },1);*/

    $(".foundationManager01").click(function(ev){
        //clearTimeout(timer);


        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.tagName=="I"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
            $(this).parents(".foundationManager_cont01").find(".foundationManager").show();
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:0});
        }else{


            //$("#frame_content").show();
            $("#frame_content").attr("src","qinjuan.html");
            console.log(windowhei)
            $("#frame_content").css("height",windowhei+"px");
            $("#frame_content02").attr("src","");
            $("#frame_content02").css("height",0);
           // $("#frame_content").css("opacity",1);
           // $("#frame_content02").hide();
//                    $("#frame_content").attr("src","qinjuan.html");

            $(".body").hide();
            $("header i").html("秦娟");
            $("body").css("background","#fff");
            $(".return_top").hide();
            //clearInterval(timer02);


        }

    });


//************************************************************************************************详情页2出现
    //*******************************************点击省略号
    var wid=$(".foundationManager_cont01").eq(0).width()+10;

    $(".foundationManager").css("right",-wid);

    $(".foundationManager").click(function(ev){
       // clearTimeout(timer);
        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.className=="ellipsis02" || oElm.tagName=="IMG"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
            //console.log(wid);
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:-wid},function(){
                $(this).parents(".foundationManager_cont01").find(".foundationManager").hide();
            });

        }else{
            //$(document).on('touchmove',function(e){
            //    $("#frame_content02").show();
            //    $("#frame_content02").css("opacity",1);
            //});

            //$("#frame_content02").show();
           // $("#frame_content02").css("opacity",1);
           // $("#frame_content").hide();
            $("#frame_content02").attr("src","mixtureA.html");
            $("#frame_content02").css("height",windowhei+"px");
            $("#frame_content").attr("src","");
            $("#frame_content").css("height",0)
            $(".body").hide();
            $("header i").html("中融新经济灵活配置混合A");
            $(".return_top").hide();
           // clearInterval(timer02);
            //获取iframe的window对象
            //var topWin02 = $(window.frames["iframeName02"].document);
            //console.log(topWin02.find(".qinjuan").html())
            ////通过获取到的window对象操作HTML元素，这和普通页面一样
            //topWin02.find(".qinjuan").click(function(){
            //    alert(234)
            //    //$("#frame_content02").show();
            //    //$("#frame_content02").css("opacity",1);
            //    //$("#frame_content").hide();
            //})
        }
    });


    $("header span").click(function(){
        if( $("header i").html()=="基金经理"){
            window.location.href="index.html";
        }
        $(".body").show();
        $("#frame_content").attr("src","");
        $("#frame_content02").attr("src","");

        $("header i").html("基金经理");
//            console.log(num)
        if(num>0){
            $(".return_top").show();
        }
       // window.scrollTo(0,0);
    })


//};


//****************************************************************************lala
$(function(){
    $("#foundation01_list_cont li").each(function(){
        $(this).find("div").eq(1).css("color","#e7152a");
    });
//************************************************************************点击变色
    $(".foundationManager_cont01_resume li:first-of-type").addClass("red");

    var flag=true;
    $("#foundation01_list_til li").click(function(){
        index01=$(this).index();
        $(".foundationManager_cont01_resume").each(function(){
            $(this).find("li").removeClass("red");
            $(this).find("li").eq(index01).addClass("red");
        });

        if($(this).hasClass("foundation01_active")){
            if(flag){
                $(this).find("i").addClass("bottom_blue").removeClass("top_blue");
                flag=!flag;
            }else{
                $(this).find("i").addClass("top_blue").removeClass("bottom_blue");
                flag=!flag;
            }

        }else{
            var i=$(this).index();
            $(this).addClass("foundation01_active").siblings().removeClass("foundation01_active");
            $("#foundation01_list_cont li").each(function(){
                $(this).find("div").eq(1).css("color","#4a4a4a");
                $(this).find("div").eq(2).css("color","#4a4a4a");
                $(this).find("div").eq(i).css("color","#e7152a");
            });
            $("#foundation01_list_til li").find("i").removeClass("bottom_blue top_blue");
            $(this).find("i").addClass("bottom_blue");
            flag=false;
        }



    });




//        $(".ellipsis02").click(function(){
//            $(this).parents(".foundationManager").animate({right:-wid},function(){
//                $(this).parents(".foundationManager_cont01").find(".foundationManager").hide();
//            });
//
//        });

//***************************************按键精灵高度
//        var hei01=$("header").outerHeight()+$("#search").outerHeight()+$(".foundation01_list_til ").outerHeight()+$(".loadtip").outerHeight();
//console.log($(".foundationManager_cont01").height())
    $(".wizardButton").height(1000);

    $(".search input").keyup(function(){
        $(".return_top").hide();
        if($(this).val()==0){
            $(".wizardButton").show();
        }
        if($(this).val()==""){
            $(".wizardButton").hide();
        }

    });

    $(".search input").focus(function(){
        $(".return_top").hide();
    });
    $(".search input").blur(function(){
        if(num>0){
            $(".return_top").show();
        }

    })
});



//*******************************************************上拉刷新
var loadFlag = true;
var num=0;
mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    scrollbar: '.swiper-scrollbar',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,

    onTouchMove: function(swiper){		//手动滑动中触发

       // window.scrollTo(0,0);
        var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
        var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;

        mySwiper.update(); // 重新计算高度;

        $(".return_top").css("background-image","url('images/top02.png')");

        if(mySwiper.translate < 50 && mySwiper.translate > 0) {
            $(".init-loading").html('下拉刷新...').show();
        }else if(mySwiper.translate > 50 ){
            $(".init-loading").html('释放刷新...').show();
        }

        if(num>0){
            $(".return_top").show();
        }
    },
    onTouchEnd: function(swiper) {
        var _viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
        var _contentHeight = document.getElementsByClassName('swiper-slide')[0].offsetHeight;

        setTimeout(function(){
            $(".return_top").css("background-image","url('images/top01.png')");
        },1500);

        // 上拉加载
        if(mySwiper.translate <= _viewHeight - _contentHeight - 50 && mySwiper.translate < 0) {
//                 console.log("已经到达底部！");

            if(loadFlag){
                $(".loadtip").html('<span></span>正在加载...');

            }else{

                $(".loadtip").html('没有更多啦！');
            }

            setTimeout(function() {
                num++;
//                    console.log(num)
                for(var i = 0; i <5; i++) {
                    $(".foundationManager_cont").append('<div class="foundationManager_cont01">'+
                        '<div class="foundationManager">'+
                        '<div class="ellipsis02">'+
                        '<img src="images/dian.png" alt=""/>'+
                        '</div>'+
                        '<div class="foundationManager_cont02_name">'+
                        '<span>中融新经济灵活配置混合A</span><span>00124558</span>'+
                        '</div>'+
                        '<div class="foundationManager_cont01_resume foundationManager_cont02_resume">'+
                        '<ul>'+
                        '<li><span>最新净值</span><br/><span>1.7430</span></li>'+
                        '<li><span>最近三个月收益</span><br/><span>120.77<b class="sub">%年</b></span></li>'+
                        '<li><span>日涨幅</span><br/><span>115.5<b class="sub">%年</b></span></li>'+
                        '</ul>'+
                        '</div>'+
                        '</div>'+
                        '<div class="foundationManager01">'+
                        '<div class="foundationManager_cont01_name">'+
                        '<span>秦娟</span>'+
                        '</div>'+
                        '<div class="foundationManager_cont01_resume">'+
                        '<ul>'+
                        '<li><span>最近一年</span><br/><span>118.6<b class="sub">%</b></span></li>'+
                        '<li><span>最差表现</span><br/><span>-2.256<b class="sub">%季</b></span></li>'+
                        '<li><span>管理经验</span><br/><span>1.53<b class="sub">年</b></span></li>'+
                        '<li><span>管理规模</span><br/><span>1.96<b class="sub">亿</b></span></li>'+
                        '<i></i>'+
                        '</ul>'+
                        '</div>'+
                        '</div>'+
                        '</div>');

                }


                //***************************************按键精灵高度
                var hei02=$("header").outerHeight()+$("#search").outerHeight()+$(".foundation01_list_til ").outerHeight()+$(".loadtip").outerHeight();
                $(".wizardButton").height($(".swiper-slide").height()+hei02);

                //************************************************************************************************详情页1出现
//                    var foundationManager_hei=$(".foundationManager_cont").height();
                $(".foundationManager01").click(function(ev){
                    ev=ev||evevt;
                    var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

                    if(oElm.tagName=="I"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
                        $(this).parents(".foundationManager_cont01").find(".foundationManager").show();
                        $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:0});
                    }else{
                        $("#frame_content").attr("src","qinjuan.html");
                        $("#frame_content").css("height",windowhei+"px");
                        $("#frame_content02").attr("src","");
                        $("#frame_content02").css("height",0);
                        //**********************************************
                        //$("#frame_content").show();
                       // $("#frame_content").css("opacity",1);
                        //$("#frame_content02").hide();
                        $(".body").hide();
                        $("header i").html("秦娟");
                        $("body").css("background","#fff");
                       // clearInterval(timer02);
                    }
                });
                //************************************************************************************************详情页2出现
                //*******************************************点击省略号
                var wid=$(".foundationManager_cont01").eq(0).width()+10;

                $(".foundationManager").css("right",-wid);

                $(".foundationManager").click(function(ev){

                    ev=ev||evevt;
                    var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

                    if(oElm.className=="ellipsis02"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
                        console.log(wid);
                        $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:-wid},function(){
                            $(this).parents(".foundationManager_cont01").find(".foundationManager").hide();
                        });

                    }else{
                        $("#frame_content02").attr("src","mixtureA.html");
                        $("#frame_content02").css("height",windowhei+"px");
                        $("#frame_content").attr("src","");
                       $("#frame_content").css("height",0)
                       // $("#frame_content02").show();
                       // $("#frame_content02").css("opacity",1);
                       // $("#frame_content").hide();
                        $(".body").hide();
                        $("header i").html("中融新经济灵活配置混合A");
                        $(".return_top").hide();
                       // clearInterval(timer02);
                    }
                });

                //************************************************************************点击变色
                if(index01){
                    // console.log(index01);
                    $(".foundationManager_cont01_resume").each(function(){
                        $(this).find("li").eq(index01).addClass("red");
                    })

                }else{
                    $(".foundationManager_cont01_resume li:first-of-type").addClass("red");
                }




                $(".loadtip").html('上拉加载更多...');
                mySwiper.update(); // 重新计算高度;
            }, 800);

        }


        //******************************************************\
        if(num==1){
            $('.return_top').show();
        }
        //console.log(mySwiper.translate)
        // 下拉刷新
        if(mySwiper.translate >= 50) {
            $(".init-loading").html('正在刷新...').show();
            $(".loadtip").html('上拉加载更多');
            loadFlag = true;

            setTimeout(function() {
                $(".refreshtip").show(0);
                $(".init-loading").html('刷新成功！');
                setTimeout(function(){
                    $(".init-loading").html('').hide();
                },800);
                $(".loadtip").show(0);

                //刷新操作
                mySwiper.update(); // 重新计算高度;
            }, 1000);
        }else if(mySwiper.translate >= 0 && mySwiper.translate < 50){
            $(".init-loading").html('').hide();
        }
        return false;
    }

});
var mySwiper2 = new Swiper('.swiper-container2',{
    onTransitionEnd: function(swiper){

        $('.w').css('transform', 'translate3d(0px, 0px, 0px)');
        $('.swiper-container2 .swiper-slide-active').css('height','auto').siblings('.swiper-slide').css('height','0px');
        mySwiper.update();

    }

});

$('.return_top').click(function(){

    $(".w").css("transform","translate3d(0px, 0px, 0px)")

})
$(".loadtip").on('touchmove',function(e){
  return false;

});
$("header").on('touchmove',function(e){
    return false;

});
$("#search").on('touchmove',function(e){
    return false;

});
$(".foundation01_list_til").on('touchmove',function(e){
    return false;

});
//</script>