import lazyLoading from './lazyLoading'

export default {
  name: '交易',
  path: '/trade/index',
  meta: {
    icon: 'fa-exchange'
  },
  component: lazyLoading('trade/index')
}
