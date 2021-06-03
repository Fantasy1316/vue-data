<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">
            <div class="title-text">关键词搜索</div>
          </div>
        </template>
        <template>
          <div class="chart-inner">
            <div class="chart">
              <div class="chart-item">
                <div class="chart-item--title">搜索用户数</div>
                <div class="chart-item--data">93,634</div>
                <v-chart :options="searchUserOptions"></v-chart>
              </div>
              <div class="chart-item">
                <div class="chart-item--title">搜索量</div>
                <div class="chart-item--data">198,723</div>
                <v-chart :options="searchUserOptions"></v-chart>
              </div>
            </div>
            <div class="table">
              <el-table :data="tableData">
                <el-table-column
                  prop="rank"
                  label="排名"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="keyword"
                  label="关键词"
                  width="300"
                ></el-table-column>
                <el-table-column
                  prop="count"
                  label="总搜索量"
                ></el-table-column>
                <el-table-column
                  prop="user"
                  label="搜索用户数"
                ></el-table-column>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">
            <div class="title-text">分类销售排行</div>
            <div class="title-radio">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-inner">
            <v-chart :options="categoryOptions"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data() {
    return {
      searchUserOptions: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          show: false,
          min: 0
        },
        series: [
          {
            type: 'line',
            data: [100, 200, 250, 100, 100, 300, 280, 220, 450, 800],
            areaStyle: {
              color: 'rgba(95, 187, 255, 0.5)'
            },
            lineStyle: {
              color: 'rgba(95, 187, 255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          right: -28,
          bottom: 0,
          left: -28
        }
      },
      searchNumberOptions: {},
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: '北京',
          count: 100,
          user: 90,
          range: '90%'
        },
        {
          id: 2,
          rank: 2,
          keyword: '北京',
          count: 100,
          user: 90,
          range: '90%'
        },
        {
          id: 3,
          rank: 3,
          keyword: '北京',
          count: 100,
          user: 90,
          range: '90%'
        },
        {
          id: 4,
          rank: 4,
          keyword: '北京',
          count: 100,
          user: 90,
          range: '90%'
        }
      ],
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  mounted() {
    this.getCategoryData()
  },
  methods: {
    getCategoryData() {
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.40',
          itemStyle: {
            color: '#e7e702'
          },
          name: '粉面粥店 | 15.40%'
        },
        {
          legendname: '简餐便当',
          value: 97,
          percent: '22.30',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '简餐便当 | 22.30%'
        },
        {
          legendname: '汉堡披萨',
          value: 92,
          percent: '21.15',
          itemStyle: {
            color: '#5085f2'
          },
          name: '汉堡披萨 | 21.15%'
        }
      ]
      this.categoryOptions = {
        title: [
          {
            text: '平类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: '320',
            x: '29.5%',
            y: '42.5%',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            },
            textAlign: 'center'
          }
        ],
        series: [
          {
            name: '品类分布',
            type: 'pie',
            data: mockData,
            label: {
              normal: {
                show: true,
                position: 'outter',
                formatter: (params) => {
                  return params.data.legendname
                }
              }
            },
            center: ['30%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8e8e8e'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            const str =
              params.seriesName +
              '<br/>' +
              params.marker +
              params.data.legendname +
              '<br/>' +
              '数量：' +
              params.data.value +
              '<br/>' +
              '占比：' +
              params.data.percent +
              '%'
            return str
          }
        }
      }
    },
    onPageChange(page) {
      console.log(page)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }

    .title {
      display: flex;
      align-items: center;
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      border-bottom: 1px solid #eee;

      &-text {
        flex: 1;
        font-size: 14px;
        font-weight: 700;
      }
    }

    .chart-inner {
      display: flex;
      flex-direction: column;
      height: 426px;

      .chart {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;

        &-item {
          flex: 1;
          padding: 0 10px;

          &--title {
            margin-bottom: 4px;
            font-size: 14px;
            color: #999999;
          }

          &--data {
            margin-bottom: 10px;
            font-size: 22px;
            font-weight: 700;
            color: #333;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }

      .table {
        flex: 1;
        padding: 0 20px 20px;
        margin-top: 20px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
