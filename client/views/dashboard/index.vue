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

        <div class="box">
          <p class="title is-4">前置服务器地址</p>
          <p class="subtitle is-6">配置前置服务器地址</p>
          <div class="columns">
            <div class="column is-8">
              <p class="is-6">地址</p>
              <input class="input" type="text" v-model="frontServer.address" disabled placeholder="前置服务器地址">
            </div>
            <div class="column">
              <p class="is-6">端口</p>
              <input class="input" type="number" v-model="frontServer.port" disabled placeholder="端口">
            </div>
          </div>
          <div class="control is-grouped">
            <div class="control">
              <a class="button is-primary">修改</a>
            </div>
            <div class="control">
              <a class="button is-info">确认</a>
            </div>
          </div>
        </div>

        <div class="box">
          <p class="title is-4">柜台服务器地址</p>
          <p class="subtitle is-6">配置柜台服务器地址</p>
          <div class="columns">
            <div class="column is-8">
              <p class="is-6">行情服务器</p>
              <input class="input is-8" type="text" v-model="ctp.mdAddress" disabled placeholder="行情服务器地址">
              <p>&nbsp;</p>
              <p class="is-6">交易服务器</p>
              <input class="input is-8" type="text" v-model="ctp.tdAddress" disabled placeholder="交易服务器地址">
            </div>
            <div class="column">
              <p class="is-6">端口</p>
              <input class="input is-4" type="number" v-model="ctp.mdPort" disabled placeholder="端口">
              <p>&nbsp;</p>
              <p class="is-6">端口</p>
              <input class="input is-4" type="number" v-model="ctp.tdPort" disabled placeholder="端口">
            </div>
          </div>
          <div class="control is-grouped">
            <div class="control">
              <a class="button is-primary">修改</a>
            </div>
            <div class="control">
              <a class="button is-info">确认</a>
            </div>
          </div>
        </div>

        <div class="box">
          <p class="title is-4">经纪商信息</p>
          <p class="subtitle is-6">经纪商</p>
          <div class="columns">
            <div class="column is-4">
              <p class="is-6">BrokerID</p>
              <input class="input" type="number" v-model="broker.brokerID" disabled placeholder="经纪商ID">
            </div>
            <div class="column">
              <p class="is-6">用户名</p>
              <input class="input" type="number" v-model="broker.userID" disabled placeholder="用户ID">
            </div>
            <div class="column">
              <p class="is-6">密码</p>
              <input class="input" type="password" v-model="broker.password" disabled placeholder="密码">
            </div>
          </div>
          <div class="control is-grouped">
            <div class="control">
              <a class="button is-primary">修改</a>
            </div>
            <div class="control">
              <a class="button is-info">确认</a>
            </div>
          </div>
        </div>

      </div>
      <div class="column">
        <article class="box">
          <p class="title is-4">日志</p>
          <p class="subtitle is-6">系统日志</p>
          <template v-for="log of logs">

            <template v-if="log.isError">
              <div class="notification is-danger">
                {{log.time}} {{log.content}}
              </div>
            </template>
            <template v-else>
              <div class="notification">
                {{log.time}} {{log.content}}
              </div>
            </template>
          </template>

        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Socket from 'vue-socket.io-meiquant'
import Storage from 'vue-localstorage'

Vue.use(Socket)
Vue.use(Storage)

export default {

  created () {
    // 建立与服务端的链接
    this.socket = this.$socket('http://192.168.33.10:5000/system')
    var _this = this
    window.setInterval(function () {
      _this.$forceUpdate()
    }, 2000)
  },

  sockets: {
    log (msg) {
      msg.time && this.$store.commit('APPEND_LOG', {
        time: msg.time,
        content: msg.content
      })

      msg.errorTime && this.$store.commit('APPEND_LOG', {
        time: msg.errorTime,
        content: msg.errorMsg,
        isError: true
      })
    }
  },

  localStorage: {
    frontServer: {
      address: 'http://192.168.33.10',
      port: 5000
    },
    ctp: {
      tdAddress: 'tcp://180.168.146.187',
      tdPort: 10000,
      mdAddress: 'tcp://180.168.146.187',
      mdPort: 10010
    },
    broker: {
      brokerID: '9999',
      userID: '074047',
      password: '123456'
    }
  },

  data () {
    return {
      frontServer: {
        address: 'http://192.168.33.10',
        port: 5000
      },
      ctp: {
        tdAddress: 'tcp://180.168.146.187:10000',
        tdPort: 10000,
        mdAddress: 'tcp://180.168.146.187:10010',
        mdPort: 10010
      },
      broker: {
        brokerID: '9999',
        userID: '074047',
        password: '123456'
      }
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
      this.socket.emit('system_start')
    },

    stopService (e) {
      this.socket.emit('system_exit')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
