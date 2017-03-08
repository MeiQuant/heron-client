/**
 * Created by alfred on 2017/3/8.
 */
import * as types from './mutation-types'

export const toggleSidebar = ({ commit }, hidden) => commit(types.TOGGLE_SIDEBAR, hidden)
