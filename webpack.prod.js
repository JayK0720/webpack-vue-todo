const {merge} = require('webpack-merge');
const config = require('./webpack.base.js');

module.exports = merge(config,{
	mode:'production',
	optimization:{
		splitChunks:{
			cacheGroups:{
				commons:{
					test:/[\\/]node_modules[\\/]/,
					name:"vendors",
					chunks:"all"
				}
			}
		}
	}
})