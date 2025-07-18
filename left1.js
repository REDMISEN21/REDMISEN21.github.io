var left1chart = echarts.init(document.getElementById('left1'));

var optionleft1 = {
    title: {
        text: "广州热销榜",
        left: "center",
        textStyle: {
            color: "red"
        }
    },
    tooltip: {
        tigger: 'axis',
        formatter: '{b}: {c}辆',
    },
    series: [{
        data: [734, 918, 1114, 1182, {
            value: 2030,
            itemStyle: {
                color: '#F08080'
            },
        }
    ],
        type: "bar",
    }],
    yAxis: {
        type: "category",
        data: ['问界M9', '型格', 'Model Y', 'AION Y', 'ALON S'],
        axisLabel: {
            fontSize: 10,
            color: 'white',
        },
    },
    xAxis: {
        type: "value",
        axisLabel: {
            color: "white",
        },
    },
};
optionleft1 && left1chart.setOption(optionleft1);