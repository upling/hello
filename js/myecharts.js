

var docChart = document.getElementById("main")
docChart.style.width = (document.body.clientWidth)
docChart.style.height = '300px'
var myChart = echarts.init(docChart);

function DrawWeight(yData, xData, xAxisName, yAxisName) {
    var option = {
        baseOption: {
            xAxis: {
                name: xAxisName,
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
        /*
        media: [
            {
                option: {
                    legend: {
                        orient: 'horizontal',
                        left: 'right',
                        itemGap: 10
                    },
                    xAxis: {
                        nameLocation: 'end',
                        nameGap: 10,
                        splitNumber: 5,
                    },
                    series: [
                        { name: xAxisName, center: ['75%', '20%'], radius: '28%' },
                        { name: yAxisName, center: ['75%', '20%'], radius: '28%' }
                    ]
                }
            },
            {
                query: { maxWidth: 670, minWidth: 550 },
                option: {
                    legend: {
                        orient: 'horizontal',
                        left: 200,
                        itemGap: 5,
                    },
                    grid: {
                        left: '10%',
                        top: 80,
                        right: 90,
                        bottom: 100
                    },
                    xAxis: {
                        nameLocation: 'end',
                        nameGap: 10,
                        splitNumber: 5,
                    },
                    series: [
                        { name: xAxisName, center: ['75%', '20%'], radius: '28%' },
 
                    ]
                }
            },
            {
                query: { maxWidth: 550 },
                option: {
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        itemGap: 5
                    },
                    grid: {
                        left: 55,
                        top: '32%',
                        right: 100,
                        bottom: 50
                    },
                    xAxis: {
                        nameLocation: 'middle',
                        nameGap: 25,
                        splitNumber: 3
                    },
                    series: [
                        { name: xAxisName, center: ['45%', '20%'], radius: '28%' },
                        { name: yAxisName, center: ['45%', '20%'], radius: '28%' }
                    ]
                }
            }
        ],
        //options: {}
        */
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
    myChart.setOption(DrawWeight(ydata, xdata, "日期", "体重(kg)"));
}
//脂肪率
function ChartFat() {

    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(30 + Math.random());
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "日期", "脂肪率(%)"));
}

//肌肉量
function ChartMusle() {

    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(10 + Math.random());
        xdata.push("2018-08-" + i);

    }

    myChart.setOption(DrawWeight(ydata, xdata, "日期", "脂肪量"));
}

//水分率
function ChartWater() {


    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(30 + Math.random());
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "日期", "水分率"));
}


//骨量
function ChartBound() {

    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(10 + Math.random());
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "日期", "骨量"));
}


document.getElementById("li_1").addEventListener("click", ChartWeight, false)
document.getElementById("li_2").addEventListener("click", ChartFat, false)
document.getElementById("li_3").addEventListener("click", ChartMusle, false)
document.getElementById("li_4").addEventListener("click", ChartWater, false)
document.getElementById("li_5").addEventListener("click", ChartBound, false)

window.o
window.onresize = function () {
    docChart.style.width = (document.body.clientWidth)
    docChart.style.height = '300px'
    myChart.resize();
}
