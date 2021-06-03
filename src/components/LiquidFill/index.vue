<template>
  <ve-liquidfill
    :data="chartData"
    :settings="chartSettings"
    height="100%"
  ></ve-liquidfill>
</template>

<script>
function getColor(value) {
  if (value > 0 && value <= 0.5) {
    return 'rgba(97, 216, 0, 0.7)'
  } else if (value > 0.5 && value <= 0.8) {
    return 'rgba(204, 178, 26, 0.7)'
  } else if (value > 0.8) {
    return 'rgba(241, 47, 28, 0.7)'
  } else {
    return '#c7c7cd'
  }
}
export default {
  name: 'LiquidFill',
  data() {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [
          {
            title: 'rate',
            percent: 0.6899
          }
        ]
      },
      chartSettings: {}
    }
  },
  mounted() {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          label: {
            formatter: (v) => {
              console.log(v)
              return `${Math.floor(v.data.value * 100)}%`
            },
            textStyle: {
              fontSize: 46,
              fontWeight: 'normal',
              color: '#999'
            },
            position: ['50%', '50%'],
            insideColor: '#fff'
          },
          outline: {
            itemStyle: {
              borderColor: '#aaa4a4',
              borderWidth: 1,
              color: 'none',
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          amplitude: 8,
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  }
}
</script>

<style></style>
