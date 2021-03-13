const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
	mode:"development",
	devtool:"inline-source-map",
	entry:path.join(__dirname,'practice/index.js'),
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'practice/dist')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[{
					loader:"babel-loader",
					options:{
						presets:['@babel/preset-env']
					}
				}]
			},
			{
				test:/\.(css|scss)$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test:/\.vue$/,
				use:['vue-loader']
			}
		]
	},
	resolve:{
		mainFiles:['index'],
		extensions:['.vue','.js']
	},
	devServer:{
		contentBase:path.join(__dirname,'practice/dist'),
		port:9091,
		host:'0.0.0.0',
		compress:true,
		hot:true,
		overlay:{
			errors:true
		}
	},
	plugins:[
		new HtmlWebpackPlugin({
			minify:true,
			filename:"index.html",
			template:path.join(__dirname,'practice/public/index.html'),
			title:"webpack-practice"
		}),
		new VueLoaderPlugin()
	]
}