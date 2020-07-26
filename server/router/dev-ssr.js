const router = require('koa-router')();
const webpack = require('webpack');
const MemoryFileSystem = require('memory-fs');
const axios = require('axios');
const VueServerRenderer = require('vue-server-renderer');
const config = require('../../build/webpack.config.server.js');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const compiler = webpack(config);
const mfs = new MemoryFileSystem();
compiler.outputFileSystem = mfs;

let bundle;
// 监听服务端compiler，每次打包后 重新读取bundle。
compiler.watch({},(err,stats) => {
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach((error) => console.log(error));
    stats.warnings.forEach((warning) => console.log(warning));

    let bundlePath = path.join(
        config.output.path,
        'vue-ssr-server-bundle.json'
    );
    bundle = JSON.parse(mfs.readFileSync(bundlePath,'utf-8'))
    console.log('new bundle generated');
});

router.get("/",async (ctx) => {
    if(!bundle){
        ctx.body = 'please wait a moment';
        return;
    };
    ctx.headers['Content-Type'] = 'text/html';

    const clientManifestResponse = await axios.get('http://127.0.0.1:9000/vue-ssr-client-manifest.json');
    const clientManifest = clientManifestResponse.data;
    var renderer = VueServerRenderer.createBundleRenderer(bundle,{
        inject:false,
        clientManifest
    });

    const context = {
        url: ctx.path
    }
    // 这里无需传入一个应用程序，因为在执行bundle时已经自动创建过。
    const appString = await renderer.renderToString(context);
    const html = ejs.render(fs.readFileSync(path.join(__dirname,'../server.template.ejs','utf-8')),
        {
            appString,
            style:context.renderStyles(),
            scripts:context.renderScripts()
        }
    );
    console.log(html);
    ctx.body = html;
})

module.exports = router;















