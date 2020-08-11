const Koa = require('koa');
const isDevelopment = process.env.NODE_ENV === 'development';
const app = new Koa();
const pageRouter = require('./router/index.js');

app.use(async (ctx,next) => {
    try{
        console.log(`request url ${ctx.url}`);
        next();
    }catch(err){
        ctx.status = 500;
        if(isDevelopment){
            ctx.body = err.message;
        }else{
            ctx.body = 'please wait a moment!'
        }
    }
});

app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

app.listen(3000,() => {
    console.log('app listening at port 3000');
})