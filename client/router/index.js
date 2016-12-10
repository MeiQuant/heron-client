import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: require('../views/Home')
    },
    {
      name: '交易/上期所',
      path: '/trade/shfe',
      component: require('../views/trade/shfe')
    },
    {
      name: '交易/中金所',
      path: '/trade/cffex',
      component: require('../views/trade/cffex')
    },
    {
      name: '交易/大商所',
      path: '/trade/dce',
      component: require('../views/trade/dce')
    },
    {
      name: '交易/郑商所',
      path: '/trade/czce',
      component: require('../views/trade/czce')
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (item.children && item.children.length > 0) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
