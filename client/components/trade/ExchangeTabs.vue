<template>
  <div>
    <div class="level-right tabs is-right is-toggle">
      <ul>
        <router-link to="/trade/index" tag="li"><a>全部</a></router-link>
        <router-link to="/trade/sse" tag="li"><a>上交所</a></router-link>
        <router-link to="/trade/shfe" tag="li"><a>上期所</a></router-link>
        <router-link to="/trade/cffex" tag="li"><a>中金所</a></router-link>
        <router-link to="/trade/dce" tag="li"><a>大商所</a></router-link>
        <router-link to="/trade/czce" tag="li"><a>郑商所</a></router-link>
      </ul>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default {
  }
</script>
