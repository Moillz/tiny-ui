'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  // 入口
  entry: {
    main: './examples/main',
    vendors: ['vue']
  }, //路径解析

   //source map 有许多 可用选项，请务必仔细阅读它们，以便可以根据需要进行配置。
  devtool: 'inline-source-map', //仅用于示例，不适用于生产环境
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    disableHostCheck: true
    //publicPath 如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。
    // 模块热替换
  },
  plugins: [
    // new config.optimization.splitChunks({
    //   name: 'vendors',
    //   filename: 'vendor.bundle.js'
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/index.html')
    }),
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  }
}) 
