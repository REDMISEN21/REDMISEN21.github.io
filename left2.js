var left2chart = echarts.init(document.getElementById("left2"));

var optionleft2 = {
    title: {
        text: '广州降价榜',
        left: 'center',
        textStyle: {
            color: 'white',
        },
    },
    tooltip: {
        tigger: 'axis',
        formatter: '{b}下降{c}万',
    },
    series: {
        type: 'bar',
        data: [14,4.5,5.16,11.5,5],
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: 'white',
        }
    },
    xAxis: {
        type: 'category',
        data: ['宝马i3', '宝来', '威朗', '宝马X1', '祥菱Q EV'],
        axisLabel: {
            color: 'white',
        },
    },
}
optionleft2 && left2chart.setOption(optionleft2);