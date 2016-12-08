<template>
  <div>
    <div class="columns">
      <div class="column is-4">
        <div class="box">
          <p class="title is-4">系统管理</p>
          <p class="subtitle is-6">管理服务器与CTP柜台的通信</p>
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
          <p class="title is-4">系统状态</p>
          <p class="subtitle is-6">服务器当前运行状态</p>
          <p>CPU 15%</p>
          <progress class="progress is-primary" value="15" max="100">15%</progress>
          <p>内存 35%</p>
          <progress class="progress is-info" value="35" max="100">15%</progress>
        </div>

      </div>
      <div class="column">
        <article class="box">
          <p class="title is-4">日志</p>
          <p class="subtitle is-6">系统日志</p>
          <div class="notification" v-for="log of logs">{{log.time}} {{log.content}}</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Socket from 'vue-socket.io'

export default {
  created: () => {
    // 实例创建之后， 建立与服务端的链接
    Vue.use(Socket, 'http://192.168.33.10:5000')
  },

  sockets: {
    log (msg) {
      this.$store.commit('APPEND_LOG', {
        time: msg.time,
        content: msg.content
      })
    }
  },

  computed: {
    logs () {
      // 返回日志数据, 根据类别，处理样式
      return this.$store.state.log.logs
    }
  },

  methods: {

    startService (e) {
      // alert('我要启动服务')
      this.$socket.emit('system_start', {
        // params to server

      })
    },

    stopService (e) {
      this.$socket.emit('system_exit', {
        data: 'exit'
      })
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
