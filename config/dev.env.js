var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var apiConfig = require('./api.prod')

module.exports = merge(prodEnv, apiConfig, {
  NODE_ENV: '"development"'
})
