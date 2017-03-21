/**
 * Created by alfred on 2017/3/9.
 */

export default {

  params: {
    exchanges: {
      SSE: {
        name: '上海证券交易所',
        instruments: {
          OP510050: {
            name: '50ETF',
            months: [1703, 1704, 1706, 1709],
            spots: [
              {
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              },
              {
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              },
              {
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              },
              {
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              }
            ]
          }
        }
      },
      SHFE: {
        name: '上海期货交易所'
      },
      DCE: {
        name: '大连商品交易所'
      },
      CZCE: {
        name: '郑州商品交易所',
        instruments: {
          SR: {
            name: '白糖期权',
            months: [1705, 1707, 1709, 1711, 1801, 1803, 1805, 1807],
            spots: [
              {
                name: '白糖 1705',
                symbol: 'SR1705',
                url: 'quote/futures/CZCE/SR1705'
              },
              {
                name: '白糖 1707',
                symbol: 'SR1707',
                url: 'quote/futures/CZCE/SR1707'
              },
              {
                name: '白糖 1709',
                symbol: 'SR1709',
                url: 'quote/futures/CZCE/SR1709'
              },
              {
                name: '白糖 1711',
                symbol: 'SR1711',
                url: 'quote/futures/CZCE/SR1711'
              },
              {
                name: '白糖 1801',
                symbol: 'SR1801',
                url: 'quote/futures/CZCE/SR1801'
              },
              {
                name: '白糖 1805',
                symbol: 'SR1805',
                url: 'quote/futures/CZCE/SR1807'
              },
              {
                name: '白糖 1807',
                symbol: 'SR1807',
                url: 'quote/futures/CZCE/SR1807'
              }
            ]
          }
        }
      },
      CFFEX: {
        name: '中国金融交易所'
      }
    },

    selected: {
      names: [
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
      keys: []
    },

    names: [
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
    keys: [
      'askPrice'
    ],
    hidden: true
  }
}
