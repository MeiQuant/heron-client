/**
 * Created by alfred on 2017/3/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import options from './modules/options/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    app,
    options
  },
  mutations: {
  }
})

export default store
