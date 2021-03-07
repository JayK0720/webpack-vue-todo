const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:path.join(__dirname,'src/main.js'),
	output:{
		path:path.join(__dirname,'dist'),
		filename:process.env.NODE_ENV == 'development' ? '[name].bundle.js' : '[name].[contenthash:8].js'
	},
	module:{
		rules:[
			{
				test:/\.(css|scss)$/,
				use:[
					process.env.NODE_ENV == 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader','sass-loader'
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
		new MiniCssExtractPlugin({
			filename:process.env.NODE_ENV == 'production' ? '[name].[contenthash:8].css' : '[name].css'
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename:"index.html",
			template:path.join(__dirname,'src/public/index.html'),
			title:'webpack-todolist'
		})
	],
	resolve:{
		alias:{
			"@":path.resolve(__dirname,'src')
		},
		extensions:['.vue','.js'],
		mainFiles:['index']
	}
}