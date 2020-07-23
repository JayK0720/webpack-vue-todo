const Vue = require('vue');

module.exports = function createApp(context) {
    return new Vue({
        data:{
            message:'hello,vue.js',
            url:context.url
        },
        template:`<p>{{message}},访问路径是{{url}}</p>`
    })
}