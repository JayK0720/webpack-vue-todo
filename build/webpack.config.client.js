const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueClientPlugin = require('vue-server-renderer/client-plugin');
const defaultPlugins = [
    new HtmlPlugin({
        hash:true,
        minify:{
            removeAttributeQuotes:true
        },
        template:path.join(__dirname,'./template.html')
    }),
    new webpack.DefinePlugin({
        "process.env":{
            NODE_ENV: process.env.NODE_ENV === "development"
                ? " 'development' "
                : " 'production' "
        }
    }),
    new VueClientPlugin()
]
if(process.env.NODE_ENV === "development"){
    config = merge(baseConfig,{
        devtool:'cheap-module-eval-source-map',
        entry:{
            client:path.resolve(__dirname,'../src/client-entry.js')
        },
        output:{
            filename:'[name].bundle.[hash:8].js',
            path:path.resolve(__dirname,'../dist'),
            publicPath:'http://127.0.0.1:8000/assets'
        },
        module:{
            rules:[
                {
                    test:/\.scss/,
                    exclude:/node_modules/,
                    use:[
                        'style-loader',
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options:{sourceMap:true}
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        devServer:{
            port:'8000',
            host:'localhost',
            overlay:{
                errors:true, // 遇到错误时会更新到页面上
                warnings:true
            },
            contentBase:path.resolve(__dirname,'../dist'),
            compress:true,
            hot:true,  // 启动热更新
            open:true,// 会自动打开浏览器
            historyApiFallback:{
                index:'/assets/index.html'
            },
        },
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
}else{
    config = merge(baseConfig,{
        mode:"production",
        entry:{
            app:path.resolve(__dirname,'../src/client-entry.js'),
            vendor:['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js',
            path:path.resolve(__dirname,'../assets'),
            publicPath:'/assets/'
        },
        module:{
            rules:[
                {
                    test:/\.scss$/,
                    use:[
                        MiniCssExtractPlugin.loader,
                        {
                            loader:'css-loader',
                            options:{importLoaders:1}
                        },
                        'sass-loader','postcss-loader'
                    ]
                }
            ]
        },
        optimization:{
            splitChunks:{
                cacheGroups:{
                    commons:{
                        chunks:'initial',
                        name:'vendor',
                        minChunks:2,
                    }
                }
            }
        },
        plugins:defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename:'[name].[contenthash:8].css',
                chunkFilename:'[id].[contenthash:8].css',
            }),
        ])
    })
}
module.exports = config;