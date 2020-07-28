const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target:'node',
    entry:path.join(__dirname,'../practice/program/entry-server.js'),
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'../program'),
        libraryTarget:'commonjs2'
    },
    resolve:{
        extensions:['.js','.vue']
    },
    externals:Object.keys( require('../package.json')['dependencies'] ),
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ],
                exclude:file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test:/\.scss$/,
                use:[
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },
                    'sass-loader','postcss-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify(process.env.NODE_ENV || 'development'),
            "process.env.VUE_ENV":"'server'"
        }),
    ]
}