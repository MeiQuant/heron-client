<template>
  <div>
    <div class="columns">
      <div class="column is-4">
        <div class="box">
          <p class="title">系统管理</p>
          <p class="subtitle">管理服务器与CTP柜台的通信</p>
          <div class="control is-grouped">
            <p class="control">
              <a class="button is-success" @click="startService">启动服务</a>
            </p>
            <p class="control">
              <a class="button is-danger" @click="stopService">关闭服务</a>
            </p>
          </div>
        </div>

        <div class="box">
          <p class="title">系统状态</p>
          <p class="subtitle">服务器当前运行状态</p>
          <p class="h1">CPU 15%</p>
          <progress class="progress is-primary" value="15" max="100">15%</progress>
          <p class="h1">内存 35%</p>
          <progress class="progress is-info" value="35" max="100">15%</progress>
        </div>

      </div>
      <div class="column">
        <article class="box">
          <p class="title">日志</p>
          <p class="subtitle">系统日志</p>
          <div class="notification is-info">{{log.time}} {{log.content}}</div>
          <div class="notification">2016-12-05 17:35:01 链接行情服务器成功</div>
          <div class="notification">2016-12-05 17:35:01 开启自动查询成功</div>
          <div class="notification is-danger">2016-12-05 17:35:01 关闭系统失败</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {VueSocketio as Socket} from 'vue-socket.io'

export default {

  created: () => {
    //实例创建之后， 建立与服务端的链接
    //alert('我被创建了')

    Vue.use(Socket, '');

  },

  computed: {
    log() {
      //返回日志数据, 根据类别，处理样式
      return this.$store.state.logs[0]
    }
  },

  methods: {

    startService (e) {
      // alert('我要启动服务')
    },

    stopService (e) {
      alert('小哥，把服务关掉')
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
