const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    target:'node',
    entry:{
        server:path.join(__dirname,'../practice/program/entry-server.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'../program'),
        // webpack输出的时候是将打包输出的结果放到一个匿名自执行函数中的，通过将libraryTarget设置为commonjs2,
        // 会将整个打包结果放到module.exports上。
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
        new HtmlWebpackPlugin({
            filename:'index.server.html',
            template:path.join(__dirname,'template.html'),
            excludeChunks:['server']
            // 排除某个模块,不让打包后输出的server.bundle.js文件引入到index.server.html文件中。
        }),
        new VueServerPlugin()
    ]
}