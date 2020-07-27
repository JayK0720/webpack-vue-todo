const fs = require('fs');
const router = require('koa-router')();
const VueServerRender = require('vue-server-renderer');
const Koa = require('koa');
const path = require('path');
const app = new Koa();
const createApp = require('./app.js');

router.get('/',async ctx => {
    const context = {url:ctx.path}
    const app = createApp(context);
    const template = fs.readFileSync(path.join(__dirname,'template.html'),'utf-8');
    const renderer = VueServerRender.createRenderer({
        template
    });
/*    renderer.renderToString(app,(err,html) => {
        if(err){
            ctx.body = err;
            return;
        }
        ctx.body = html;
    })*/
    ctx.body = await renderer.renderToString(app);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3030, () => {
    console.log('app starting at port 3030');
})















