/*const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const path = require('path');
const fs = require('fs');
const VueServerRenderer = require('vue-server-renderer');

const template = fs.readFileSync(
    path.join(__dirname,'./index.template.html'),
    'utf-8'
)

const render = VueServerRenderer.createRenderer({
    template,
})*/

/*
router.get('/', async (ctx) => {
    const app = require( path.join(__dirname,'../../../program/server.bundle.js') ).default();
    ctx.body = await new Promise((resolve,reject) => {
        render.renderToString(app,(err,html) => {
            if(err) {
                reject(err);
            }
            resolve(html);
        })
    })
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000,() => {
    console.log('app starting at port 5000')
})
*/

/*
const Koa = require('koa');
const VueServerRender = require('vue-server-renderer');
const router = require('koa-router')();
const app = new Koa();
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname,'./index.template.html'),'utf-8');
const static = require('koa-static');

const ServerBundle = JSON.parse(fs.readFileSync(
    path.join(__dirname,'./vue-ssr-server-bundle.json'),
    'utf-8'
));

const clientManifest = require(path.join(__dirname,'./vue-ssr-client-manifest.json'));

const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    runInNewContext:false,
    template,
    clientManifest,
})


router.get('/',async ctx => {
    const context = {url:ctx.url};
    console.log(context);
    ctx.body = await new Promise((resolve,reject) => {
        renderer.renderToString(context,(err,html) => {
            if(err) {
                console.log(err);
                return reject(err);
            }
            console.log(html);
            resolve(html);
        })
    })
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000,() => {
    console.log('app starting at port 5000');
});
*/

const express = require('express');
const server = express();
const VueServerRender = require('vue-server-renderer');
const path = require('path');
const fs = require('fs');

const template = fs.readFileSync(
    path.join(__dirname,'./index.template.html'),
    'utf-8'
);

const ServerBundle = JSON.parse(fs.readFileSync(
    path.join(__dirname,'./vue-ssr-server-bundle.json'),
    'utf-8'
));
const clientManifest = require(path.join(__dirname,'./vue-ssr-client-manifest.json'));

const renderer = VueServerRender.createBundleRenderer(ServerBundle,{
    template,
    runInNewContext:false,
    clientManifest
})


server.get('*',function(req,res) {
    const context = {url:req.url};
    renderer.renderToString(context,(err,html) => {
        if(err){
            console.log(err);
            res.send('something went wrong')
        }
        res.send(html);
    })
})

server.listen(5000, () => {
    console.log('app starting at port 5000');
})









