const router = require('koa-router')();
const webpack = require('webpack');
const MemoryFileSystem = require('memory-fs');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const VueServerRender = require('vue-server-renderer');
const config = require('../../build/webpack.config.server.js');
const compiler = webpack(config);
const mfs = new MemoryFileSystem();
compiler.outputFileSystem = mfs;

let bundle;
compiler.watch({},(err,stats) => {
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach((error) => {console.log(error)});
    stats.warnings.forEach((warning) => {console.log(warning)});

    const bundlePath = path.join(
        config.output.path,
        'vue-ssr-server-bundle.json'
    );
    bundle = JSON.parse( mfs.readFileSync(bundlePath,'utf-8') );
    console.log('new bundle generated');
});

router.get('/', async (ctx) => {
    if(!bundle) {
        ctx.body = 'please wait a moment!';
        return;
    }
    const context = {url:ctx.url};
    ctx.headers['Content-Type'] = 'text/html';
    const template = fs.readFileSync(
        path.join(__dirname,'../template.html'),
        'utf-8'
    );
    const response = await axios.get('http://127.0.0.1:9000/assets/vue-ssr-client-manifest.json');
    const clientManifest = response.data;
    const renderer = VueServerRender.createBundleRenderer(bundle,{
        template,
        clientManifest,
    });
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(context,(err,html) => {
            if(err) return reject(err);
            resolve(html);
        })
    });
});

module.exports = router;
















