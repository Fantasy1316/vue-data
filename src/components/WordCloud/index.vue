<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings" height="100%" />
</template>

<script>
export default {
  name: 'WordCloud',
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: '周杰伦',
            value: 100 * Math.random()
          },
          {
            name: '林俊杰',
            value: 100 * Math.random()
          },
          {
            name: '王力宏',
            value: 100 * Math.random()
          },
          {
            name: 'SHE',
            value: 100 * Math.random()
          },
          {
            name: '周杰伦1',
            value: 100 * Math.random()
          },
          {
            name: '林俊杰1',
            value: 100 * Math.random()
          },
          {
            name: '王力宏1',
            value: 100 * Math.random()
          },
          {
            name: 'SHE1',
            value: 100 * Math.random()
          },
          {
            name: '周杰伦2',
            value: 100 * Math.random()
          },
          {
            name: '林俊杰2',
            value: 100 * Math.random()
          },
          {
            name: '王力宏2',
            value: 100 * Math.random()
          },
          {
            name: 'SHE2',
            value: 100 * Math.random()
          }
        ]
      },
      chartSettings: {
        color: [
          'rgba(97, 216, 0, .7)',
          'rgba(204, 178, 26, .7)',
          'rgba(245, 166, 36, .7)',
          'rgba(156, 13, 113, .7)'
        ]
      }
    }
  }
}
</script>

<style></style>
