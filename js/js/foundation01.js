function frame_content02(){
    $.get("mixtureA00.html",function(data) { //初始將a.html include div#iframe

        $("#frame_content02").html(data);

        var screenW=document.documentElement.clientWidth;
//        $(".chart01").height(screenW*0.9);
        $(".chart01").height(screenW*0.8);
        $(".chart02").height(screenW*0.75);
        $(".chart03").height(screenW*0.9);


        $(".fundWorth span").click(function(){
            var i=$(this).index();
            $(this).addClass("fundWorth_active").siblings().removeClass("fundWorth_active");

            if(i==0){
                $(".mixtureA01").show();
                $(".mixtureA02").hide();
                chart02();
            }
            if(i==1){
                $(".mixtureA02").show();
                $(".mixtureA01").hide();
                chart02_01();
            }

        });

        $(".month li").click(function(){
            $(this).addClass("month_active").siblings().removeClass("month_active");
        });

        chart01()
        chart02()
        chart03()

        //******************************************************************chart01

        function chart01(){
            $(function () {
                $('#chart01').highcharts({
                    colors: ['#62a9ff', '#d859f2'],
                    chart: {
                        polar: true,
                        type: 'line'
                    },
                    credits: {
                        enabled:false
                    },
                    exporting: {
                        enabled:false
                    },
                    title: {
                        text:null,
                        x: -80
                    },
                    pane: {
                        size: '75%'
                    },
                    xAxis: {
                        categories: ['管理经验', '管理规模', '最差表现', '一年收益'],
//                        categories: ['管理经验<br/>Top 49.15%', '\0 \0 \0 管理规模<br/>Top 49.15%',
//                            '最差表现<br/>Top 49.15%', '一年收益 \0 \0 <br/> Top 49.15%'],
                        tickmarkPlacement: 'on',
                        lineWidth: 0,
                        labels: {
                            formatter:function(){
//                               console.log(this.value)
                                if(this.value=="一年收益"){
                                    return '<div style="text-align: center;"><span>'+this.value+'\0 </span><br/><span>Top 49.15%</span></div>'
                                }
                                else if(this.value=="管理规模"){
                                    return '<div style="text-align: center;"><span>\0 '+this.value+'</span><br/><span>Top 49.15%</span></div>'
                                }
                                return '<div style="text-align: center;"><span>'+this.value+'</span><br/><span>Top 49.15%</span></div>'
                            }
                        }
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },
                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}% (top:0.29%)</b><br/>'

                    },
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        y: 10
//                layout: 'vertical'
                    },
                    series: [{
                        name: '个人能力',
                        data: [12000, 19000, 60000, 35000],
                        pointPlacement: 'on'
                    }, {
                        name: '新人平均',
                        data: [50000, 39000, 42000, 31000],
                        pointPlacement: 'on'
                    }]
                });
            });
        }
        //******************************************************************chart02

        function chart02(){
            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById('chart02'));

            option = {
                title: {
                    show:false,
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis',
                    position: function (pos, params, dom, rect, size) {
                        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                        var obj = {top: 60};
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    },
                    backgroundColor:"rgba(255,255,255,0.7)",
                    borderWidth:1,
                    borderColor:"#62a9ff",
                    textStyle:{
                        color:"#000",
                        fontSize:12
                    },
                    formatter: function(params) {
//                        console.log(params)
                        var res =params[0].axisValue+',星期五</br>';
                        for (var i = 0; i < params.length; i++) {

                            res+='<span style="color: '+params[i].color+'">'+params[i].seriesName+'</span>:<span style="color: #000;font-weight: bold;">121</span>('+params[i].data+'%)</br>'
                        }
                        return res;
                    }

                },
                legend: {
                    icon : 'square',
                    data:['中融新经济灵活配置混合A','上证综指','沪深300']
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '0%',
                    top:'25%',
                    containLabel: true
                },
                toolbox: {
                    show:false,
                    feature: {
                        saveAsImage: {}
                    }
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ["","10-01","01-01","04-01","07-01",""],
                    axisTick:{    //去掉X轴刻度线
                        show:false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type:"dotted",
                            width:1,
                            color:"#c5c5c5"
                        }
                    },
                    axisLine:{
                        show:true,
                        onZero:false,
                        lineStyle:{
                            type:"solid",
                            width:1,
                            color:"#b7b7b7"
                        }
                    }
                },
                yAxis: {
                    type: 'value',

                    axisLabel : {
                        inside:true,   //向内展示
                        textStyle: {
                            fontSize: 12,
                            baseline:"bottom"
                        },
//                        formatter: '{value} %',
                        formatter: function (value, index) {
                            var val=value.toFixed(2);
                            return val+'%';
                        }
                    },
                    axisTick:{    //去掉Y轴刻度线
                        show:false
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            type:"dotted",
                            width:1,
                            color:"#c5c5c5"
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            type:"solid",
                            width:1,
                            color:"#b7b7b7"
                        }
                    },
                    min:-20.00,
                    max:5.00,
                    splitNumber:5


                },

                series: [
                    {
                        name:'中融新经济灵活配置混合A',
                        type:'line',
//                        stack: '总量',//相同导致数据累加
                        data:[0, 2, -18, -15,-17,3],
                        symbol:"none"


                    },
                    {
                        name:'上证综指',
                        type:'line',
//                        stack: '总量',
                        data:[0, 1, 2, 3,2.5,1.3],
                        symbol:"none"

                    },
                    {
                        name:'沪深300',
                        type:'line',
//                        stack: '总量',
                        data:[0, 2, 3, 0,2,4],
                        symbol:"none"

                    }

                ]
            };
            // 为echarts对象加载数据
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

        //******************************************************************chart02_01
        function chart02_01(){
            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById('chart02_01'));

            option = {
                color:['#1e97e5'],
                grid:{
                    x:screenW*0.133,

                    width:screenW*0.8

                },
                title : {
                    show : false,
                    text: '未来一周气温变化',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    show : true,
                    trigger: 'axis',
                    position: function (pos, params, dom, rect, size) {
                        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                        var obj = {top: 60};
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    },
                    backgroundColor:"rgba(255,255,255,0.7)",
                    borderWidth:1,
                    borderColor:"#62a9ff",
                    textStyle:{
                        color:"#000",
                        fontSize:12
                    },
                    formatter: function(params) {
                        console.log(params)
                        var res ='<span style="font-weight: bold;color: #000;">'+params[0].seriesName+'</span></br>';
                        res+=params[0].axisValue+':'+params[0].data;
                        return res;
                    }
                },
                legend: {
                    icon : 'square',
                    data:['中融新经济灵活配置混合A']
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : false,
                xAxis : [
                    {
                        show:true,
                        type : 'category',
                        boundaryGap : false,
                        data : ["","06-21","07-02",""]
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            show:false
                        },
                        axisTick:{    //去掉Y轴刻度线
                            show:false
                        }
//                    axisLabel : {
//                        formatter: '{value} %'
//                    }
//                splitLine:{
//                    lineStyle:{
//                        color:"red"
//                    }
//                }
                    }
                ],
                series : [
                    {
                        name:'中融新经济灵活配置混合A',
                        type:'line',
                        data:[11, 13, 12, 10],
//                        itemStyle : {
//                            normal : {
//                                lineStyle:{
//                                    color:'#1e97e5'
//                                }
//                            }
//                        },
                        symbol:"none"

                    }

                ]
            };
            // 为echarts对象加载数据
            myChart.setOption(option);
            window.onresize = myChart.resize;

        }

        //******************************************************************chart03
        function chart03(){
            // 基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById('chart03'));

            option = {
                color:['#9bd2f8','#2c82be','#53a8e2','#76ddfb'],
                tooltip : {
                    show : true,
                    trigger: 'item',
                    position: function (pos, params, dom, rect, size) {
                        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                        var obj = {top: 60};
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    },
                    backgroundColor:"rgba(255,255,255,0.7)",
                    borderWidth:1,
                    borderColor:"#62a9ff",
                    textStyle:{
                        color:"#000",
                        fontSize:12
                    },
                    formatter: "{b} : {c} (亿元)"  //控制提示
//                    formatter: "{a} <br/>{b} : {c} (亿元)"  //控制提示
                },

                legend: {
                    show : true,
                    icon : 'square',
//                    orient : 'vertical',
                    x : "5%",
                    right:"5%",
                    bottom:0,
                    width:"auto",
                    data:['权益投资','固定收益投资','现金 (存款和结算备付金)','其他资产']
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'center',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : false,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
//                        selectedMode: 'single',
                        radius:['30%','45%'],
                        center: ['45%', '40%'],
//                radius : ['50%', '70%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : true,

//                                    position :'inside' ,
                                    formatter:function(val){   //让series 中的文字进行换行
                                        return val.name.split(" ").join("\n")+"\n"+"(12.5%)";
                                    },
                                    textStyle : {
                                        fontSize : '12',
                                        align:"center",
                                        fontWeight : 'normal'

                                    }

                                },

                                labelLine : {
                                    normal:{
                                        show:true,
                                        length:'1',
                                        length2:'1'
                                    }
                                }
                            }
                        },
                        data:[
                            {value:500, name:'现金 (存款和结算备付金)'},
                            {value:1500, name:'固定收益投资'},
                            {value:100, name:'权益投资'},
                            {value:400, name:'其他资产'}
                        ]
                    }
                ]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
            window.onresize = myChart.resize;

        }



    })
}


var index01;
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
//*************************************************************************************
window.onload= window.onresize=function(){
    var html=document.documentElement;  //获得html
    var hW=document.documentElement.clientWidth;  //屏幕宽度
    html.style.fontSize=hW/12+'px';
//        console.log(hW);
//************************************************************************************************
    var screenH=document.documentElement.clientHeight;
    var hei=$("header").outerHeight()+$("#search").outerHeight()+$(".foundation01_list_til ").outerHeight()+$(".loadtip").outerHeight();
        console.log(hei);
    $(".swiper-container").height(screenH-hei);
    $(".w").height(screenH-hei);
//************************************************************************************************详情页1出现
//    $("#frame_content").hide();
//    $("#frame_content02").hide();
    var timer=setTimeout(function(){
        $("#frame_content").hide();
        $("#frame_content02").hide();
    },1);

    $(".item01").click(function(ev){
        clearTimeout(timer);
        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.tagName=="P" && oElm.className=="pp"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
            $(this).parents("li").find(".item02").show();
            $(this).parents("li").find(".item02").animate({right:0});
        }else{
            $("#frame_content").show();
            $("#frame_content").css("opacity",1);
            $("#frame_content02").hide();

            $(".body").hide();
            $("header i").html("中融新经济灵活配置混合A");
            $("body").css("background","#fff");
        }
    });

    //************************************************************************************************详情页2出现
    //*******************************************点击省略号
    var wid=$(".foundation01_list_cont").width();
    $(".item02").css("right",-wid);

    //*********************************************点击省略号


    $(".item02").click(function(ev){
        clearTimeout(timer);
        ev=ev||evevt;
        var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

        if(oElm.className=="foundation01_list_right" || oElm.tagName=="IMG"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
            console.log(wid);
            $(this).parents("li").find(".item02").animate({right:-wid},function(){
                $(this).parents("li").find(".item02").hide();
            });

        }else{
            $("#frame_content02").show();
            $("#frame_content02").css("opacity",1);
            frame_content02();
            $("#frame_content").hide();
//                $("#frame_content").attr("src","mixtureA02.html");
            $(".body").hide();
            $("header i").html("秦娟");
//                $("body").css("background","#fff");
            $(".return_top").hide();
        }
    });
    //**************************************************************************
    $("header span").click(function(){
//            console.log($("header i").html())
        if( $("header i").html()=="基金"){
            window.location.href="index.html";
        }
        $(".body").show();
        $("#frame_content").hide();
        $("#frame_content02").hide();
        $("header i").html("基金");
        if(num>0){
            $(".return_top").show();
        }
        window.scrollTo(0,0);
    })
};
//*****************************************************************************************
$(function(){
    $("#foundation01_list_cont li").each(function(){
        $(this).find("p").eq(1).css("color","#e7152a");
    });

    var flag=true;
    $("#foundation01_list_til li").click(function(){
        if($(this).index()!=0 && $(this).index()!=3){



            if($(this).hasClass("foundation01_active")){
                if(flag){
                    $(this).find("i").addClass("bottom_blue").removeClass("top_blue");
                    flag=!flag;
                }else{
                    $(this).find("i").addClass("top_blue").removeClass("bottom_blue");
                    flag=!flag;
                }

            }else{
                index01=$(this).index();
                var i=$(this).index();
                $(this).addClass("foundation01_active").siblings().removeClass("foundation01_active");
                $("#foundation01_list_cont li").each(function(){
                    $(this).find("p").eq(1).css("color","#4a4a4a");
                    $(this).find("p").eq(2).css("color","#4a4a4a");
                    $(this).find("p").eq(i).css("color","#e7152a");
                });
                $("#foundation01_list_til li").find("i").removeClass("bottom_blue top_blue");
                $(this).find("i").addClass("bottom_blue");
                flag=false;
            }


        }
    });

    //*******************************************************点击筛选
    var flag02=true;
    $("#shaixuan").click(function(){

        $(this).find("i").toggleClass("arrow_up");
        if(flag02){
            $(".swiper-container").hide();
            $(".filtrate").show();
            $(".filtrate_btn").show();
            flag02=!flag02;

            $(".return_top").hide();

        }else{
            $(".swiper-container").show();
            $(".filtrate").hide();
            $(".filtrate_btn").hide();
            flag02=!flag02;
            window.scrollTo(0,0);
            if(num>0){
                $(".return_top").show();
            }
        }

    });

    //**********************************************筛选里边点击效果
    function filtrateActive(active){
        active.click(function(){
            $(this).addClass("filtrate01_active").siblings().removeClass("filtrate01_active");
        })
    }
    filtrateActive($(".filtrate01 li"));
    filtrateActive($(".filtrate02 li"));
    filtrateActive($(".filtrate04 li"));

    $(".filtrate03 span").click(function(){
        $(".filtrate03").find("span").removeClass("filtrate01_active");
        $(this).addClass("filtrate01_active");
    });
    //点击重置
    $("#reset").click(function(){
        $('.filtrate').find("*").removeClass("filtrate01_active")
    });


    //*************************************************按键精灵
    //***************************************按键精灵高度
    $(".wizardButton").height(1000);

    $(".search input").keyup(function(){
        $(".return_top").hide();
        if($(this).val()==0){
            $(".wizardButton").show();

            $(".wizardButton li").each(function(){
                $(this).click(function(){
                    window.location.href="mixtureA02.html"
                })
            })

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
var mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    scrollbar: '.swiper-scrollbar',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    onTouchMove: function(swiper){		//手动滑动中触发
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
            // console.log("已经到达底部！");

            if(loadFlag){
                $(".loadtip").html('<span></span>正在加载...');
            }else{
                $(".loadtip").html('没有更多啦！');
            }

            setTimeout(function() {
                num++;
//                    console.log(num)
                for(var i = 0; i <5; i++) {
                    $("#foundation01_list_cont").append('<li><div class="item01"><p><span>中融新经济灵活配置混合A</span><br/><span>00124558</span></p><p class="p2">120.71%</p>'+
                        '<p class="p3">120.71%</p>'+ '<p class="pp"><img src="images/Group7.png" alt=""/></p>'+
                        '</div>'+
                        '<div class="item02">'+
                        '<div class="foundation01_list_left">'+
                        '<span>刘夫</span><br/>'+
                        '<span>基金经理</span>'+
                        '</div>'+
                        '<div class="foundation01_list_left foundation01_list_mid">'+
                        '<span>120.71%</span><br/>'+
                        '<span>最近一年</span>'+
                        '</div>'+
                        '<div class="foundation01_list_right"><img src="images/dian.png" alt=""/></div>'+
                        '</div>'+
                        '</li>'+
                        '<li>');

                }
                // //************************颜色
                // $("#foundation01_list_cont li").each(function(){
                //     $(this).find("p").eq(1).css("color","#e7152a");
                // });

                //********************************点击省略号效果
                var wid02=$(".foundation01_list_cont").width();
                $(".item02").css("right",-wid02);

                $(".foundation01_list_right").click(function(){
                    $(this).parents(".item02").animate({right:-wid02},function(){
                        $(this).parents("li").find(".item02").hide();
                    });


                });
                //***************************************按键精灵高度
                var hei02=$("header").outerHeight()+$("#search").outerHeight()+$(".foundation01_list_til ").outerHeight()+$(".loadtip").outerHeight();
//console.log($(".swiper-slide").height()+hei02)
                $(".wizardButton").height($(".swiper-slide").height()+hei02);

//************************************************************************************************详情页1出现

                $(".item01").click(function(ev){

                    ev=ev||evevt;
                    var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

                    if(oElm.tagName=="IMG" || oElm.className=="pp"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
                        $(this).parents("li").find(".item02").show();
                        $(this).parents("li").find(".item02").animate({right:0});
                    }else{
                        $("#frame_content").show();
                        $("#frame_content").css("opacity",1);
                        $("#frame_content02").hide();

                        $(".body").hide();
                        $("header i").html("中融新经济灵活配置混合A");
                        $("body").css("background","#fff");
                    }
                });

                //************************************************************************************************详情页2出现
                //*******************************************点击省略号
                var wid=$(".foundation01_list_cont").width();
                $(".item02").css("right",-wid);

                //*********************************************点击省略号


                $(".item02").click(function(ev){
                    ev=ev||evevt;
                    var oElm=ev.target||ev.srcElement;       //判断点的是哪个对象

                    if(oElm.className=="foundation01_list_right"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
                        console.log(wid);
                        $(this).parents("li").find(".item02").animate({right:-wid},function(){
                            $(this).parents("li").find(".item02").hide();
                        });


                    }else{
                        $("#frame_content02").show();
                        $("#frame_content02").css("opacity",1);
                        frame_content02();

                        $("#frame_content").hide();
//                $("#frame_content").attr("src","mixtureA02.html");
                        $(".body").hide();
                        $("header i").html("秦娟");
//                $("body").css("background","#fff");
                        $(".return_top").hide();
                    }
                });


//*****************************************************************************************
//************************************************************************点击变色
                console.log(index01);
                if(index01==2){

                    $("#foundation01_list_cont .item01").each(function(){
                        $(this).find("p").eq(2).css("color","#e7152a");
                    })


                }else{
                    $(".item01").each(function(){
                        $(this).find("p").eq(1).css("color","#e7152a");
                    })
                }
                //******************************************

                $(".loadtip").html('上拉加载更多...');
                mySwiper.update(); // 重新计算高度;
            }, 800);

        }

        //******************************************************\
        if(num==1){
            $('.return_top').show();
        }
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
//        $(".swiper-wrapper").animate({transform:"translate3d(0px, 0px, 0px)"})
    $(".swiper-wrapper").css("transform","translate3d(0px, 0px, 0px)")
//        console.log($(".foundationManager_cont").offset().top);
})
//</script>