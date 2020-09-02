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
        当webpack打包源代码时,可能会很难追踪到错误和警告在源代码中到原始位置。为了更容易地追踪错误和警告，JavaScript提供了
        source map 功能，将编译后的代码映射回原始代码。

    使用watch mode [观察模式]
```js
// package.json
{
//...
    "watch":"webpack --watch"
//...
}
```
    npm run watch，每次修改后保存文件可以看到webpack如何编译代码。
    
    webpack-dev-server
        
        webpack-dev-server提供了一个简单的web server,并且具有live reloading（实时重新加载）功能。
    install:
        yarn add --save-dev webpack-dev-server
    
    Usage:
```js
// webpack.config.js  
module.exports = {
    target:'web',
    devServer:{
        contentBase:'./dist',   // 告知webpack-dev-server，将dist目录下的文件serve 到 localhost:8080下。
        port:"8080",
        host:"localhost"
    }
}
```
    webpack-dev-server在编译之后不会写入到任何输出文件。而是将bundle文件保留在内存中。然后将它们serve到server中。
    
    
    webpack-dev-middleware
    
    install:
        yarn add webpack-dev-middleware --save-dev

## babel-polyfill

    解决 webpack 编译 aysnc/await 编译报错问题
    
        npm install babel-polyfill --save-dev
    
    在webpack入口处配置
```js
// webpack.config.js
{
    entry:{
        index:['babel-polyfill',path.join(__dirname,'../practice/server.js')]
    }
}
```    
    
## postcss
    
    yarn add postcss-loader autoprefixer --save-dev
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
                        "presets":['@babel/preset-env']
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
    排除node_modules
        exclude:/node_modules/ 在应用.js文件的js转译规则(例如 babel-loader)中是蛮常见的。鉴于V15中的推导变化，如果你导入
        node_modules内的 Vue单文件组件, 它的<script>部分在转译时将会被排除在外。
        
        为了确保JS的转译应用到 node_modules的 Vue单文件组件,你需要通过使用一个排除函数将它们加入白名单:
```js
// webpack.config.js
{
    test:/\.js$/,
    use:[{loader:'babel-loader'}],
    exclude:file => (
        /node_modules/.test(file) &&
        !/\.vue\.js/.test(file)
    )
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
    devServer.historyApiFallback
        当使用HTML5 History API时,任意的404 响应都可能需要被替代为index.html. 
    
    devServer.host
        指定一个host,默认是localhost。如果你希望服务器外部可访问,指定如下:
```js
// 通过传入 以下方式启动:
{
    historyApiFallback:true,
    host:'0.0.0.0'
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
    
    resolve.modules
        告诉webpack解析模块时应该搜索的目录。
   
    modules:[path.resolve(__dirname,'src'),'node_modules']
    
    
## 外部扩展(externals)
    
    externals配置选项提供了【从输出的bundle中排除依赖】的方法。相反所创建的bundle依赖于那些存在于用户环境
    (consumer's environment)中的依赖。
    
    防止将某些 import的包 打包到bundle中，而是在运行时再去从外部获取这些扩展依赖。
```js
module.exports = {
  //...
  externals: {
    jquery: 'jQuery'
  }
};
```
    如果想将fs-extra从输出的bundle中剔除并在运行时引入它，你可以如下定义:
```js
// Example
module.exports = {
// ...
    externals:{
        'fs-extra':'commonjs2 fs-extra'
    }
}
```

## target

    由于JavaScript既可以编写服务端代码也可以编写浏览器代码，所以webpack提供了多种部署target。
```js
// Usage
// webpack.config.js
module.exports = {
    target:'node'
}
```
    多target
```js
const path = require('path');
const serverConfig = {
    target:'node',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'lib.node.js'
    }
}

const clientConfig = {
    target:'web',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'lib.js'
    }
}

module.exports = [serverConfig,clientConfig];
```

## mini-css-extract-plugin

    This plugin extract Css into separate files, It creates a CSS file per JS file which contains CSS.
    It supports On-Demand-Loading of Css and SourceMaps。
    
    install:
        npm install --save-dev mini-css-extract-plugin
```js
// Usage:
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']}
        ]
    },
    plugins:[new MiniCssExtractPlugin({
        filename:'[name].css',
        chunkFilename:'[id].css'
    })]
}
```

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

# Vue-Router Configuration

    1. scrollBehavior  这个功能只在支持 history.pushState的浏览器中可用。
```js
const router = new VueRouter({
    // router:[...],
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return {x:0,y:0}
        }
    }
})
```
    全局前置守卫
        可以通过 router.beforeEach 注册一个全局前置守卫: 
```js
const router = new VueRouter({...});
router.beforeEach((to,from,next) => {
    // ...
})
```
    全局后置钩子
        可以通过 router.afterEach 注册一个全局后置钩子 参数没有next。
```js
const router = new VueRouter({...});
router.afterEach((to,from) => {
    // ...
})
```
## Vuex
    
    Vuex Module
```js
const moduleA = {
    state:() => ({}),
    mutations:{},
    actions:{
        incrementIfOddOnRootSum({state,commit,rootState}){
            commit('increment');
        }
    },
    getters:{
        sumWithRootCount(state,getters,rootState){
            return state.count + rootState.count;
        }
    }
};
const moduleB = {
  state: () => ({}),
    mutations:{},
    actions:{},
    getters:{}  
}

const store = new Vuex.Store({
    modules:{
        a:moduleA,
        b:moduleB
    }
})
```
    对于模块内部的action，局部状态通过 context.state暴露出来,根结点状态则为context.rootState
    对于模块内部的getter，根节点状态会作为第三个参数暴露出来:

    Vuex的热重载:
```js
const store = {
    mutations:{},
    module:{a:moduleA}
}
if(module.hot){
// 使action和mutation 成为可热重载模块
    module.hot.appcep([
        './mutations',
        './modules/moduleA'
    ],() => {
        const newMutations = require('./mutations').default;
        const newModuleA = reqire('./modules/moduleA').default;
        store.hotUpdate({
            mutations:newMutations,
            modules:{
                a:newModuleA
            }
        })  
    })
}
return store;
```
    
## output.libraryTarget

    配置如何暴露library。默认值'var'    
    
    libraryTarget:'commonjs2' --- 入口起点的返回值将分配给 module.exports对象。
    这个名称也意味着模块用于CommonJS环境

## Vue服务端渲染
    
    1. 
    在纯客户端应用程序(client-only app)中,每个用户都会在他们各自的浏览器中使用新的应用程序实例。对于服务端渲染，我们也
    希望每个请求都是全新的，独立的应用程序实例，以便不会有交叉请求造成的状态污染。
    
    2. 所有的生命周期钩子函数中,只有beforeCreate和created会在服务器端渲染过程中被调用。
    
    vue-server-renderer
    
    install:
        yarn add vue-server-renderer -S
```js
// Usage
// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const server = new Vue({
  template: `<div>Hello World</div>`
})

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer();

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(server, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">Hello World</div>
})
```        
    tips: 不传回调函数的时候返回的是一个Promise。
```js
router.get('/' ,async ctx => {
    // 1
   ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(app,(err,html) => {
            if(err) return reject(err);
            resolve(html);
        });
    })

    // 2 
    renderer.renderToString(app).then(html => {
        ctx.body = html;
    }).catch(err => {
        console.log(err);
    })
})
```

   
    使用一个页面模版
```html
<!-- template.html -->

<!DOCTYPE html>
   <html lang="en">
     <head><title>Hello</title></head>
     <body>
       <!--vue-ssr-outlet-->    这里一定要加上注释
     </body>
   </html>
```
    模版插值 
        {{title}}   // 使用花括号进行HTML转义插值
        {{{meta}}}  // 使用三花括号进行HTML不转义插值 
    
    可以通过传入一个 '渲染上下文对象'作为 renderToString函数的第二个参数
```js
// node-app.js 一个完整的DEMO
const Vue = require('vue');
const server = require('express')();
const fs = require('fs');

const renderer = require('vue-server-renderer').createRenderer({
    template:fs.readFileSync('./template.html','utf-8')
});

const context = {
    title:"我是通过模版插值的形式",
    meta:`
        <meta charset="utf-8">
        <meta name="keyword" content="vue-ssr">
        <meta name="description" content="vue ssr demo">
    `
}

server.get('/',(req,res) => {
    res.writeHead(200,{
        'Content-Type':"text/html;charset=utf-8"
    })
    const server = new Vue({
        data:{
            url:req.url,
            message:'Hello Vue.js'
        },
        template:'<div><p>你访问的路径是{{url}}</p><p>{{message}}</p></div>'
    });
    renderer.renderToString(server,context,(err,html) => {
        if(err) {
            res.status(500).end("Internal Server Error");
            return;
        }
        res.end(html);
    })
})

server.listen(8080,() => {
    console.log('server listening at port 8080');
});
```

    vue-server-renderer提供了两种渲染方式:   createRenderer/createBundleRenderer
```js
// Usage
const {createRenderer} = require('vue-server-renderer');
const renderer = createRenderer({/* 选项 */});


const {createBundleRenderer} = require('vue-server-renderer');
const renderer = createBundleRenderer(serverBundle,{ /* 选项 */ });
```
    serverBundle参数可以是以下之一:
        1. 绝对路径:指向一个已经构建好的bundle文件(.js或者.json)。 必须以 / 开头才会被识别为文件路径。
        2. 由 webpack + vue-server-renderer/server-plugin生产的bundle对象。
    
## Renderer选项
    
    1: template
        为整个页面的HTML提供一个模版。此模版应该包含注释 <!---vue-ssr-outlet->，作为渲染应用程序内容的占位符。
    2. render context
        context.head 将会被作为HTML注入到页面的头部里。
        context.styles: 内联CSS，将以style标签的形式注入到页面头部。
        context.state; 初始化Vuex store状态，将以window.__INITIAL_STATE__的形式内联到页面。
        
    3. clientManifest(客户端构建清单)。它可以自动推断和注入资源预加载/数据预取指令。以及css链接/script标签到所渲染的HTML。
```html
<html>
  <head>
    <!-- 用于当前渲染的 chunk 会被资源预加载(preload) -->
    <link rel="preload" href="/manifest.js" as="script">
    <link rel="preload" href="/main.js" as="script">
    <link rel="preload" href="/0.js" as="script">
    <!-- 未用到的异步 chunk 会被数据预取(prefetch)（次要优先级） -->
    <link rel="prefetch" href="/1.js" as="script">
  </head>
  <body>
    <!-- 应用程序内容 -->
    <div data-server-rendered="true"><div>async</div></div>
    <!-- manifest chunk 优先 -->
    <script src="/manifest.js"></script>
    <!-- 在主 chunk 之前注入异步 chunk -->
    <script src="/0.js"></script>
    <script src="/main.js"></script>
  </body>
</html>
```

## 手动资源注入

    默认情况下,当提供template渲染选项时,资源注入是自动执行的。但有时可以在创建renderer手动执行资源注入。
    传入 inject:false。
    在renderToString回调函数中,你传入的context对象会暴露以下方法:
        1. context.renderStyles()
            返回内联<style>标签包含所有关键CSS(critical CSS),其中关键CSS是在要用到的.vue组件的渲染过程中收集的。
            如果提供了clientManifest，返回的字符串中，也将包含着<link rel='stylesheet'>标签内由webpack输出的CSS文件。
        2. context.renderScripts()
            需要clientManifest。 返回引导客户端应用程序所需的<script>标签。当在应用程序代码中使用异步代码分割时,此方法
            将智能地正确的推断客户需要引入的那些异步chunk。

## 通用代码

    1. 默认情况下，在服务端禁用响应式数据。
    2. 在服务端所有的生命周期钩子函数中，只有beforeCreate和created会在服务器端渲染过程中被调用。
    
    router.onReady(callback,[errorCallback])
        该方法把一个回调排队,在路由完成初始化导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步操作。
        这可以有效确保服务端渲染时服务端和客户端输出的一致。

```js
//    usage:
// webpack.config.server.js
const VueServerPlugin = require('vue-server-renderer');

module.exports = {
    target:'node',
    output:{
        libraryTarget:'commonjs2',
        //...
    },
    externals:Object.keys( require('./package.json')['dependencies'] ),
    plugins:[
        new VueServerPlugin()
    ]
}
```
      
## webpack插件

    Usage:
        const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
        const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');  
        
    生成的默认文件是:
        vue-ssr-server-bundle.json      用于服务器端插件
        vue-ssr-client-manifest.json    用于客户端插件
    
# nodemon

    nodemon is a tool that helps develop node.js based applications by automatically restarting
    the node application when file changes in the directory are detected.
    
        npm install -g nodemon
```json
//nodemon.json 
{
  "restartable": "rs",  // 重启服务命令
  "ignore": [   // 忽略修改的文件
    ".git",
    ".babelrc",
    ".node_modules/**/node_modules",
    "build/webpack.config.client.js",
    "public",
    "src"
  ],
  "verbose": true,
  "env": {
    "NODE_ENV": "development",
  },
  "ext": "js json ejs"  // 这些文件修改后重启服务
}
```    
# concurrently
    
    一个命令 同时启动两个服务
        
        install:
            yarn add concurrently -D
```json
{
    "dev:client":"cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.client.js",
    "dev:server": "nodemon server/dev.ssr.js",
    "dev": "concurrently \"npm run dev:client\" \"npm run dev:server\""
}
```
# Vue-Loader

    install:
        应该将vue-loader和vue-template-compiler一起安装。
    
    npm install -D vue-loader vue-template-compiler
    
    Usage:
```js
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            }   
        ]
    },
    plugins:[new VueLoaderPlugin()]
}
```
    
## 后台设置允许跨域

    koa-cors package
        yarn add koa-cors -S
```js
const Koa = require('koa');
const cors = require('koa-cors');
const app = new Koa();

app.use(cors());
```    
    
    手动设置时:
        ctx.set('Access-Control-Allow-Origin',"*"); 允许来自所有域名的请求(不携带cookie请求可以用*)
    如果有携带cookie请求必须指定域名,
    // ctx.set('Access-Control-Allow-Origin','http://localhost:8000') 只允许指定域名的请求
       ctx.set('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
       ctx.set('Access-Control-Allow-Credentials',true)    表示是否允许发送cookie

    
## nodemailer
    
    Nodemailer is a module for Node.js applications to allow easy as cake email sending。
    
    npm install nodemailer -S
    
```js
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
```

## Vue transition问题

    在login 登陆成功后进入 todo 页面时, 因为路由是通过 opacity 显示来切换的,
    在login页面还没有完全 消失的时候, todo页面已经开始显示,并从底部开始往上移动显示。
    
    解决这个bug:
         <transition mode='out-in'></transition>
    先出后进
    
# axios

    常用请求方法:
        get post put patch
        get:    请求数据
        post:   提交数据(表单提交+文件上传)
        put:    更新数据(所有数据更新到服务端)
        patch:  更新数据(只将修改的数据推送到后端)
        
    请求使用方法:
```js
axios({
    method:"get",
    url:"http://xxxxx",
    params:{}
})

axios.get("http://xxxxx",{
    params:{}
})

axios.post(url,data,config)
axios({
    url,
    method:"post",
    data:{}
})
// put 和 patch方法同post使用方法
```

    
    
    执行多个并发请求:
        请求的数据顺序按照axios.all()数组里的顺序
        
    Example:
        axios.all([axios.get('/api/player'),axios.get('/api/city')]).then(axios.spread((players,cities) => {
            console.log("players:",players);
            console.log("cities:",cities)
        }));
     
    axios的配置方式:
```js
// 全局配置:
    axios.defaults.baseURL = 'http://localhost:4000';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.timeout = 1000;
    
// 实例配置:
    axios.create({
        baseURL:"http://localhost:4000/api",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    });
    
// 请求配置:
    axios.get("http://localhost:4000/api",{
        timeout:4000,
        headers:{
        
        }
    })
```

    
    
    
    
    
    
    
    
    
    
             
    
    
    
    
    
    
    
    
    
    