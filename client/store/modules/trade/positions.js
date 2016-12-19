/**
 * Created by alfred on 2016/12/11.
 */

import { UPDATE_POSITION } from '../../mutation-types'

const state = {}

const mutations = {

  [UPDATE_POSITION] (state, data) {
    const symbol = data.symbol
    state[symbol] = data
  }
}

export default {
  state,
  mutations
}
