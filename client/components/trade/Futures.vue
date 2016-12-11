<template>
  <div>
    <table class="table is-narrow">
      <thead>
      <tr>
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
        <tr>
          <td>{{contract.name}}</td>
          <td>{{contract.symbol}}</td>
          <td>{{contract.size}}</td>
          <td @click="testProps">{{exchange}}</td>
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

    computed: {
      contract () {
        return {
          name: '合约中文名',
          symbol: '合约代码',
          size: '合约大小'
        }
      }
    },

    methods: {

      testProps () {
        console.log(this.$options.propsData['exchange'])
      }

    }

  }
</script>
