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
        <tr v-for="tick of ticks" :key="tick.symbol">
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
      // this.$forceUpdate()
    },

    init_ticks (data) {
      this.$store.commit('INIT_TICKS', data)
    }
  },

  updated () {
    // console.log((new Date()).getTime() + '我更新了')
    var _this = this
    window.setTimeout(function () {
      _this.$forceUpdate()
    }, 500)
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
      this.socket.emit('subscribe_all')
      console.log(this.socket)
      this.$forceUpdate()
    }
  }

}
</script>
