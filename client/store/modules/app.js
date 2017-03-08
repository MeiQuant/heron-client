/**
 * Created by alfred on 2017/3/8.
 */
import * as types from '../mutation-types'

const state = {
  sidebar: {
    hidden: true
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state) {
    if (state.sidebar.hidden) {
      state.sidebar.hidden = false
    } else {
      state.sidebar.hidden = true
    }
  }
}

export default {
  state,
  mutations
}
