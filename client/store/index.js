import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'development',
  actions,
  getters,
  modules: {
    app,
    menu
  },
  state: {
    pkg,
    logs: [
      {
        time: '2016-12-05 19:17:01:55',
        content: '服务启动成功， 这条消息来自store'
      }
    ]
  },
  mutations: {
  }
})

export default store
