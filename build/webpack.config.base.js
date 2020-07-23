const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target:'web',
    entry:path.join(__dirname,'../src/entry-client.js'),
    output:{
        filename:'bundle.[hash:8].js',
        path:path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            "presets":["@babel/env"]
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',    // 在文件大小低于指定的限制时,可以返回一个DataUrl
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader',
                }]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ]
}