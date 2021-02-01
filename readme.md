# webpack-vue-todolist

	使用webpack
		npm install webpack webpack-cli --save-dev
		
	加载CSS
		style-loader和css-loader
		npm install style-loader css-loader --save-dev 
	应保证loader的先后顺序: 'style-loader'在前,而'css-loader'在后。
	
	加载images图像
	
		在webpack5中,可以使用内置的Asset Modules处理images和fonts等资源。