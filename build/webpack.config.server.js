const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const VueServerPlugin = require('vue-server-renderer/server-plugin.js');
const webpack = require('webpack');

module.exports = merge(baseConfig,{
    mode:'development',
    target:'node',
    devtool:'cheap-module-eval-source-map',
    entry:{
        server:path.resolve(__dirname,'../src/server-entry.js'),
    },
    output:{
        libraryTarget:'commonjs2',
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'../dist')
    },
    externals:Object.keys( require("../package.json")['dependencies'] ),
    resolve:{
        extensions:['.vue','.js'],
        modules:[path.resolve('src'),'node_modules']
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'vue-style-loader',
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
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:process.env.NODE_ENV === 'development'
                    ? '"development"'
                    : ' "production" ',
                VUE_ENV: '"server"'
            },
        }),
        new VueServerPlugin()
    ]
});
