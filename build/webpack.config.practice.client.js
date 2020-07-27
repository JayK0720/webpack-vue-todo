const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target:'web',
    devtool:"inline-source-map",
    entry:path.join(__dirname,'../practice/program/entry-client.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'../program')
    },
    module:{
        rules:[{
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            "presets":['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader: process.env.NODE_ENV === 'development'
                            ? 'vue-style-loader'
                            : MiniCssExtractPlugin.loader,
                        options:{
                            hmr:process.env.NODE_ENV === 'development'
                        }
                    },

                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1
                        }
                    },
                    "sass-loader",'postcss-loader'
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
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            hash:true,
            minify:{
                removeAttributeQuotes:true
            },
            template:path.join(__dirname,'./template.html'),
            title:'vue-program',
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:process.env.NODE_ENV === 'development'
                    ? '"development"'
                    :'"production"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        host:'localhost',
        port:"9090",
        hot:true,
        compress:true,
        overlay:{
            errors:true
        },
        contentBase:path.join(__dirname,'../program')
    }
}