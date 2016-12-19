/**
 * Created by alfred on 2016/12/11.
 */
import { UPDATE_ORDER } from '../../mutation-types'

const state = {}

const mutations = {

  [UPDATE_ORDER] (state, data) {
    const orderID = '_' + data.orderID
    state[orderID] = data
  }
}

export default {
  state,
  mutations
}
