<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="level">
            <p class="level-left title is-4 is-marginless">合约列表</p>
            <exchangeTabs></exchangeTabs>
          </div>

          <futures></futures>
        </div>
      </div>
    </div>

    <trade></trade>

  </div>
</template>

<script>
import { Trade, ExchangeTabs, Futures } from 'components/trade'

export default {

  components: {
    Trade,
    ExchangeTabs,
    Futures
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
