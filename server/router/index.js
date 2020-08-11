const router = require('koa-router')();
const MemoryFs = require('memory-fs');
const webpack = require('webpack');
const VueServerRender = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const ejs = require('ejs');

const config = require('../../build/webpack.config.server.js');

const compiler = webpack(config);
const mfs = new MemoryFs();
compiler.outputFileSystem = mfs;

let bundle;
compiler.watch({},(err,stats) => {
    if(err) {
        throw err;
    }
    stats = stats.toJson();
    stats.errors.forEach((error) => {console.log(error)});
    stats.warnings.forEach((warning) => {console.log(warning)});

    const bundlePath = path.join(
        config.output.path,
        'vue-ssr-server-bundle.json'
    );
    bundle = JSON.parse(mfs.readFileSync(bundlePath,'utf-8'));
});


router.get('/', async ctx => {
    ctx.headers['Content-Type'] = 'text/html';
    const context = {url:ctx.url};
    if(!bundle) {
        ctx.body = 'please wait a moment!'
    }
    const template = fs.readFileSync(
        path.resolve(__dirname,'../server.template.ejs'),
        'utf-8'
    );
    const clientManifest = await axios.get('http://127.0.0.1:9000/vue-ssr-client-manifest.json')
    const renderer = VueServerRender.createBundleRenderer(bundle,{
        template,
        inject:false,
        clientManifest
    });
/*    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(context,(err,appString) => {
            if(err) return reject(err);
            const html = ejs.render(template,{
                appString,
                style:context.renderStyles(),
                scripts:context.renderScripts()
            });
            console.log(`${html}`);
            resolve(html);
        })
    })*/
    try{
        const appString = await renderer.renderToString(context);
        const html = ejs.render(template,{
            appString,
            style:context.renderStyles(),
            scripts:context.renderScripts()
        });
        ctx.body = html;
    }catch(err){
        console.log('render err:',err);
    }
});

module.exports = router;

























