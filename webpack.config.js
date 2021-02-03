const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
	mode:"development",
	entry:'./src/index.js',
	output:{
		filename:'[name].[contenthash].js',
		path:path.join(__dirname,'dist')
	},
	optimization:{
		runtimeChunk:"single",
		splitChunks:{
			cacheGroups:{
				vendor:{
					test:/[\\/]node_modules[\\/]/,
					name:'vendors',
					chunks:'all'
				}
			}
		}
	},
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|jpeg|svg|gif)$/i,
				type:"asset/resource"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"代码分离"
		}),
		new CleanWebpackPlugin()
	],
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		port:9090
	}
}