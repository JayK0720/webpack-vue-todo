const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'development',
	entry:path.join(__dirname,'src/main.js'),
	output:{
		filename:"bundle.js",
		path:path.join(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/i,
				use:['vue-loader']
			},
			{
				test:/\.(scss|css)$/,
				use:['style-loader','css-loader','sass-loader']
			},
			// {
			// 	test:/\.(gif|jpg|jpeg|png|svg)$/,
			// 	use:[
			// 		{
			// 			loader:'url-loader',
			// 			options:{
			// 				limit:2 * 1024,
			// 				name:'[name].[ext]'
			// 			}
			// 		}
			// 	]
			// }
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
		compress:true
	}
}