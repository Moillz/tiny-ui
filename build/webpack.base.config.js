/**
 * 公共配置
 */

const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '..', 'src')
}

module.exports = {
  // 加载器
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ],
            scss: [
                'vue-style-loader',
                {
                  loader: 'style-loader',
                  options: {
                      sourceMap: true
                  }
              },
               {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
              },{
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
            ]
        },
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
            sourceMap: true
        },
        exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loaders: [
          {
              loader: 'style-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          {
              loader: '\'autoprefixer-loader\''
          }
      ]
  },
  {
    test: /\.(scss|css)$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
      {
        test: /\.(gif|jpg|png|woff?|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192'
    },
    ]
  }
}
