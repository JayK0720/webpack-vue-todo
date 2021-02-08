const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let development = process.env.NODE_ENV;

module.exports = {
	mode:'development',
	devtool:'inline-source-map',
	entry:path.join(__dirname,'src/main.js'),
	output:{
		filename:"bundle.js",
		path:path.join(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{
						loader:"babel-loader",
					}
				]
			},
			{
				test:/\.vue$/i,
				use:['vue-loader']
			},
			{
				test:/\.(scss|css)$/,
				use:[
					'style-loader',
					{
						loader:"css-loader",
						options:{
							importLoaders:1
						}
					},
					{
						loader:"postcss-loader"
					},
					{
						loader:"sass-loader",
					}
				]
			},
			{
				test:/\.(png|jpeg|jpg)$/,
				type:'asset/resource',
				generator:{
					filename:'[name][ext]'
				}
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			title:'webpack-vue-todolist'
		})
	],
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		port:9090,
		host:"0.0.0.0",
		compress:true,
		overlay:{
			errors:true
		},
		hot:true
	},
	resolve:{
		alias:{
			"@":path.join(__dirname,'src'),
		},
		extensions:['.js','.vue','.json','.jsx'],
		mainFiles:['index'],
		modules:[path.join(__dirname,'src'),'node_modules']
	}
}