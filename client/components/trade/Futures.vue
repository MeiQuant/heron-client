<template>
  <div>
    <table class="table is-narrow">
      <thead>
      <tr @click="testEvent">
        <th>代码</th>
        <th>名称</th>
        <th>最新价</th>
        <th>涨跌</th>
        <th>幅度</th>
        <th>买价</th>
        <th>买量</th>
        <th>卖价</th>
        <th>卖量</th>
        <th>成交量</th>
        <th>现手</th>
        <th>持仓量</th>
        <th>昨结算</th>
        <th>买一价</th>
        <th>买一量</th>
        <th>卖一价</th>
        <th>卖一量</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="tick of ticks">
          <td>{{ tick.symbol}}</td>
          <td>合约名称</td>
          <td>{{ tick.lastPrice}}</td>
          <td>涨跌</td>
          <td>幅度</td>
          <td>{{ tick.askPrice1 }}</td>
          <td>{{ tick.askVolume1 }}</td>
          <td>{{ tick.bidPrice1 }}</td>
          <td>{{ tick.bidVolume1 }}</td>

          <td>{{ tick.volume }}</td>

          <td>{{ tick.volume }}</td>

          <td>{{ tick.openInterest }}</td>

          <td>{{ tick.preClosePrice }}</td>
          <td>{{ tick.askPrice1 }}</td>
          <td>{{ tick.askVolume1 }}</td>
          <td>{{ tick.bidPrice1 }}</td>
          <td>{{ tick.bidVolume1 }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>

</style>
<script>
export default {

  props: ['exchange'],

  // 注册对应交易所的tick监听，获取所有的tick数据？
  // let exchange = this.$options.propsData['exchange']
  // yse

  created () {
    this.socket = this.$socket('http://192.168.33.10:5000/market')
  },

  sockets: {
    update_tick (data) {
      // this.$store.commit('UPDATE_TICK', data)
      this.$store.dispatch('update_tick', data)
    },

    init_ticks (data) {
      this.$store.commit('INIT_TICKS', data)
    }
  },

  computed: {
    ticks () {
      const exchange = this.$options.propsData['exchange']
      if (exchange === 'All') {
        return this.$store.state.ticks.ticks
      } else {
        return this.$store.state.ticks[exchange]
      }
    }
  },

  methods: {
    testEvent () {
      this.$store.dispatch('update_tick', {
        'bidVolume5': 0,
        'bidVolume4': 0,
        'bidVolume3': 0,
        'bidVolume2': 0,
        'openPrice': 1.7976931348623157e+308,
        'datetime': null,
        'askVolume1': 0,
        'askVolume3': 0,
        'askVolume2': 0,
        'askVolume5': 0,
        'lastPrice': 3216.0,
        'highPrice': 1.7976931348623157e+308,
        'openInterest': 756.0,
        'preClosePrice': 3216.0,
        'gatewayName': 'CTP',
        'lowerLimit': 3061.0,
        'exchange': '',
        'symbol': 'jd1702',
        'time': '18:11:06.3',
        'volume': 0,
        'bidVolume1': 0,
        'date': '201612-12',
        'lastVolume': 0,
        'askVolume4': 0,
        'bidPrice5': 0.0,
        'bidPrice4': 0.0,
        'bidPrice1': 0.0,
        'bidPrice3': 0.0,
        'bidPrice2': 0.0,
        'askPrice1': 0.0,
        'lowPrice': 1.7976931348623157e+308,
        'askPrice5': 0.0,
        'askPrice4': 0.0,
        'askPrice3': 0.0,
        'askPrice2': 0.0,
        'vtSymbol': 'jd1702',
        'upperLimit': 3383.0
      })
      this.$forceUpdate()
    }
  }

}
</script>
