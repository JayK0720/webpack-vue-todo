const router = require('koa-router')();
const VueServerRender = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(
    path.resolve(__dirname,'../template.html'),
    'utf-8'
);
const ServerBundle = require('../../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../../assets/vue-ssr-client-manifest.json');

const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    template,
    clientManifest,
});

router.get('/', async ctx => {
    const context = {url:ctx.url};
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(context,(err,html) => {
            if(err) return reject(err);
            resolve(html);
        })
    })
})

module.exports = router;