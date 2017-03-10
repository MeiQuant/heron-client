<template>
  <div class="is-full-height">
    <div class="component-nav nav">
      <div class="nav-left">
        <div class="nav-item">
          <span class="select">
            <select>
              <option>上海证券交易所</option>
              <option>中国金融交易所</option>
              <option>郑州商品交易所</option>
              <option>大连商品交易所</option>
              <option>上海商品交易所</option>
            </select>
          </span>
          <span class="select">
            <select>
              <option>白糖期权</option>
              <option>豆粕期权</option>
            </select>
          </span>
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-item">
          <a class="button is-warning">复式下单</a>
          <a><span class="icon"><i class="fa fa-repeat"></i></span></a>
          <a title="更多参数" @click="showParams"><span class="icon"><i class="fa fa-list"></i></span></a>
        </div>
      </div>
    </div>

    <div class="option-spot">
      <table class="table">
        <thead>
          <tr>
            <th>标的物</th>
            <th>最新价</th>
            <th>涨跌</th>
            <th>买价</th>
            <th>卖价</th>
            <th>最高价</th>
            <th>最低价</th>
            <th>成交量</th>
            <th>更新时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>白糖 1705</td>
            <td>6723</td>
            <td>120</td>
            <td>6722</td>
            <td>6723</td>
            <td>6787</td>
            <td>6702</td>
            <td>508614</td>
            <td>16:07:16</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="option-quote-container">
      <table class="table option-quote">
        <thead>
          <tr class="option-type">
            <th class="option-call" colspan="12">看涨期权（Call）</th>
            <th class="option-select">
              <span class="select">
                <select>
                  <option>1703</option>
                  <option>1704</option>
                </select>
              </span>
            </th>
            <th class="option-put" colspan="12">
              看跌期权（Put）
            </th>

          </tr>
          <tr>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
            <th>买价</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
            <td>1.02</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="option-quote-params" v-bind:class="{ hidden: options.params.hidden }">
      <div class="box" title="">

        <div v-for="(item, index) in options.params.names">
          <input type="checkbox" :value="item" v-model="selectedParams"><span>{{ item }}</span></div>
        <div class="tcenter margin5" title="">
          <span class="button btnDefault" title="">恢复默认</span>
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="scss">

  .component-nav {
    background-color: #f0f0f0;
    height: 35px;
    min-height: auto;
  }

  .option-spot table {
    margin-bottom: 1px;
  }

  .option-spot th:hover, .option-quote th:hover {
    background-color: #ccc;
  }

  .option-spot td, .option-spot th, .option-quote td, .option-quote th {
    text-align: center;
  }

  .option-quote .option-type th {
    height: 29px;
    padding: 0;
    vertical-align: middle;
    border-bottom: #ccc 2px solid;
  }

  .option-quote th.option-call {
    background: #7b0c0c;
    color: #ffc2a6;
  }

  .option-quote th.option-put {
    background: #1d5f16;
    color: #caffe0;
  }

  .option-quote th.option-select {
    width:32px;
  }

  .option-quote-params .box {
    display: block;
    position: absolute;
    top: 35px;
    bottom: 0;
    right: 0;
  }


</style>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => {
      return {
        selectedParams: []
      }
    },

    methods: {
      showParams: function () {
        this.$store.commit('TOGGLE_OPTION_QUOTE_PARAMS')
      }
    },
    computed: mapGetters({
      options: 'options'
    })
  }
</script>
