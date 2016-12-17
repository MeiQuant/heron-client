<template>
  <div>
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
</template>
<style>

</style>
<script>
  export default {
    props: ['exchange']

  }
</script>
