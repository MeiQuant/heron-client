<template>
  <div>
    <table class="table is-narrow">
      <thead>
      <tr>
        <th>代码</th>
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

  created () {
    this.socket = this.$socket('http://192.168.33.10:5000/market')
  },

  sockets: {
    update_tick (data) {
      this.$store.dispatch('update_tick', data)
    },

    init_ticks (data) {
      this.$store.commit('INIT_TICKS', data)
    }
  },

  updated () {
    var _this = this
    window.setTimeout(function () {
      _this.$forceUpdate()
    }, 500)
  },

  computed: {
    ticks () {
      var data
      var result = []
      var re = /1\d{7}|2\d{7}/
      const exchange = this.$options.propsData['exchange']
      if (exchange === 'All') {
        data = this.$store.state.ticks.ticks
      } else {
        data = this.$store.state.ticks[exchange]
      }

      for (const tick in data) {
        if (re.test(tick.symbol)) {
          result.push(tick)
        } else {
          continue
        }
      }

      return result
    }
  }
}
</script>
