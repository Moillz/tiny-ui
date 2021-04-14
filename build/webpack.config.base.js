'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // todo： 了解webpack代码分离
    index: path.resolve(__dirname, '../src/index.js'),
    print: path.resolve(__dirname, '../src/print.js')
  }, //路径解析

   //source map 有许多 可用选项，请务必仔细阅读它们，以便可以根据需要进行配置。
  devtool: 'inline-source-map', //仅用于示例，不适用于生产环境
  devServer: {
    contentBase: './dist'
    //publicPath 如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。
    // 模块热替换
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'jjj'
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    clean: true
  }
}