

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
    addClass(0);
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
    addClass(1);
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
    addClass(2);
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

    addClass(3);
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
    addClass(4);
    var ydata = [];
    var xdata = [];
    for (var i = 1; i < 31; i++) {
        ydata.push(10 + Math.random().toFixed(2));
        xdata.push("2018-08-" + i);

    }
    myChart.setOption(DrawWeight(ydata, xdata, "骨量"));
}

/*
document.getElementById("li_1").addEventListener("click", ChartWeight, false)
document.getElementById("li_2").addEventListener("click", ChartFat, false)
document.getElementById("li_3").addEventListener("click", ChartMusle, false)
document.getElementById("li_4").addEventListener("click", ChartWater, false)
document.getElementById("li_5").addEventListener("click", ChartBound, false)
*/
ChartWeight();
window.onresize = function () {
    docChart.style.width = (document.body.clientWidth)
    docChart.style.height = '300px'
    myChart.resize();
}

function addClass(num) {
    var li_list = document.getElementsByTagName("li");
    for(var i = 0;i < 5; i ++){
        if(i != num){
            li_list[i].classList.remove("active");
        }
    }
    li_list[num].classList.add("active");

}

$("#li_list ul li").click(function(){
    $(this).siblings('li').removeClass('li_click');  // 删除其他兄弟元素的样式
    $(this).addClass('li_click');
});