const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var MiniCssExtractPlugin = require('mini-css-extract-plugin')
let development = process.env.NODE_ENV;

module.exports = {
	mode:'development',
	devtool:'inline-source-map',
	entry:path.join(__dirname,'src/main.js'),
	output:{
		filename:'[name].[chunkhash:8].js',
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
					{
						loader:'css-loader',
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
			title:'webpack-vue-todolist',
			template:path.join(__dirname,'src/public/index.html')
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
		historyApiFallback:true,
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