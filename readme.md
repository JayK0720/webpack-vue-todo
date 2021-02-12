# webpack-vue-todolist

	使用webpack
		npm install webpack webpack-cli --save-dev
		
	加载CSS
		style-loader和css-loader
		npm install style-loader css-loader --save-dev 
	应保证loader的先后顺序: 'style-loader'在前,而'css-loader'在后。
	
	解析vue的loader
		npm install vue-loader	vue-template-complier --save-dev
	除了配置vue-loader之外,还需要配置Vue Loader插件，这个插件的职责是将你定义过的其他规则复制并应用到.vue文件里相应语言的块。
```js
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		new VueLoaderPlugin()
	]
}
```
	加载images图像
	
	在webpack5中,可以使用内置的Asset Modules处理images和fonts等资源。通过添加4种新的模块类型来替换这些loader:
		asset/resource	发送一个单独的文件并导出URL ---> file-loader
		asset/inline		导出一个资源的data URL			---> url-loader
		asset/source		导出资源的源代码						---> raw-loader
		
	