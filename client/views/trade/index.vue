<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="level is-grouped">
            <p class="level-left title is-4">合约列表</p>
            <div class="level-right tabs is-right is-toggle">
              <ul>
                <li class="is-active"><a>上期所-期权</a></li>
                <li><a>上期所-商品</a></li>
                <li><a>中金所</a></li>
                <li><a>大商所</a></li>
                <li><a>郑商所</a></li>
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

          <table class="table is-narrow is-hidden">
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

          <table class="table is-narrow is-hidden">
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

          <table class="table is-narrow is-hidden">
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

          <table class="table is-narrow is-hidden">
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

    <div class="columns">
      <div class="column is-4">
        <div class="box">
          <p class="title is-4">下单</p>


          <p class="is-6">价格</p>
          <div class="control is-grouped">
            <p class="control">
              <input class="input is-8" type="text" placeholder="输入价格">
            </p>
            <p class="control">
              <span class="select">
                <select>
                  <option>限价</option>
                  <option>限价FOK剩余即撤</option>
                  <option>限价FAK剩余全撤</option>
                  <option>市价</option>
                  <option>市价FAK剩余即撤</option>
                  <option>市价FOK剩余全撤</option>
                </select>
              </span>
             </p>
            </div>

          <p class="is-6">手数</p>
          <p class="control">
            <input class="input" type="text" placeholder="输入手数">
          </p>

          <p class="is-6">方向</p>
          <div class="control is-grouped">
            <p class="control">
              <a class="button is-success">Long</a>
            </p>
            <p class="control">
              <a class="button is-danger">Short</a>
            </p>
            <p class="control">
              <a class="button is-dark">Close</a>
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <p class="title is-4">委托列表/撤单</p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="box">
          <p class="title is-4">持仓合约</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
