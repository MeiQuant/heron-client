import lazyLoading from './lazyLoading'

export default {
  name: '行情',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false
  },

  children: [
    {
      name: '上期所',
      path: '/markets/basic',
      component: lazyLoading('markets/Basic')
    },
    {
      name: '中金所',
      path: '/markets/basic',
      component: lazyLoading('markets/Basic')
    },
    {
      name: '郑商所',
      path: '/markets/basic',
      component: lazyLoading('markets/Basic')
    },
    {
      name: '大商所',
      path: '/markets/basic',
      component: lazyLoading('markets/Basic')
    }
  ]
}
