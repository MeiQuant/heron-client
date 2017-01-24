/**
 * Created by alfred on 2016/12/11.
 */

import { UPDATE_ACCOUNT } from '../../mutation-types'

const state = {}

const mutations = {

  [UPDATE_ACCOUNT] (state, data) {
    Object.assign(state, data)
  }
}

export default {
  state,
  mutations
}
/**
 * Created by alfred on 2016/12/30.
 */
