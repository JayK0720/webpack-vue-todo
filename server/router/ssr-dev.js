const webpack = require('webpack');
const axios = require('axios');
const MemoryFileSystem = require('memory-fs');
const VueServerRenderer = require('vue-server-renderer');
const mfs = new MemoryFileSystem();
const config = require('../../build/webpack.config.server.js');
const path = require('path');
const compiler = webpack(config);
const fs = require('fs');
const render = require('./server-render.js');
const router = require('koa-router')();

compiler.outputFileSystem = mfs;

let bundle;
compiler.watch({},(err,stats) => {
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach((error) => console.log(error));
    stats.warnings.forEach((warning) => console.log(warning));

    const bundlePath = path.join(webpack.output.path,'vue-ssr-server-bundle.json');
    bundle = JSON.parse(mfs.readFileSync( bundlePath,'utf-8' ));
});


const handleSsr = async (ctx) => {
    if(!bundle){
        ctx.body = 'please wait a moment';
        return;
    }
    const clientManifestResponse = await axios.get('http://127.0.0.1:9000/vue-ssr-client-manifest.json');
    const clientManifest = clientManifestResponse.data;

    const template = fs.readFileSync(
        path.join(__dirname,'../server.template.ejs','utf-8')
    );
    const renderer = VueServerRenderer.createBundleRenderer(bundle,{
        inject:false,
        clientManifest
    });
    render(ctx,renderer,template);
}

router.get("*", handleSsr);

module.exports = router;
























