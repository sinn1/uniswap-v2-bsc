
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uniswap-v2-bsc.cjs.production.min.js')
} else {
  module.exports = require('./uniswap-v2-bsc.cjs.development.js')
}
