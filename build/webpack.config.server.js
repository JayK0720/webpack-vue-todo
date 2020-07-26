const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const VueServerPlugin = require('vue-server-renderer/server-plugin.js');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const webpack = require('webpack');

let config = merge(baseConfig,{
    target:'node',
    devtool:'cheap-module-eval-source-map',
    mode:'development',
    entry:path.join(__dirname,'../src/entry-server.js'),
    output:{
        libraryTarget:'commonjs2',
        filename:'bundle_server.js',
        path:path.join(__dirname,'../server-bundle')
    },
    externals:Object.keys( require("../package.json")['dependencies'] ),
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    ExtractCssChunksPlugin.loader,
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
        new ExtractCssChunksPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify(process.env.NODE_ENV || 'development'),
            "process.env.VUE_ENV":"'server'"
        }),
        new VueServerPlugin()
    ]
});

module.exports = config;