/**
 * Created by alfred on 2017/3/9.
 */

export default {

  spot: [6723, 120, 6722, 6723, 6787, 6702, 508614, '16:07:16'],
  quotes: [
    {
      strike: 2600,
      call: [1, 2, 3, 4, 5, 6, 7, 8],
      put: []
    },
    {
      strike: 2600,
      call: [],
      put: []
    },
    {
      strike: 2600,
      call: [],
      put: []
    },
    {
      strike: 2600,
      call: [],
      put: []
    },
    {
      strike: 2600,
      call: [],
      put: []
    },
    {
      strike: 2600,
      call: [],
      put: []
    }
  ],
  // 由服务端返回，如果没有期权合约的就不要返回了
  exchanges: [
    {
      name: '上海证券交易所',
      symbol: 'SSE',
      instruments: [
        {
          name: '50ETF',
          symbol: '510050',
          months: [
            {
              name: 1703,
              symbol: '1703',
              spot: {
                name: '50ETF',
                symbol: '510050'
              }
            },
            {
              name: 1704,
              symbol: '1704',
              spot: {
                name: '50ETF',
                symbol: '510050'
              }
            },
            {
              name: 1706,
              symbol: '1706',
              spot: {
                name: '50ETF',
                symbol: '510050'
              }
            },
            {
              name: 1709,
              symbol: '1709',
              spot: {
                name: '50ETF',
                symbol: '510050'
              }
            }
          ]
        }
      ]
    },
    {
      name: '上海期货交易所'
    },
    {
      name: '大连商品交易所',
      instruments: [
        {
          name: '豆粕期权',
          symbol: 'M',
          months: [
            {
              name: 1705,
              symbol: '1705',
              spot: {
                name: '豆粕 1705',
                symbol: 'M'
              }
            },
            {
              name: 1708,
              symbol: '1708',
              spot: {
                name: '豆粕 1705',
                symbol: 'M'
              }
            },
            {
              name: 1709,
              symbol: '1709',
              spot: {
                name: '豆粕 1709',
                symbol: 'M'
              }
            },
            {
              name: 1712,
              symbol: '1712',
              spot: {
                name: '豆粕 1712',
                symbol: 'M'
              }
            },
            {
              name: 1801,
              symbol: '1801',
              spot: {
                name: '豆粕 1801',
                symbol: 'M'
              }
            },
            {
              name: 1803,
              symbol: '1803',
              spot: {
                name: '豆粕 1803',
                symbol: 'M'
              }
            },
            {
              name: 1805,
              symbol: '1805',
              spot: {
                name: '豆粕 1805',
                symbol: 'M'
              }
            }
          ]
        }
      ]
    },
    {
      name: '郑州商品交易所',
      instruments: [
        {
          name: '白糖期权',
          symbol: 'SR',
          months: [
            {
              name: 1705,
              symbol: '1705',
              spot: {
                name: '白糖 1705',
                symbol: 'SR'
              }
            },
            {
              name: 1708,
              symbol: '1708',
              spot: {
                name: '白糖 1705',
                symbol: 'SR'
              }
            },
            {
              name: 1709,
              symbol: '1705',
              spot: {
                name: '白糖 1705',
                symbol: 'SR'
              }
            },
            {
              name: 1712,
              symbol: '1705',
              spot: {
                name: '白糖 1705',
                symbol: 'SR'
              }
            }
          ]
        }
      ]
    },
    {
      name: '中国金融交易所'
    }
  ],
  params: {
    default: [
      '买价',
      '卖价',
      '最新价',
      '成交量',
      '现量',
      '隐波率',
      '涨跌',
      '涨跌幅',
      'Delta',
      'Gamma',
      'Vega',
      '理论价',
      '时间价值',
      '更新时间',
      '昨结算',
      '昨收盘',
      '买量',
      '卖量',
      '最高价',
      '最低价',
      '涨停价',
      '跌停价',
      '持仓量',
      '昨持仓'
    ],
    selected: [],
    keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    hidden: true
  }
}
