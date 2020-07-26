const Koa = require('koa');
const app = new Koa();
const pageRouter = require('./router/dev-ssr.js');

app.use(async (ctx,next) => {
    try {
        console.log(`request with path ${ctx.url}`);
        next();
    } catch (err){
        ctx.status = 500;
        if(process.env.NODE_ENV === 'development'){
            ctx.body = err.message;
        }else{
            ctx.body = 'Please wait a moment!';
        }
        console.log(err);
    }
});

app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

app.listen(3000,() => {
    console.log('app listening at port 3000');
})


