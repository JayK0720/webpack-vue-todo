const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

let config;

console.log(process.env.NODE_ENV);

const defaultPlugins = [
    new HtmlPlugin({
        hash:true,
        minify:{
            removeAttributeQuotes:true
        },
        title:"webpack-vue-todo"
    }),
    new webpack.DefinePlugin({
        "process_env":{
            NODE_ENV: process.env.NODE_ENV === "development"
                ? " 'development' "
                : " 'production' "
        }
    })
]

if(process.env.NODE_ENV === "development"){
    config = merge(baseConfig,{
        module:{
            rules:[
                {
                    test:/\.scss/,
                    exclude:/node_modules/,
                    use:[
                        {
                            loader:'style-loader',
                        },
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        devServer:{
            port:'9090',
            host:'0.0.0.0',
            overlay:{
                errors:true // 遇到错误时会更新到页面上
            },
            contentBase:path.resolve(__dirname,'../dist'),
            compress:true,
            hot:true,  // 启动热更新
            open:true,// 会自动打开浏览器
        },
        plugins:defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ])
    })
}else{
    config = merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../src/index.js'),
            vendor:['vue']
        },
        output:{
            filename:'[name].[chunkhash:8].js',
            path:path.join(__dirname,'../dist')
        },
        module:{
            rules:[
                {
                    test:/\.scss$/,
                    use:ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        use:[
                            {
                                loader:'css-loader',
                                options:{
                                    importLoaders:1
                                },
                            },
                            'postcss-loader',
                            "sass-loader",
                        ]
                    })
                }
            ]
        },
        optimization:{
            splitChunks:{
                cacheGroups:{
                    commons:{
                        chunks:'initial',
                        name:'vendor',
                        minChunks:2,
                    }
                }
            }
        },
        plugins:defaultPlugins.concat([
            new ExtractTextPlugin('[name].[md5:contenthash:hex:8].css'),
        ])
    })
}
module.exports = config;