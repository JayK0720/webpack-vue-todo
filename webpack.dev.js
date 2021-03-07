const path = require("path");
const config = require("./webpack.base.js");
const {merge} = require("webpack-merge");

module.exports = merge(config,{
	mode:"development",
	devtool:'inline-source-map',
	devServer:{
		host:'0.0.0.0',
		port:9090,
		contentBase:path.join(__dirname,'dist'),
		compress:true,
		hot:true,
		overlay:{
			errors:true
		},
		historyApiFallback:true
	}
})