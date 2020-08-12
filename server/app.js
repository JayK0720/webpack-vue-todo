const Koa = require('koa');
const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const app = new Koa();
const static = require('koa-static');
const VueServerRender = require('vue-server-renderer');

const template = fs.readFileSync(
    path.join(__dirname,'./template.html'),
    'utf-8'
)

// createRenderer
/*const renderer = VueServerRender.createRenderer({
    template
})

router.get('/', async ctx => {
    const vm = require('../dist/server.bundle.js').default();
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(vm,(err,html) => {
            if(err) {
                return reject(err);
            }
            resolve(html);
        })
    })
});*/


// createBundleRenderer
/*const ServerBundle = fs.readFileSync(
    path.join(__dirname,'../dist/server.bundle.js'),
    'utf-8'
)
const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    template
});
router.get('/', async ctx => {
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString((err,html) => {
            if(err) return reject(err);
            resolve(html)
        })
    })
})*/


// vue-server-renderer/server-plugin
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const ServerBundle = require('../dist/vue-ssr-server-bundle.json');

const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    template,
    clientManifest
})

app.use( static(
    path.join(__dirname,'../dist')
))

router.get('/', async ctx => {
    const context = {url:ctx.url};
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(context,(err,html) => {
            if(err) return reject(err);
            resolve(html);
        })
    })
})

app.use(
    router.routes()
).use(
    router.allowedMethods()
)

app.listen(3000,() => {
    console.log('app starting at port 3000')
})