const merge = require('webpack-merge')
const base = require('./webpack.base')
const uglifyjs = require('uglifyjs-webpack-plugin')
const Webpack = require('webpack')
module.exports = merge(base,{
  mode: "production",
  devtool: 'source-map',
  plugins: [
    new uglifyjs({
      sourceMap: true
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})