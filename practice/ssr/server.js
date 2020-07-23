// const Vue = require('vue');
const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync( path.join(__dirname,'template.html'),'utf-8' );
const createApp = require('./app.js');

const renderer = require('vue-server-renderer').createRenderer({
    template
});

router.get('/', async ctx => {
    const context = {
        url:ctx.url
    }
    const app = createApp(context)
    renderer.renderToString(app,(err,html) => {
        if(err){
            ctx.body = 'Error';
            console.log(err);
            return;
        }
        ctx.body = html;
    })
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,() => {
    console.log('app starting at port 3000')
})
















