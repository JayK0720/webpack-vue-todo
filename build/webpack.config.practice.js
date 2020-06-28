const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry:path.join(__dirname,'../practice/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
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
        })
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

