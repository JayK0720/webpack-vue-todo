const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === "development";

const config = {
    target:"web",
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:ExtractTextPlugin.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                importLoaders:1,
                                sourceMap:true
                            }
                        },
                        {loader:'sass-loader'},
                        {loader:'postcss-loader',}],
                    fallback:"style-loader"
                })
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            "presets":["@babel/env"]
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlPlugin({
            hash:true,
            minify:{removeAttributeQuotes:true},
        }),
        new ExtractTextPlugin({
            filename:'style.css'
        }),
        new webpack.DefinePlugin({
            "process.env": isDev ? '"development"' : '"production"'
        })
    ]
}

if(process.env.NODE_ENV === 'development'){
    config.devtool = "#cheap-module-eval-source-map";
    config.devServer = {
        port:'9090',
        host:'0.0.0.0',
        overlay:{
            errors:true // 遇到错误时会更新到页面上
        },
        contentBase:path.resolve(__dirname,'dist'),
        compress:true,
        hot:true,  // 启动热更新
        open:true,// 会自动打开浏览器
    },
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config;