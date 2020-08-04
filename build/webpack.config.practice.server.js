const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    target:'node',
    entry:{
        server:path.join(__dirname,'../src/server-entry.js')
    },
    output:{
        filename:'[name].bundle.js',
        libraryTarget:'commonjs2',
        path:path.join(__dirname,'../dist')
    },
    externals:Object.keys( require(path.join(__dirname,'../package.json')).dependencies ),
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.(jpg|jpeg|png|svg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            filename:'[name].[ext]'
                        }
                    },
                    {
                        loader:'url-loader',
                        options:{
                            limit:538*1024,
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
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
                test:/\.scss$/,
                use:[
                    process.env.NODE_ENV === 'development'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },
                    "sass-loader",'postcss-loader'
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:process.env.NODE_ENV === 'development'
                    ? ' "development" '
                    : ' "production" '
            }
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new VueServerPlugin()
    ],
    resolve:{
        extensions:['.js','.vue']
    }
}