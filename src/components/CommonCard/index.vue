<template>
  <div class="common-card">
    <div class="common-card--title">{{ title }}</div>
    <div class="common-card--value">{{ value }}</div>
    <div class="common-card--chart">
      <slot></slot>
    </div>
    <div class="common-card--line" />
    <div class="common-card--total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.common-card {
  &--title {
    font-size: 14px;
    color: #999;
  }

  &--value {
    margin-top: 10px;
    font-size: 25px;
    color: 000;
    letter-spacing: 1px;
  }

  &--chart {
    height: 50px;
  }

  &--line {
    margin: 14px 0;
    border-top: 1px solid #eee;
  }

  .total {
    font-size: 12px;
    color: #666;
  }
}
</style>
