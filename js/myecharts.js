
$(function () {

    var docChart;//
    var myChart;
    init();

    //初始化charts
    function init() {
        docChart = document.getElementById("main")
        docChart.style.width = (document.body.clientWidth)
        docChart.style.height = '300px'
        myChart = echarts.init(docChart);
        ChartWeight();
        addListener();
    }

    function ChartPrams(yData, xData, yAxisName) {
        var option = {
            baseOption: {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xData,
                    splitNumber: 10
                },
                yAxis: {
                    name: yAxisName,
                    type: 'value',
                    max: Math.ceil(Math.max.apply(null, yData)) + 5,
                    min: Math.ceil(Math.min.apply(null, yData)) - 5,
                    data: yData
                },
                series: [{
                    data: yData,
                    name: yAxisName,
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
                                [{ offset: 0, color: '#FFFFFF' },
                                { offset: 1, color: '#06C46D' },
                                ])
                        }
                    },
                    lineStyle: {
                        color: '#06C46D'
                    }
                }],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    }
                },
                grid: {
                    show: true
                }
            },
            media: [
                {
                    option: {
                        series: { left: '1%', right: '1%' }
                    }
                }
            ],

        };

        return option
    }
    //重量
    function ChartWeight() {
        var ydata = [];
        var xdata = [];
        for (var i = 1; i < 31; i++) {
            ydata.push(50 + Math.random());
            xdata.push("2018-08-" + i);
        }
        ShowMessage(ydata, 30, "累计记录天数", "体重变化量(%)", "最高体重量(kg)", "最低体重量(kg)");
        myChart.setOption(ChartPrams(ydata, xdata, "体重(kg)"));
    }
    //脂肪率
    function ChartFat() {
        var ydata = [];
        var xdata = [];
        for (var i = 1; i < 31; i++) {
            ydata.push(30 + Math.random().toFixed(2));
            xdata.push("2018-08-" + i);

        }
        ShowMessage(ydata, 30, "累计记录天数", "骨量变化量(%)", "最高骨量(kg)", "最低骨量(kg)");
        myChart.setOption(ChartPrams(ydata, xdata, "脂肪率(%)"));
    }

    //肌肉量
    function ChartMusle() {

        var ydata = [];
        var xdata = [];
        for (var i = 1; i < 31; i++) {
            ydata.push(10 + Math.random().toFixed(2));
            xdata.push("2018-08-" + i);

        }
        ShowMessage(ydata, 30, "累计记录天数", "肌肉量变化量(%)", "最高肌肉量(kg)", "最低肌肉量(kg)");
        myChart.setOption(ChartPrams(ydata, xdata, "脂肪量"));
    }

    //水分率
    function ChartWater() {

        var ydata = [];
        var xdata = [];
        for (var i = 1; i < 31; i++) {
            ydata.push(30 + Math.random().toFixed(2));
            xdata.push("2018-08-" + i);

        }
        ShowMessage(ydata, 30, "累计记录天数", "水分率变化量(%)", "最高水份率(%)", "最低水份率(%)");
        myChart.setOption(ChartPrams(ydata, xdata, "水分率"));
    }


    //骨量
    function ChartBound() {

        var ydata = [];
        var xdata = [];
        for (var i = 1; i < 31; i++) {
            ydata.push(10 + Math.random().toFixed(2));
            xdata.push("2018-08-" + i);

        }
        ShowMessage(ydata, 30, "累计记录天数", "骨量变化量(%)", "最高骨量(kg)", "最低骨量(kg)");
        myChart.setOption(ChartPrams(ydata, xdata, "骨量"));
    }

    function ShowMessage(ydata, days, title1, title2, title3, title4) {
        $("#param_form .col-xs-6").each(function (index, item) {
            if (index == 0) {
                $(this).text("")
                $(this).append(days)
            } if (index == 1) {
                $(this).text("")
                $(this).append(((Math.max.apply(null, ydata) - Math.min.apply(null, ydata)) / Math.min.apply(null, ydata)).toFixed(2))
            } if (index == 2) {
                $(this).text("")
                $(this).append(title1)
            } if (index == 3) {
                $(this).text("")
                $(this).append(title2)
            } if (index == 4) {
                $(this).text("")
                $(this).append(Math.max.apply(null, ydata).toFixed(2))
            } if (index == 5) {
                $(this).text("")
                $(this).html(Math.min.apply(null, ydata).toFixed(2))
            } if (index == 6) {
                $(this).text("")
                $(this).append(title3)
            } if (index == 7) {
                $(this).text("")
                $(this).append(title4)
            }
        });

    }

    //添加监听事件
    function addListener() {
        var li_arr = document.getElementsByTagName("li");
        li_arr[0].addEventListener("click", ChartWeight, false)
        li_arr[1].addEventListener("click", ChartFat, false)
        li_arr[2].addEventListener("click", ChartMusle, false)
        li_arr[3].addEventListener("click", ChartWater, false)
        li_arr[4].addEventListener("click", ChartBound, false)
    }

    //窗口变化
    window.onresize = function () {
        docChart.style.width = (document.body.clientWidth)
        docChart.style.height = '300px'
        myChart.resize();
    }

    //滑动导航栏选中
    $("#li_list ul li").click(function () {
        $(this).siblings('li').removeClass('li_click');  // 删除其他兄弟元素的样式
        $(this).addClass('li_click');
    });
});