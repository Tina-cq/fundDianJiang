/**
 * Created by jingwan on 2017/7/18.
 */
//<script>
    // --------------------------------------------定义一个函数，定时调用并刷新iframe高度   01
function reinitIframe(){
    var iframe = document.getElementById("frame_content");
    try{
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
//            console.log(height)
    }catch (ex){}
}
window.setInterval("reinitIframe()", 500);
//    var timer1 = window.setInterval("reinitIframe()", 500); //定时调用开始

//完毕后干掉定时器
function IframeLoadEND(){
    var iframe = document.getElementById("frame_content");
    try{
        window.clearInterval(timer1);
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
    }catch (ex){}
    // 停止定时
//        window.clearInterval(timer1);

}
// --------------------------------------------定义一个函数，定时调用并刷新iframe高度   02
function reinitIframe02(){
    var iframe = document.getElementById("frame_content02");
    try{
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
//            console.log(height)
    }catch (ex){}
}
window.setInterval("reinitIframe02()", 500);
//    var timer1 = window.setInterval("reinitIframe()", 500); //定时调用开始

//完毕后干掉定时器
function IframeLoadEND02(){
    var iframe = document.getElementById("frame_content02");
    try{
        window.clearInterval(timer1);
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
    }catch (ex){}
    // 停止定时
//        window.clearInterval(timer1);

}
//************************************************************************
window.onload= window.onresize=function(){
    var html=document.documentElement;  //获得html
    var hW=document.documentElement.clientWidth;  //屏幕宽度
    html.style.fontSize=hW/12+'px';
//        console.log(hW);
};

$(function(){
    $("#foundation01_list_cont li").each(function(){
        $(this).find("div").eq(1).css("color","#e7152a");
    });

//************************************************************************点击变色
    $(".foundationManager_cont01_resume li:first-of-type").addClass("red");

    var flag=true;
    $("#foundation01_list_til li").click(function(){
        var index01=$(this).index();
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
    var timer=setTimeout(function(){
        $("#frame_content").hide();
        $("#frame_content02").hide();
    },1);

    $(".foundationManager01").click(function(ev){
        clearTimeout(timer);

        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.tagName=="I"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
            $(this).parents(".foundationManager_cont01").find(".foundationManager").show();
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:0});
        }else{

            $("#frame_content").show();
            $("#frame_content").css("opacity",1);
            $("#frame_content02").hide();
            $(".body").hide();
            $("header i").html("秦娟");
            $("body").css("background","#fff");
            $(".return_top").hide();
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

        if(oElm.className=="ellipsis02"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
//                console.log(wid);
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:-wid},function(){
                $(this).parents(".foundationManager_cont01").find(".foundationManager").hide();
            });

        }else{
            $("#frame_content02").show();
            $("#frame_content02").css("opacity",1);
            $("#frame_content").hide();
//                $("#frame_content").attr("src","mixtureA02.html");
            $(".body").hide();
            $("header i").html("中融新经济灵活配置混合A");
//                $("body").css("background","#fff");
            $(".return_top").hide();
        }
    });


    $("header span").click(function(){
        if( $("header i").html()=="查找基金经理"){
            window.location.href="index.html";
        }

        $(".body").show();
        $("#frame_content").hide();
        $("#frame_content02").hide();

        $("header i").html("查找基金经理");
//            console.log(num)

    })
});
//</script>