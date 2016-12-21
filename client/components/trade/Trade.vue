<template>
  <div>
    <div class="columns">
      <div class="column is-4">
        <div class="box">
          <p class="title is-4">交易</p>

          <p class="is-6">合约代码</p>
          <div class="control is-grouped">
            <p class="control">
              <input class="input is-8" type="text" v-model="order.symbol" placeholder="合约代码">
            </p>
          </div>



          <p class="is-6">价格</p>
          <div class="control is-grouped">
            <p class="control">
              <input class="input is-8" type="number" v-model="order.price" placeholder="输入价格">
            </p>
            <p class="control">
              <span class="select">
                <select v-model="order.priceType">
                  <option value="PRICETYPE_LIMITPRICE">限价</option>
                  <option value="PRICETYPE_MARKETPRICE">市价</option>
                  <option value="PRICETYPE_FOK">限价FOK(全成/全撤)</option>
                  <option value="PRICETYPE_FAK">限价FAK(部分成交剩余即撤)</option>
                </select>
              </span>
            </p>
          </div>

          <p class="is-6">手数</p>
          <div class="control is-grouped">
            <p class="control">
              <input class="input" v-model="order.volume" type="number" placeholder="输入手数">
            </p>
          </div>

          <p class="is-6">方向</p>
          <div class="control is-grouped">
            <p class="control">
              <a class="button is-success is-outlined" @click="send_order('DIRECTION_LONG', 'OFFSET_OPEN')">开多</a>
            </p>
            <p class="control">
              <a class="button is-danger is-outlined" @click="send_order('DIRECTION_SHORT', 'OFFSET_OPEN')">开空</a>
            </p>
            <p class="control">
              <a class="button is-primary is-outlined" @click="send_order('DIRECTION_SHORT', 'OFFSET_CLOSE')">平多</a>
              <a class="button is-info is-outlined" @click="send_order('DIRECTION_LONG', 'OFFSET_CLOSE')">平空</a>
            </p>
          </div>
        </div>

        <div class="box">
          <p class="title is-4">资金</p>
        </div>

      </div>
      <div class="column">
        <div class="box">
          <p class="title is-4">委托列表/撤单</p>
          <table class="table is-narrow">
            <thead>
            <tr>
              <th>委托编号</th>
              <th>合约代码</th>
              <th>方向</th>
              <th>开平</th>
              <th>价格</th>
              <th>委托数量</th>
              <th>成交数量</th>
              <th>状态</th>
              <th>委托时间</th>
              <th>撤销时间</th>
              <th>前置编号</th>
              <th>会话编号</th>
              <th>撤单</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="order of orders" :key="order.orderID">
                <td> {{ order.orderID }} </td>
                <td> {{ order.symbol}} </td>
                <td> {{ order.direction }} </td>
                <td> {{ order.offset }} </td>
                <td> {{ order.price }} </td>
                <td> {{ order.totalVolume }} </td>
                <td> {{ order.tradedVolume }} </td>
                <td> {{ order.status }} </td>
                <td> {{ order.orderTime }} </td>
                <td> {{ order.cancelTime }} </td>
                <td> {{ order.frontID }} </td>
                <td> {{ order.sessionID }} </td>
                <td>
                  <a class="button is-danger is-small is-outlined" @click="cancel_order(order)">
                    <span class="icon">
                      <i class="fa fa-reply"></i>
                    </span>
                    <span>撤单</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="box">
          <p class="title is-4">成交</p>
          <table class="table is-narrow">
            <thead>
            <tr>
              <th>成交编号</th>
              <th>委托编号</th>
              <th>合约代码</th>
              <th>方向</th>
              <th>开平</th>
              <th>价格</th>
              <th>数量</th>
              <th>成交时间</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="trade of trades" :key="trade.tradeID">
              <td> {{ trade.tradeID }} </td>
              <td> {{ trade.orderID }} </td>
              <td> {{ trade.symbol }} </td>
              <td> {{ trade.direction }} </td>
              <td> {{ trade.offset }} </td>
              <td> {{ trade.price }} </td>
              <td> {{ trade.volume }} </td>
              <td> {{ trade.tradeTime }} </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <p class="title is-4">持仓合约</p>
          <table class="table is-narrow">
            <thead>
            <tr>
              <th>合约代码</th>
              <th>方向</th>
              <th>持仓量</th>
              <th>昨日持仓</th>
              <th>冻结量</th>
              <th>价格</th>
              <th>平仓</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="position of positions" :key="position.symbol">
                <td> {{ position.symbol }} </td>
                <td> {{ position.direction }} </td>
                <td> {{ position.position }} </td>
                <td> {{ position.ydPosition }} </td>
                <td> {{ position.frozen }} </td>
                <td> {{ position.price }} </td>
                <td>
                  <a class="button is-danger is-small is-outlined" @click="close_position(position)">
                    <span class="icon">
                      <i class="fa fa-remove is-danger"></i>
                    </span>
                    <span>
                      平仓
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>

<script>
  export default {

    created () {
      this.socket = this.$socket('http://192.168.33.10:5000/trade')
      var _this = this
      window.setInterval(function () {
        _this.$forceUpdate()
      }, 2000)
    },

    sockets: {
      update_order (data) {
        this.$store.commit('UPDATE_ORDER', data)
      },

      update_trade (data) {
        this.$store.commit('UPDATE_TRADE', data)
      },

      update_position (data) {
        this.$store.commit('UPDATE_POSITION', data)
      }
    },

    data () {
      return {
        order: {
          volume: 1,
          priceType: 'PRICETYPE_LIMITPRICE',
          price: '',
          symbol: ''
        },

        orders: this.$store.state.orders,

        positions: this.$store.state.positions,

        trades: this.$store.state.trades
      }
    },

    methods: {
      send_order (direction, offset) {
        const order = Object.assign({
          direction: direction,
          offset: offset,
          exchange: 'SHFE'
        }, this.$data.order)

        // 弹屏确认
        this.socket.emit('send_order', order)
      },

      cancel_order (order) {
        console.log(order)
        this.socket.emit('cancel_order', order)
      },

      close_position (position) {
        console.log(position)
        // fill the form of trade
      }
    }
  }
</script>
