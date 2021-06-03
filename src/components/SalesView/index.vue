<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu">
          <el-menu
            class="sales-view-menu"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              class="sales-view-date-picker"
              v-model="date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-content">
          <v-chart :options="chartOptions"></v-chart>
          <div class="sales-view-content--list">
            <p class="list-title">排行榜</p>
            <div class="list-cont">
              <div class="list-item" v-for="item in rankList" :key="item.no">
                <p
                  :class="[
                    'list-item--no',
                    item.no <= 3 ? 'list-item--no_top' : ''
                  ]"
                >
                  {{ item.no }}
                </p>
                <p class="list-item--name">{{ item.name }}</p>
                <p class="list-item--money">{{ item.money }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick: (picker) => {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick: (picker) => {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick: (picker) => {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOptions: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 250, 300, 280, 210, 250, 200, 250, 300, 280, 210, 250],
            color: ['#3398DB']
          }
        ],
        grid: {
          top: 70,
          right: 60,
          bottom: 50,
          left: 60
        }
      },
      rankList: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,152'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,152'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,152'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,152'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,152'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,152'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,152'
        }
      ]
    }
  },
  methods: {
    // 菜单选中事件
    onMenuSelect(index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;

  .menu {
    display: flex;
    position: relative;

    .sales-view-menu {
      width: 100%;
      padding-left: 20px;

      .el-menu-item {
        height: 60px;
        line-height: 60px;
        margin: 0 20px;
      }
    }

    &-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }

  .sales-view-content {
    display: flex;
    height: 270px;

    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }

    &--list {
      flex: 1;
      width: 100%;
      height: 100%;

      .list-title {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;
        color: #666;
      }

      .list-cont {
        margin-top: 15px;

        .list-item {
          display: flex;
          align-items: center;
          height: 20px;
          font-size: 14px;
          padding: 6px 20px 6px 0;

          &--no {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            color: #333;

            &_top {
              color: #fff;
              background-color: #333;
              border-radius: 20px;
            }
          }

          &--name {
            flex: 1;
            margin: 0 20px;
          }
        }
      }
    }
  }
}
</style>
