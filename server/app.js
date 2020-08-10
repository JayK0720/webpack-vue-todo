const Koa = require('koa');
const VueServerRender = require('vue-server-renderer');
const router = require('koa-router')();
const path = require('path');
const fs = require('fs');
const app = new Koa();

const template = fs.readFileSync( path.join(__dirname,'./template.html'), 'utf-8' );
const ServerBundle = fs.readFileSync(
    path.join(__dirname,'../dist/server.bundle.js'),
    'utf-8'
)

const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    template
})

router.get('/', async ctx => {
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString((err,html) => {
            if(err) {
                return reject(err);
            }
            console.log(`${html}`);
            resolve(html);
        })
    })
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('app starting at port 4000');
})