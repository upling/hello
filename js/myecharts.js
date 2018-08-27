

var docChart = document.getElementById("main")
docChart.style.width = (document.body.clientWidth)
docChart.style.height = '300px'
var myChart = echarts.init(docChart);

function DrawWeight(yData, xData, yAxisName) {
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
    myChart.setOption(DrawWeight(ydata, xdata, "体重(kg)"));
}
//脂肪率
function ChartFat() {
    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(30 + Math.random().toFixed(2));
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "脂肪率(%)"));
}

//肌肉量
function ChartMusle() {
    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(10 + Math.random().toFixed(2));
        xdata.push("2018-08-" + i);

    }

    myChart.setOption(DrawWeight(ydata, xdata, "脂肪量"));
}

//水分率
function ChartWater() {

    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(30 + Math.random().toFixed(2));
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "水分率"));
}


//骨量
function ChartBound() {
    
    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(10 + Math.random().toFixed(2));
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "骨量"));
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

ChartWeight();
addListener();

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