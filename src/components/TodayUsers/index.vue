<template>
  <div class="today-users">
    <common-card title="今日交易用户数" value="81,034">
      <template>
        <v-chart :options="handleEChartInit()" />
      </template>
      <template v-slot:footer>
        <div class="footer">
          <span class="footer-title">退货率</span>
          <span class="footer-money">5.31%</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'ToadyUsers',
  mixins: [commonCardMixin],
  mounted() {
    this.handleEChartInit()
  },
  methods: {
    // 初始化订单数量图表
    handleEChartInit() {
      return {
        xAxis: {
          type: 'category',
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ],
          show: false
        },
        yAxis: { show: false },
        series: [
          {
            type: 'bar',
            data: [
              620,
              432,
              200,
              534,
              790,
              430,
              220,
              320,
              532,
              320,
              834,
              690,
              520,
              220
            ],
            barWidth: '60%'
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        color: ['#3398DB']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.today-users {
  width: 100%;
  height: 100%;
}

.footer {
  font-size: 14px;

  &-money {
    margin-left: 10px;
    font-weight: 700;
    color: #333;
    letter-spacing: 1px;
  }
}
</style>
