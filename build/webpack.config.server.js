const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const VueServerPlugin = require('vue-server-renderer/server-plugin.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = merge(baseConfig,{
    target:'node',
    devtool:'cheap-module-eval-source-map',
    entry:{
        server:path.join(__dirname,'../src/server-entry.js'),
    },
    output:{
        libraryTarget:'commonjs2',
        filename:'[name].bundle.js',
        path:path.join(__dirname,'../dist')
    },
    externals:Object.keys( require("../package.json")['dependencies'] ),
    resolve:{
        extensions:['.vue','.js']
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    process.env.NODE_ENV === 'development'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{importLoaders:1},
                    },
                    "postcss-loader",'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:isDevelopment ? '[name].css' : '[name].[contenthash:8].css',
            chunkFilename:isDevelopment ? '[id].css' : '[id].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:process.env.NODE_ENV === 'development'
                    ? '"development"'
                    : ' "production" '
            },
        }),
    ]
});
