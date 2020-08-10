const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const VueClientPlugin = require('vue-server-renderer/client-plugin.js');

module.exports = {
    target:'web',
    devtool:'source-map',
    entry:{
        client:path.join(__dirname,'../src/client-entry.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'../dist')
    },
    resolve:{
        extensions:['.vue','.js'],
        modules:[path.join(__dirname,'../src'),'node_modules'],
        alias:{
            'imgs':path.resolve(__dirname,'../src/imgs')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            'presets':['@babel/preset-env']
                        }
                    }
                ],
                exclude:file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test:/\.vue/,
                use:{
                    loader:'vue-loader',
                    options:{
                        extractCSS:process.env.NODE_ENV === 'production'
                    }
                }
            },
            {
                test:/\.scss$/,
                use:[
                    process.env.NODE_ENV === 'development'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader
                    ,
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                            sourceMap:true
                        }
                    },
                    'postcss-loader','sass-loader'
                ]
            },
            {
                test:/\.(jpg|jpeg|png|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024*20,
                            esModule:false
                        }
                    },
                    {
                        loader:'file-loader',
                        options:{
                            esModule:false,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(html|htm)$/,
                use:['html-loader']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'./index.template.html'),
            hash:true,
            minify:{
                removeAttributeQuotes:true
            },
            title:'vue-server-render-demo'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        }),
        new VueLoaderPlugin(),
        new VueClientPlugin()
    ],
    devServer:{
        host:'0.0.0.0',
        port:"3000",
        hot:true,
        open:true,
        overlay:{
            errors:true,
            warnings:true
        },
        contentBase:path.join(__dirname,'../dist'),
        compress:true,
        historyApiFallback:true
    }
}