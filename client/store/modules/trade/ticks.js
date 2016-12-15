/**
 * Created by alfred on 2016/12/11.
 */

import { UPDATE_TICK, INIT_TICKS } from '../../mutation-types'

const state = {
  ticks: {},
  SSE: {},
  SHFE: {},
  CFFEX: {},
  DCE: {},
  CZCE: {}
}

const mutations = {

  [UPDATE_TICK] (state, data) {
    // 更新至相应的store

    const symbol = data.symbol
    const exchange = data.exchange
    // exchange为空，则不分exchange存放
    if (exchange !== 'UNKNOWN' && exchange in state) {
      state[exchange][symbol] = data
    }

    state.ticks[symbol] = data
    // console.log(state)
  },

  [INIT_TICKS] (state, data) {

  }

}

const actions = {
  update_tick ({ commit }, data) {
    setTimeout(() => {
      commit(UPDATE_TICK, data)
    }, 0)
  }
}

export default {
  state,
  mutations,
  actions
}
