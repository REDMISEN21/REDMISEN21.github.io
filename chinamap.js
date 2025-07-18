// 初始化echart实例对象
var myChartchina = echarts.init(document.getElementById('chinamap'));

//
//
//


// 指定图表的配置项和数据-
var optionchina = {
    title: {
        text: '汽车销量',
        textStyle: {
            color: 'yellow',
            fontStyle: 'normal',
            fontSize: 30, //字体大小

        },
        left: 'center',
        top: '30px'

    },
    tooltip: {
        trigger: 'item',
        borderColor: 'black',
    },
    series: [{
        name: '销量',
        type: 'map', //图表样式类型
        mapType: 'china', //地图样式
        roam: false, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "black", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: false, //省份名称
                fontSize: 15,
            },
            emphasis: {
                show: true,
                fontSize: 20,
            }
        },
        data: [

        ] 
    }]
};

$.get("lib/map/china.js", {}, function (Results) {
    var data = Results.parResult;
    myChartchina.setOption({
        series: {
            data: data
        }
    });
}, "json");

// 使用刚指定的配置项和数据显示图表。
myChartchina.setOption(optionchina);