const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            "presets":["@babel/preset-env"]
                        }
                    }
                ],
                exclude:file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
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
                    },
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]'
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
    ]
}