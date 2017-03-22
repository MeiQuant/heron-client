/**
 * Created by alfred on 2017/3/9.
 */

export default {

  spot: [],
  quotes: [],
  params: {
    // 由服务端返回，如果没有期权合约的就不要返回了
    exchanges: [
      {
        name: '上海证券交易所',
        instruments: [
          {
            name: '50ETF',
            months: [
              {
                month: 1703,
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              },
              {
                month: 1704,
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              },
              {
                month: 1706,
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
              },
              {
                month: 1709,
                name: '50ETF',
                symbol: '510050',
                url: 'quote/stocks/SSE/510050'
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
            months: [
              {
                month: 1705,
                name: '豆粕 1705',
                symbol: 'M1705',
                url: 'quote/futures/DCE/M1705'
              },
              {
                month: 1707,
                name: '豆粕 1707',
                symbol: 'M1707',
                url: 'quote/futures/DCE/M1707'
              },
              {
                month: 1709,
                name: '豆粕 1709',
                symbol: 'M1709',
                url: 'quote/futures/DCE/M1709'
              },
              {
                month: 1711,
                name: '豆粕 1711',
                symbol: 'M1711',
                url: 'quote/futures/DCE/M1711'
              },
              {
                month: 1801,
                name: '豆粕 1801',
                symbol: 'M1801',
                url: 'quote/futures/DCE/M1801'
              },
              {
                month: 1802,
                name: '豆粕 1802',
                symbol: 'M1805',
                url: 'quote/futures/DCE/M1807'
              },
              {
                month: 1803,
                name: '豆粕 1803',
                symbol: 'M1807',
                url: 'quote/futures/DCE/M1807'
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
            months: [
              {
                month: 1705,
                name: '白糖 1705',
                symbol: 'SR1705',
                url: 'quote/futures/CZCE/SR1705'
              },
              {
                month: 1707,
                name: '白糖 1707',
                symbol: 'SR1707',
                url: 'quote/futures/CZCE/SR1707'
              },
              {
                month: 1709,
                name: '白糖 1709',
                symbol: 'SR1709',
                url: 'quote/futures/CZCE/SR1709'
              },
              {
                month: 1711,
                name: '白糖 1711',
                symbol: 'SR1711',
                url: 'quote/futures/CZCE/SR1711'
              },
              {
                month: 1801,
                name: '白糖 1801',
                symbol: 'SR1801',
                url: 'quote/futures/CZCE/SR1801'
              },
              {
                month: 1805,
                name: '白糖 1805',
                symbol: 'SR1805',
                url: 'quote/futures/CZCE/SR1807'
              },
              {
                month: 1807,
                name: '白糖 1807',
                symbol: 'SR1807',
                url: 'quote/futures/CZCE/SR1807'
              }
            ]
          }
        ]
      },
      {
        name: '中国金融交易所'
      }
    ],

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
