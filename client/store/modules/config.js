/**
 * Created by alfred on 2016/12/20.
 */

import { UPDATE_CONFIG } from '../mutation-types'

const state = {
  frontServer: {},
  ctp: {},
  broker: {}
}

const mutations = {
  [UPDATE_CONFIG] (state, data) {
    const key = data.key
    Object.assign(state[key], data)
  }
}

export default {
  state,
  mutations
}
