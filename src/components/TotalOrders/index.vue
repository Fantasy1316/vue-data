<template>
  <div class="total-orders">
    <common-card title="累计订单量" value="2,157,420">
      <template>
        <v-chart :options="handleEChartInit()" />
      </template>
      <template v-slot:footer>
        <div class="footer">
          <span class="footer-title">昨日订单量</span>
          <span class="footer-money">298,258</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalOrders',
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
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
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
              220,
              620
            ],
            type: 'line',
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-orders {
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
