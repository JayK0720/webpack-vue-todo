const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueClientPlugin = require('vue-server-renderer/client-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry:{
        client:path.join(__dirname,'../src/client-entry.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options:{
                            hmr:isDevelopment
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                            sourceMap:true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                    ,'postcss-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            'presets':['@babel/preset-env']
                        }
                    }
                ],
                // 为了确保js的转译应用到node_modules的Vue单文件组件,需要通过使用一个排除函数将它们加入白名单
                exclude:file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test:/\.(jpg|jpeg|png|svg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            filename:'[name].[ext]',
                            esModule:false
                        }
                    },
                    {
                        loader:'url-loader',
                        options:{
                            limit:538*1024
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:isDevelopment ? '[name].css' : '[name].[contenthash:8].css',
            chunkFilename:isDevelopment ? '[id].css' : '[id].[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            hash:true,
            title:'vue-ssr-demo',
            filename:'index.html',
            template:path.join(__dirname,'../src/index.template.html')
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: process.env.NODE_ENV === 'development'
                    ? ' "development" '
                    : ' "production" '
            }
        }),
        new VueClientPlugin()
    ],
    resolve:{
        extensions:['.vue','.js'],
        modules:[path.resolve(__dirname,'src'),'node_modules']
    },
    devServer:{
        host:'localhost',
        port:'3000',
        hot:true,
        open:true,
        historyApiFallback:true,
        contentBase:path.join(__dirname,'../dist'),
        compress:true,
        overlay:{
            errors:true,
            warnings:true
        }
    }
}


