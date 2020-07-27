const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueClientPlugin = require('vue-server-renderer/client-plugin');
let config;

const defaultPlugins = [
    new HtmlPlugin({
        hash:true,
        minify:{
            removeAttributeQuotes:true
        },
        title:"webpack-vue-todo",
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
        module:{
            rules:[
                {
                    test:/\.scss/,
                    exclude:/node_modules/,
                    use:[
                        {
                            loader:'vue-style-loader',
                        },
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        devServer:{
            port:'9000',
            host:'0.0.0.0',
            overlay:{
                errors:true // 遇到错误时会更新到页面上
            },
            contentBase:path.resolve(__dirname,'../dist'),
            compress:true,
            hot:true,  // 启动热更新
            open:true,// 会自动打开浏览器
            historyApiFallback:true
        },
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
}else{
    config = merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../src/client-entry.js'),
            vendor:['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js',
            path:path.join(__dirname,'../dist')
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
            new MiniCssExtractPlugin(),
        ])
    })
}
module.exports = config;