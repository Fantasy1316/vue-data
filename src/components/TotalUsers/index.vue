<template>
  <div class="total-users">
    <common-card title="累计用户数" value="1,087,503">
      <template>
        <v-chart :options="handleEChartInit()" />
      </template>
      <template v-slot:footer>
        <div class="footer">
          <div class="footer-item">
            <span class="footer-item--title">日同比</span>
            <span class="footer-item--money money-up">5.31%</span>
          </div>
          <div class="footer-item">
            <span class="footer-item--title">月同比</span>
            <span class="footer-item--money money-down">5.31%</span>
          </div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  mounted() {
    this.handleEChartInit()
  },
  methods: {
    // 初始化订单数量图表
    handleEChartInit() {
      return {
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            data: [200],
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#45C946'
            }
          },
          {
            type: 'bar',
            data: [300],
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            data: [200],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                children: [
                  {
                    type: 'path',
                    position: endPoint,
                    shape: {
                      d:
                        'M523.955 832.173l323.744-512c6.24-9.856 6.624-22.336 0.992-32.512-5.632-10.24-16.384-16.576-28.033-16.576h-647.328c-11.647 0-22.4 6.336-28.033 16.576-2.656 4.8-3.968 10.112-3.968 15.424 0 5.952 1.664 11.904 4.929 17.088l323.616 512c5.856 9.28 16.064 14.911 27.040 14.912s21.184-5.632 27.040-14.912z',
                      x: -10,
                      y: -28,
                      width: 16,
                      height: 16,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45C946'
                    }
                  },
                  {
                    type: 'path',
                    position: endPoint,
                    shape: {
                      d:
                        'M523.955 297.952l323.744 512c6.24 9.856 6.624 22.336 0.992 32.512-5.632 10.24-16.384 16.576-28.033 16.576l-647.328 0c-11.647 0-22.4-6.336-28.033-16.576-2.656-4.8-3.968-10.112-3.968-15.424 0-5.952 1.664-11.904 4.929-17.088l323.616-512c5.856-9.28 16.064-14.911 27.04-14.912s21.184 5.632 27.04 14.912z',
                      x: -8,
                      y: 10,
                      width: 14,
                      height: 14,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45C946'
                    }
                  }
                ]
              }
            }
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
.total-users {
  width: 100%;
  height: 100%;
}

.footer {
  display: flex;

  &-item {
    font-size: 14px;
    &:first-child {
      margin-right: 30px;
    }

    &--money {
      position: relative;
      margin-left: 6px;
      font-weight: 700;
      color: #333;
      letter-spacing: 1px;

      &::after {
        content: '';
        position: absolute;
        right: -14px;
        border-width: 5px;
        border-style: solid;
      }
    }

    .money-up {
      &::after {
        top: 1px;
        border-color: transparent transparent #ca0404 transparent;
      }
    }

    .money-down {
      &::after {
        top: 7px;
        border-color: #007700 transparent transparent transparent;
      }
    }
  }
}
</style>
