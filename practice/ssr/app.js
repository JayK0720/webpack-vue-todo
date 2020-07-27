const Vue = require('vue');

module.exports = function createApp(context){
    return new Vue({
        data:{
            message:'hello world',
            url:context.url
        },
        template:`<p>{{message}},你访问的路径是{{url}}</p>`
    })
}