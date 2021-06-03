<template>
  <div class="map-view">
    <div class="map-view--left">
      <b-map-scatter />
    </div>
    <div class="map-view--right">
      <el-card shadow="hover">
        <template v-slot:header>
          <p class="title">用户月同比增长</p>
        </template>
        <template>
          <div class="chart">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <p class="title">热门搜索</p>
        </template>
        <template>
          <div class="chart">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from '../BMapScatter'
import LiquidFill from '../LiquidFill'
import WordCloud from '../WordCloud'
export default {
  name: 'MapView',
  components: {
    BMapScatter,
    LiquidFill,
    WordCloud
  }
}
</script>

<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;

  &--left {
    flex: 0 0 74%;
    width: 74%;
    height: 800px;
    margin-right: 10px;
  }

  &--right {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .el-card {
      flex: 1;

      &:first-child {
        margin-bottom: 10px;
      }

      &:last-child {
        margin-top: 10px;
      }
    }

    .title {
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      font-size: 14px;
      font-weight: 700;
      color: #333;
      border-bottom: 1px solid #eee;
    }

    .chart {
      height: 288px;
    }
  }
}
</style>
