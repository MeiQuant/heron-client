<template>
  <div>
    <div class="columns">
      <div class="column is-4">
        <div class="box">
          <p class="title">系统管理</p>
          <p class="subtitle">管理服务器与CTP柜台的通信</p>
          <div class="control is-grouped">
            <p class="control">
              <a class="button is-success">启动服务</a>
            </p>
            <p class="control">
              <a class="button is-danger">关闭服务</a>
            </p>
          </div>
        </div>

        <div class="box">
          <p class="title">系统状态</p>
          <p class="subtitle">服务器当前运行状态</p>
          <p class="h1">CPU</p>
          <progress class="progress is-primary" value="15" max="100">15%</progress>
          <p class="h1">内存</p>
          <progress class="progress is-info" value="35" max="100">15%</progress>
        </div>

      </div>
      <div class="column">
        <article class="box">
          <p class="title">日志</p>
          <p class="subtitle">系统日志</p>
          <div class="notification is-info">2016-12-05 17:35:01 系统启动成功</div>
          <div class="notification">2016-12-05 17:35:01 链接行情服务器成功</div>
          <div class="notification">2016-12-05 17:35:01 开启自动查询成功</div>
          <div class="notification is-danger">2016-12-05 17:35:01 关闭系统失败</div>
        </article>
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
