# webpack-vue-todo

    使用webpack 和 vue 打造的 todo 应用。
    
    install:
        安装需要的依赖：
```js
// yarn add webpack --save-dev
// yarn add webpack-cli --save-dev
// yarn add vue vue-loader vue-template-compiler --save-dev
```
```js
// webpack.config.js
module:{
    test:/\.vue$/,
    use:['vue-loader']
}
```
    在上述配置下 使用 npm run build打包时会报错。需要在plugins中使用VueLoaderPlugin.
```js
// webpack.config.js

const VueLoaderPlugin = require('vue-loader/bin/plugin');

{
    module:{
        test:/\.vue$/,
        use:['vue-loader']
    },
    plugins:[new VueLoaderPlugin()]
}
```
    Since webpack v4 the extract-text-webpack-plugin should not be used for css. Use mini-css-extract-plugin 
    instead.
    
    安装cross-env包，解决不同系统之间命令兼容问题。
        yarn add cross-env --save-dev
```js
// package.json

"scripts": {
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
},
```
    npm run build   // production
    npm run dev  // development
    
## postcss
    
    yarn add postcss-loader autofixer --save-dev
```js
// Usage
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            'style-loader',
            {loader:'css-loader',options:{importLoaders:1}},
             'postcss-loader'
        ],
      },
    ]
  }
}

// postcss.config.js
module.exports = {
    plugins:[
        require('precss'),
        require('autoprefixer')
    ]
}
```
    
## plugins

    DefinePlugin
        DefinePlugin允许创建一个在编译时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为
        非常有用。
```js
// webpack.config.js
const isDev = process.env.NODE_ENV === 'development';

{
    plugins:[
        new webpack.DefinePlugin({
            "process.env": isDev ? '"development"' : '"production"'
        })
    ]
}
```
    Hot Module Replacement
        模块热替换(HMR)功能会在应用程序运行过程中替换,添加或删除模块，而无需重新加载整个页面。
            1. 保留在完全重新加载页面时丢失的应用程序状态
            2. 只更新变更内容
            3. 调整样式更加快速
            
        启用此功能就是更新webpack-dev-server的配置和使用webpack内置的HMR插件。
            
     tips:
        HMR不适用于生产环境,这意味着它应当只在开发环境使用。
```js
// Usage
{
    'devServer':{
        hot:true,   
        overlay:{
            errors:true // 遇到错误时会更新到页面上
        },
        open:true   // 会自动打开浏览器
    },
    plugins:[
        new HotModuleReplacementPlugin()
    ]
}
```
    
            
    
    
    
    
    
    
    
    
    
    