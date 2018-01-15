/**
 * Created by jingwan on 2017/7/18.
 */
//<script>
var index01;

//************************************************************************


$(function(){       //*****************lala
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



//*************************************************按键精灵
    $(".search input").keyup(function(){
        if($(this).val()==0){
            $(".wizardButton").show();
        }
        if($(this).val()==""){
            $(".wizardButton").hide();
        }

    });

    //************************************************************************************************详情页1出现
    var scrollTop02,scrollTop01;

    var timer=setTimeout(function(){
        $("#frame_content").hide();
        $("#frame_content02").hide();
    },10);

    $(".foundationManager01").click(function(ev){
        clearTimeout(timer);

        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.tagName=="I"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
            $(this).parents(".foundationManager_cont01").find(".foundationManager").show();
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:0});
        }else{
            //判断滚动条滚动的位置
            scrollTop01=$(document).scrollTop();
            console.log(scrollTop01);

            $("#frame_content").show();
            $("#frame_content").css("opacity",1);
            $("#frame_content02").hide();
//                    $("#frame_content").attr("src","qinjuan.html");

            $(".body").hide();
            $("header i").html("秦娟");
            $("body").css("background","#fff");
            $(".return_top").hide();
            window.scrollTo(0,0);
        }
    });


//************************************************************************************************详情页2出现
    //*******************************************点击省略号
    var wid=$(".foundationManager_cont01").eq(0).width()+10;

    $(".foundationManager").css("right",-wid);

    $(".foundationManager").click(function(ev){
        clearTimeout(timer);
        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.className=="ellipsis02" || oElm.tagName=="IMG"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
//                console.log(wid);
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:-wid},function(){
                $(this).parents(".foundationManager_cont01").find(".foundationManager").hide();
            });

        }else{
            //判断滚动条滚动的位置
           scrollTop02=$(document).scrollTop();
            console.log(scrollTop02);

            $("#frame_content02").show();
            $("#frame_content02").css("opacity",1);
            $("#frame_content").hide();
//                $("#frame_content").attr("src","mixtureA02.html");
            $(".body").hide();
            $("header i").html("中融新经济灵活配置混合A");
//                $("body").css("background","#fff");
            $(".return_top").hide();
            window.scrollTo(0,0);

        }
    });


    $("header").click(function(){
        if( $("header i").html()=="点石成金"){
            window.location.href="index.html";
        }

        $(".body").show();
        $("#frame_content").hide();
        $("#frame_content02").hide();

        $("header i").html("点石成金");


        window.scrollTo(0,scrollTop02 ||scrollTop01);
        scrollTop02=null;
        scrollTop01=null;
//            console.log(num)

    })
})
//</script>