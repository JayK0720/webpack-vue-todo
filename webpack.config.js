const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === "development";

const config = {
    mode:'development',
    target:"web",
    entry:path.join(__dirname,'src/app.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[

            {
                test:/\.(png|jpg|jpeg|gif|svg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            "presets":["@babel/env"]
                        }
                    }
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
        new HtmlPlugin({
            hash:true,
            minify:{removeAttributeQuotes:true},
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": isDev ? '"development"' : '"production"'
        })
    ]
}

if(process.env.NODE_ENV === 'development'){
    config.devtool = "inline-source-map";
    config.devServer = {
        port:'9090',
        host:'0.0.0.0',
        overlay:{
            errors:true // 遇到错误时会更新到页面上
        },
        contentBase:path.resolve(__dirname,'dist'),
        compress:true,
        hot:true,  // 启动热更新
        open:true,// 会自动打开浏览器
    },
    config.module.rules.push({
        test:/\.scss$/,
        use:[
            'style-loader',
            {
                loader:'css-loader',
                options:{
                    importLoaders:1,
                    sourceMap:true
                }
            },
            'postcss-loader',
            'sass-loader'
        ]
    });
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
    )
}else{
    config.entry = {
        app:path.join(__dirname,'src/app.js'),
        vendor:['vue']
    };
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push({
        test:/\.scss$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:[
                {
                    loader:'css-loader',
                    options:{
                        importLoaders:1
                    }
                },
                'postcss-loader',
                'sass-loader'
            ]
        })
    });
    config.plugins.push(
        // webpack 4.3 包含了contentHash这个关键字段,
        new ExtractTextPlugin('[name].[md5:contenthash:hex:8].css'),
    )
    config.optimization = {
        splitChunks:{
            cacheGroups:{
                commons:{
                    chunks:'initial',
                    name:'vendor',
                    minChunks:2,
                }
            }
        }
    }
}

module.exports = config;












