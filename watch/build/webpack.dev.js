const merge = require('webpack-merge')
const base = require('./webpack.base')
module.exports = merge(base,{
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: '../dist',
    hot: true,
    port: 8080
  }
})