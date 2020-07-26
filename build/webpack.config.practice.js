const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry:{
        index:['babel-polyfill',path.join(__dirname,'../practice/index.js')]
    },
    devtool:'source-map',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                    }
                }]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:['url-loader']
            },
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:'sass-loader'
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:path.join(__dirname,'template.html'),
            title:'Vue-Practice-Demo'
        }),
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:"'development'"
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        //  创建 import或require的别名，来确保模块引入变得更简单。
        alias:{
            'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
        },
        enforceExtension:false, // 如果是true，将不允许无扩展名文件
        // extensions:['js','json','vue']   自动解析确定的扩展.能够使用户在引入模块时不带扩展。
    },
    devServer:{
        contentBase:path.join(__dirname,'../dist'),
        port:'9091',
        host:'localhost',
        compress:true,
        hot:true,
    }
}

