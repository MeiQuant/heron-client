import lazyLoading from './lazyLoading'

export default {
  name: '交易',
  meta: {
    icon: 'fa-exchange',
    expanded: true
  },
  children: [
    {
      name: 'SSE',
      path: '/trade/sse',
      component: lazyLoading('trade/sse')
    },
    {
      name: 'SHFE',
      path: '/trade/shfe',
      component: lazyLoading('trade/shfe')
    },
    {
      name: 'CFFEX',
      path: '/trade/cffex',
      component: lazyLoading('trade/cffex')
    },
    {
      name: 'DCE',
      path: '/trade/dce',
      component: lazyLoading('trade/dce')
    },
    {
      name: 'CZCE',
      path: '/trade/czce',
      component: lazyLoading('trade/czce')
    }
  ]
}
