'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    // todo： 了解webpack代码分离
    index: path.resolve(__dirname, '../src/index.js'),
    // print: path.resolve(__dirname, '../src/print.js')
    // index: {
    //   import: path.resolve(__dirname, '../src/index.js'),
    //   dependOn: 'shared'
    // },
    // another: {
    //   import: path.resolve(__dirname, '../src/print.js'),
    //   dependOn: 'shared'
    // },
    // shared: 'lodash'
  }, //路径解析

   //source map 有许多 可用选项，请务必仔细阅读它们，以便可以根据需要进行配置。
  devtool: 'inline-source-map', //仅用于示例，不适用于生产环境
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
    //publicPath 如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。
    // 模块热替换
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      title: 'Development'
    }),
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
}