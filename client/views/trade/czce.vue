<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="level">
            <p class="level-left title is-4 is-marginless">合约列表</p>
            <div class="level-right tabs is-right is-toggle">
              <ul>
                <li><a>上交所</a></li>
                <li><a>上期所</a></li>
                <li><a>中金所</a></li>
                <li><a>大商所</a></li>
                <li class="is-active"><a>郑商所</a></li>
              </ul>
            </div>
          </div>

          <table class="table is-narrow">
            <thead>
            <tr>
              <th>合约名称</th>
              <th>最新价</th>
              <th>买价</th>
              <th>买量</th>
              <th>卖价</th>
              <th>卖量</th>
              <th>涨跌</th>
              <th>涨跌幅</th>
              <th>成交量</th>
              <th>现手</th>
              <th>持仓量</th>
              <th>昨结算</th>
            </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>

    <trade></trade>

  </div>
</template>

<script>
// import Vue from 'vue'
import { Trade } from 'components/trade'

export default {

  components: {
    Trade
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
