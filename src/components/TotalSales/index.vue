<template>
  <div class="total-sales">
    <common-card title="累计销售额" value="¥ 38,005,258">
      <template>
        <div class="compare">
          <div class="compare-item">
            <span>日同比</span>
            <span class="compare-item--money money-up">7.3%</span>
          </div>
          <div class="compare-item">
            <span>日同比</span>
            <span class="compare-item--money money-down">33.3%</span>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="footer">
          <span class="footer-title">昨日销售额</span>
          <span class="footer-money">¥5,998,258</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.compare {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-item {
    margin-top: 10px;
    font-size: 14px;
    color: #666;

    &--money {
      position: relative;
      margin-left: 10px;
      font-weight: 700;
      color: #333;

      &::after {
        content: '';
        position: absolute;
        right: -18px;
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
