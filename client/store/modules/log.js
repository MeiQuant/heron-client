/**
 * Created by alfred on 2016/12/7.
 */

import { APPEND_LOG } from '../mutation-types'

const state = {
  logs: []
}

const mutations = {
  [APPEND_LOG] (state, log) {
    state.logs.push(log)
  }
}

export default {
  state,
  mutations
}
