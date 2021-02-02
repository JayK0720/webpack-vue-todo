const express = require('express');
const config = require("./webpack.config.js");
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const complier = webpack(config);	// 将配置传递给webpack

app.use(
	webpackDevMiddleware(complier,{
		publicPath:config.output.publicPath
	})
)

app.listen(3000,() => {
	console.log("app starting at port 3000");
})