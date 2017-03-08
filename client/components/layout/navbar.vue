<template>
  <div>
    <nav class="heron-nav nav">
      <div class="nav-left">
        <a class="nav-item">
            <span class="icon is-large">
              <i class="fa fa-home"></i>
            </span>
        </a>
        <div class="nav-item">
          <a class="button is-medium">期权下单</a>
          <a class="button is-medium">期货下单</a>
        </div>
        <div class="nav-item">
          <a>
              <span class="icon">
                <i class="fa fa-plus"></i>
              </span>
          </a>
        </div>
      </div>

      <div class="nav-center">
        <div class="nav-item">
          Heron-量化交易系统
        </div>
      </div>

      <div class="nav-right">
        <div class="nav-item">
          <a class="button is-loading is-primary"></a>
          <a class="button is-success">
            <span>模拟账号</span>
            <span class="icon">
              <i class="fa fa-caret-down"></i>
            </span>
          </a>
        </div>
        <div class="nav-item">
          <a title="打开设置" @click="showSide">
              <span class="icon is-large">
                <i class="fa fa-cog"></i>
              </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss">
  .heron-nav {
    height: 50px;
    border-bottom: 2px solid #222;
  }

</style>
<script>
  export default {

    methods: {
      showSide: function () {
        this.$store.commit('TOGGLE_SIDEBAR')
      }
    }
  }
</script>
