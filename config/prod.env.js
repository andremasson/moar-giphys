var merge = require('webpack-merge')
var apiConfig = require('./api.prod')

module.exports = merge(apiConfig, {
  NODE_ENV: '"production"'
})
