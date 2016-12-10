import lazyLoading from './lazyLoading'

export default {
  name: '交易',
  path: '/trade/sse',
  meta: {
    icon: 'fa-exchange'
  },
  component: lazyLoading('trade/sse')
}
