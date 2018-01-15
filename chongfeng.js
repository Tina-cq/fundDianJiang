/**
 * Created by jingwan on 2017/7/18.
 */
//<script>
var index01;
//************************************************************************

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
    },10);


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
//                    $("#frame_content").attr("src","qinjuan.html");

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

        if(oElm.className=="ellipsis02" || oElm.tagName=="IMG"){    //如果这个的标签名是UL或者id名师"title",出弹框 标签名一定要全部大写,加引号
//                console.log(wid);
            $(this).parents(".foundationManager_cont01").find(".foundationManager").animate({right:-wid},function(){
                $(this).parents(".foundationManager_cont01").find(".foundationManager").hide();
            });

        }else{
            $("#frame_content02").show();
            $("#frame_content02").css("opacity",1);
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
            $("#frame_content").hide();
//                $("#frame_content").attr("src","mixtureA02.html");
            $(".body").hide();
            $("header i").html("中融新经济灵活配置混合A");
//                $("body").css("background","#fff");
            $(".return_top").hide();
        }
    });


    $("header span").click(function(){
        if( $("header i").html()=="点石成金"){
            window.location.href="index.html";
        }

        $(".body").show();
        $("#frame_content").hide();
        $("#frame_content02").hide();

        $("header i").html("点石成金");
//            console.log(num)

    })
})
//</script>