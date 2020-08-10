const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueServerPlugin = require('vue-server-renderer/server-plugin.js');

module.exports = {
    target:"node",
    entry:{
        server:path.join(__dirname,'../src/server-entry.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,'../dist'),
        libraryTarget:'commonjs2'
    },
    resolve:{
        extensions:['.js','.vue'],
        modules:[path.join(__dirname,'src'),'node_modules']
    },
    externals:Object.keys( require('../package.json')['dependencies'] ),
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.(js|jsx)$/,
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
                    !/\.js\.vue/.test(file)
                )
            },
            {
                test:/\.scss$/,
                use:[
                    process.env.NODE_ENV === 'development'
                        ? 'style-loader'
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
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[id].css'
        }),
        new VueServerPlugin()
    ]
}