var right1chart = echarts.init(document.getElementById('right1'));

var optionright1 = {
    title: {
        text: '2020-2024年新能源车销量趋势',
        left: 'center',
        textStyle: {
            color: 'white',
        }
    },
    tooltip: {
        tigger: 'axis',
        formatter: '{c}',
    },
    series: {
        type: 'line',
        data: [117,331,650,887,1100],
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['2020','2021','2022','2023','2024'],
        labelStyle: {
            color: 'white',
        }
    },
};
optionright1 && right1chart.setOption(optionright1);