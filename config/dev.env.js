'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  REMOTE_SERVER: '192.168.33.10',
  REMOTE_PORT: '5000'
})
