/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // 加载器
    module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                            }
                        ],
                        scss: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',

                            },
                            {
                                loader: 'sass-loader',
                            }
                        ]
                    },
                    postLoaders: {
                        html: 'babel-loader?sourceMap'
                    },
                    sourceMap: true
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
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: '\'autoprefixer-loader\''
                    }
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.VERSION': `'${pkg.version}'`
        // }),
        new VueLoaderPlugin()
    ]
};
