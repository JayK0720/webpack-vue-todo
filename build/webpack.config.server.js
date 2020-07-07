const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueServerPlugin = require('vue-server-renderer/server-plugin.js');

const webpack = require('webpack');

let config = merge(baseConfig,{
    target:'node',
    devtool:'source-map',
    entry:path.join(__dirname,'../src/server.js'),
    output:{
        libraryTarget:'commonjs2',
        filename:'bundle_server.js',
        path:path.join(__dirname,'../server-bundle')
    },
    externals:Object.keys( require("../package.json")['dependencies'] ),
    module:{
        rules:[
            {
                test:/\.(scss|css)$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                importLoaders:1
                            }
                        },
                        'sass-loader',
                        'postcss-loader'
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('[name].[md5:contenthash:hex:8].css'),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify(process.env.NODE_ENV || 'development'),
            "process.env.VUE_ENV":"'server'"
        }),
        new VueServerPlugin()
    ]
});

module.exports = config;