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
              <input class="input" type="text" v-model="frontServer.address" :disabled="!modifyEnable.frontServer" placeholder="前置服务器地址">
            </div>
            <div class="column">
              <p class="is-6">端口</p>
              <input class="input" type="number" v-model="frontServer.port" :disabled="!modifyEnable.frontServer" placeholder="端口">
            </div>
          </div>
          <div class="control">
            <a class="button is-primary" :class="[modifyEnable.frontServer ? 'is-hidden' : '']" @click="modify_enable('frontServer')">修改</a>
            <a class="button is-info" :class="[modifyEnable.frontServer ? '' : 'is-hidden']" @click="modify_confirm('frontServer')">确认</a>
          </div>
        </div>

        <div class="box">
          <p class="title is-4">CTP柜台服务器地址</p>
          <p class="subtitle is-6">配置柜台服务器地址</p>
          <div class="columns">
            <div class="column is-8">
              <p class="is-6">行情服务器</p>
              <input class="input is-8" type="text" v-model="ctp.mdAddress" :disabled="!modifyEnable.ctp" placeholder="行情服务器地址">
              <p>&nbsp;</p>
              <p class="is-6">交易服务器</p>
              <input class="input is-8" type="text" v-model="ctp.tdAddress" :disabled="!modifyEnable.ctp" placeholder="交易服务器地址">
            </div>
            <div class="column">
              <p class="is-6">端口</p>
              <input class="input is-4" type="number" v-model="ctp.mdPort" :disabled="!modifyEnable.ctp" placeholder="端口">
              <p>&nbsp;</p>
              <p class="is-6">端口</p>
              <input class="input is-4" type="number" v-model="ctp.tdPort" :disabled="!modifyEnable.ctp" placeholder="端口">
            </div>
          </div>
          <div class="control">
            <a class="button is-primary" :class="[modifyEnable.ctp ? 'is-hidden' : '']" @click="modify_enable('ctp')">修改</a>
            <a class="button is-info" :class="[modifyEnable.ctp ? '' : 'is-hidden']" @click="modify_confirm('ctp')">确认</a>
          </div>
        </div>

        <div class="box">
          <p class="title is-4">经纪商信息</p>
          <p class="subtitle is-6">经纪商</p>
          <div class="columns">
            <div class="column is-4">
              <p class="is-6">BrokerID</p>
              <input class="input" type="number" v-model="broker.brokerID" :disabled="!modifyEnable.broker" placeholder="经纪商ID">
            </div>
            <div class="column">
              <p class="is-6">用户名</p>
              <input class="input" type="number" v-model="broker.userID" :disabled="!modifyEnable.broker" placeholder="用户ID">
            </div>
            <div class="column">
              <p class="is-6">密码</p>
              <input class="input" type="password" v-model="broker.password" :disabled="!modifyEnable.broker" placeholder="密码">
            </div>
          </div>
          <div class="control">
            <a class="button is-primary" :class="[modifyEnable.broker ? 'is-hidden' : '']"  @click="modify_enable('broker')">修改</a>
            <a class="button is-info" :class="[modifyEnable.broker ? '' : 'is-hidden']"  @click="modify_confirm('broker')">确认</a>
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

Vue.use(Socket)

export default {

  created () {
    // 读取配置

    const frontServer = JSON.parse(window.localStorage.getItem('config_frontServer'))
    const ctp = JSON.parse(window.localStorage.getItem('config_ctp'))
    const broker = JSON.parse(window.localStorage.getItem('config_broker'))

    if (frontServer && (Object.keys(frontServer)).length > 0) {
      this.$data.frontServer = frontServer
    }

    if (ctp && (Object.keys(ctp)).length > 0) {
      this.$data.ctp = ctp
    }

    if (broker && (Object.keys(broker)).length > 0) {
      this.$data.broker = broker
    }

    // 建立与服务端的链接
    if (this.$data.frontServer.address) {
      this.socket = this.$socket(this.$data.frontServer.address + '/system')
    } else {
      this.$store.commit('APPEND_LOG', {
        time: '',
        content: '请配置前置服务器地址',
        isError: true
      })
      this.$data.modifyEnable.frontServer = true
    }

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

  data () {
    return {
      frontServer: {
        key: 'frontServer',
        address: 'http://192.168.33.10',
        port: 5000
      },
      ctp: {
        key: 'ctp',
        tdAddress: 'tcp://180.168.146.187',
        tdPort: 10000,
        mdAddress: 'tcp://180.168.146.187',
        mdPort: 10010
      },
      broker: {
        key: 'broker',
        brokerID: '9999',
        userID: '074047',
        password: '123456'
      },
      modifyEnable: {
        frontServer: false,
        ctp: false,
        broker: false
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
      // todo 连接前置服务器
      // todo 校验柜台服务器地址
      this.socket.emit('system_start')
    },

    stopService (e) {
      this.socket.emit('system_exit')
    },

    modify_enable (key) {
      this.$data.modifyEnable[key] = true
    },
    modify_confirm (key) {
      // 地址校验
      const frontServer = this.$data[key]

      // 持久化
      window.localStorage.setItem('config_' + key, JSON.stringify(frontServer))

      // 重新连接
      this.socket = this.$socket(this.$data.frontServer.address + '/system')

      this.$data.modifyEnable[key] = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
