# webpack-vue-todo
        
!(preview)[https://github.com/JayK0720/webpack-vue-todo/blob/master/imgs/demo.png]

    使用webpack 和 vue 打造的 todo 应用。
    
    install:
        安装需要的依赖：
```js
// yarn add webpack -save-dev
// yarn add webpack-cli -save-dev
// yarn add vue vue-loader vue-template-compiler -save-dev
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
    
![bug](https://github.com/JayK0720/webpack-vue-todo/blob/master/imgs/bug-1.png)   

    安装cross-env包，解决不同系统之间命令兼容问题。
        yarn add cross-env -save-dev
```js
// package.json

"scripts": {
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
},
```
    npm run build   // production
    npm run dev  // development
    

# configuration

    devtool 仅用于开发环境。
    
    当webpack打包源代码时,可能会很难追踪到错误和警告在源代码中到原始位置。为了更容易地追踪错误和警告，JavaScript提供了source map
    功能，将编译后的代码映射回原始代码。
    
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

## bebel-loader

    Babel是一个工具链,主要用于在旧的浏览器或者环境中将ECMAScript2015+代码转为向后兼容版本的JavaScript代码。
        tips: Babel不会进行类型检查。
    
    yarn add --save-dev babel-loader @babel/core @babel/preset-env

```js
// Usage

// webpack.config.js
module.exports = {
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:[
                {
                    loader:'babel-loader',
                    options:{
                        "presets":['@babel/env']
                    }
                }
            ]
        }
    ]
}


// .babelrc  JSON文件
{
    "presets":["@babel/preset-env"]
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

## 管理输出
    
    通常再每次构建前清理/dist文件夹是比较推荐的做法。因此只会生成用到的文件。
    
    clean-webpack-plugin
        yarn add clean-webpack-plugin -D
```js
// Usage
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
{
    plugins:[new CleanWebpackPlugin()]
}
```

    rimraf 包
        npm install rimraf -D
    
    以下配置先删除之前的dist包然后再重新打包
```js
// Usage
// package.json
{
    "scripts":{
        "clean":"rimraf dist",
        "build":"npm run clean && npm run build"
    }
}
```
## resolve

    这些选项能设置模块如何被解析。
    
    创建import 或 require的别名，来确保模块引入变得更加简单。
```js
// webpack.config.js
{
    alias:{
        Utilities:path.resolve(__dirname,'src/utilities'),
        Templates:path.resolve(__dirname,"src/templates")
    }
}
```
    配置好后可以这样使用别名：
        import Utility from 'Utilities/utility';    
        
## Vue options

    watch 选项， 当在vue选项 使用watch时，在页面跳转 不使用watch监听的数据时会自动销毁watch。
    
    如果是手动添加$watch 需要监听的数据，会返回一个unWatch方法，可以调用该方法来 注销监听事件。
```js
const vm = new Vue({
    template:`<p>Hello,Vue.js -- {{text}}</p>`,
    data:{
        text:0
    },
    watch:{
        text(newValue,oldValue){
            console.log(`${newValue}--${oldValue}`)
        }
    }
})
```
```js
// 手动监听 text 数据变化，并且在2000ms后注销监听
const unWatch = vm.$watch('text',(newValue,oldValue) => {
    console.log(`${newValue}-${oldValue}`);
});

setInterval(() => {
    unWatch();
},2000);
```
    
    watch detail:
        一个对象，键是需要观察的表达式,值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue实例将会在实例
        化时调用$watch(),遍历watch对象的每一个property。
```js
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    }
  }
})
```
    
## Vue组件上的 v-model
    
    一个组件上的v-model默认会利用名为value的prop和名为input的事件，但是像单选框 复选框等类型的输入控件可能会将
    value attribute用于不同目的。model选项可以用来避免这样的冲突
```js
Vue.component('base-checkbox',{
    props:['checked'],
    model:{
        prop:'checked',
        event:'change'
    },   
    template:`<input 
        type='checkbox'
        :checked='checked',
        @change='handleChange'
    />`,
    methods:{
        handleChange(event){
            this.checked = event.target.checked;
        }
    }
})
```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
             
    
    
    
    
    
    
    
    
    
    