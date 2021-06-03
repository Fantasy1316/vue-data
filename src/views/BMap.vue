<template>
  <div class="bmap">
    <v-chart :options="options" />
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
const testPoint = [
  {
    name: '西安',
    value: [108.952214, 34.346077, 400]
  },
  {
    name: '长沙',
    value: [112.943745, 28.225979, 175]
  },
  {
    name: '郑州',
    value: [113.667636, 34.751779, 295]
  },
  {
    name: '哈尔滨',
    value: [126.537587, 45.815055, 523]
  },
  {
    name: '乌鲁木齐',
    value: [87.620414, 43.830139, 145]
  },
  {
    name: '南宁',
    value: [108.376975, 22.825871, 205]
  },
  {
    name: '成都',
    value: [104.07447, 30.592176, 225]
  },
  {
    name: '长春',
    value: [125.330031, 43.822995, 185]
  },
  {
    name: '昆明',
    value: [102.834844, 24.887583, 305]
  }
]
export default {
  name: 'BMap',
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {
      title: {
        text: '销售数据大盘',
        subtext: '销售趋势统计',
        left: 'center',
        top: 20
      },
      bmap: {
        key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyle: {
          styleJson: [
            {
              featureType: 'water',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'land',
              elementType: 'all',
              stylers: {
                color: '#f3f3f3'
              }
            },
            {
              featureType: 'railway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'highway',
              elementType: 'all',
              stylers: {
                color: '#fdfdfd'
              }
            },
            {
              featureType: 'highway',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'geometry.fill',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'green',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'subway',
              elementType: 'all',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'manmade',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'local',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'arterial',
              elementType: 'labels',
              stylers: {
                visibility: 'off'
              }
            },
            {
              featureType: 'boundary',
              elementType: 'all',
              stylers: {
                color: '#fefefe'
              }
            },
            {
              featureType: 'building',
              elementType: 'all',
              stylers: {
                color: '#d1d1d1'
              }
            },
            {
              featureType: 'label',
              elementType: 'labels.text.fill',
              stylers: {
                color: '#999999'
              }
            }
          ]
        }
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: testPoint,
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: (val) => {
            return val[2] / 10
          }
        },
        {
          name: 'Top 3',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: testPoint
            .sort((a, b) => {
              return b.value[2] - a.value[2]
            })
            .slice(0, 3),
          symbolSize: (val) => {
            return val[2] / 10
          },
          encode: {
            value: 2
          },
          label: {
            formatter: (v) => {
              return `${v.data.name} - ${v.data.value[2]}`
            },
            position: 'right',
            show: true
          },
          hoverAnimation: true,
          rippleEffect: {
            brushType: 'stroke'
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bmap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
