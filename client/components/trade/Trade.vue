<template>
  <div>
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
      <div class="column">
        <div class="box">
          <p class="title is-4">成交</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default {
  }
</script>
