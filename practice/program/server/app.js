/*const Koa = require('koa');
const VueServerRender = require('vue-server-renderer');
const router = require('koa-router')();
const path = require('path');
const fs = require('fs');
const app = new Koa();*/

/*
const template = fs.readFileSync( path.join(__dirname,'./template.html'), 'utf-8' );
const renderer = VueServerRender.createRenderer({
    template,
});

router.get('/', async ctx => {
    const app = require('../dist/server.bundle').default();
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(app,(err,html) => {
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
})*/

const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const app = new Koa();
const router = require('koa-router')();
const VueServerRender = require('vue-server-renderer');
const static = require('koa-static');

const template = fs.readFileSync(
    path.join(__dirname,'./template.html'),
    'utf-8'
)
/*const ServerBundle = fs.readFileSync(
    path.join(__dirname,'../dist/server.bundle.js'),
    'utf-8'
)*/
const ServerBundle = require('./vue-ssr-server-bundle.json');

const clientManifest = require('./vue-ssr-client-manifest.json');

const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    template,
    clientManifest,
})

app.use( static(
    path.join(__dirname,'./dist')
))


router.get('/', async ctx => {
    const context = {url: ctx.url}
    ctx.body = await new Promise( (resolve,reject) => {
        renderer.renderToString(context, (err,html) => {
            if(err) {
                return reject(err);
            }
            console.log(`${html}`);
            resolve(html);
        })
    })
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001,() => {
    console.log('app starting at port 3001')
})