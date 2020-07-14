const Router = require('koa-router');
const axios = require('axios');
const MemoryFS = require('memory-fs');
const webpack = require('webpack');
const VueServerRenderer = require('vue-server-renderer');
const path = require('path');

const config = require('../../build/webpack.config.server.js');
const compiler = webpack(config);

const mfs = new MemoryFS();

compiler.outputFileSystem = mfs;

let bundle;
compiler.watch({},(err,stats) => {
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach((error) => console.log(error));
    stats.warnings.forEach((warn) => console.log(warn));

    const bundlePath = path.join(
        config.output.path,
        'vue-ssr-server-bundle.json'
    );
    bundle = JSON.parse(mfs.readFileSync(bundlePath,'utf-8'));
});

const handleSSR = async ctx => {
    if(!bundle){
        ctx.body = 'please wait a moment';
        return;
    }
    const template = fs.readFileSync(
        path.join(__dirname,'../server.template.ejs','utf-8')
    )
    const render = VueServerRenderer
        .createBundleRenderer(bundle,{
            inject:false
        })
}