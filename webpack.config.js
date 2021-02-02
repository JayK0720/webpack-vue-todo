const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
	mode:"development",
	// entry:"./src/index.js",
	entry:{
		index:'./src/index.js',
		print:'./src/print.js'
	},
	output:{
		// filename:'bundle.js',
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
		publicPath:"/"
	},
	// devtool:"inline-source-map",
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(png|jpg|jpeg|svg)$/i,
				type:'asset/resource'
			}
		]
	},
	devServer:{
		contentBase:"./dist",
		port:9000
	},
	plugins:[
		new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
		new HtmlWebpackPlugin({
			title:"Development"
		})
	]
}