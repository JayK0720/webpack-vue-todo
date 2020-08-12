const Koa = require('koa');
const app = new Koa();
const isDevelopment = process.env.NODE_ENV === 'development';
const pageRouter = require('./router/index.js');

app.use(async (ctx,next) => {
    try {
        console.log(`request path: ${ctx.url}`);
        await next();
    }catch(err){
        console.log(err);
        ctx.status = 500;
        if(isDevelopment) {
            ctx.body = err.message;
            console.log('err message',err.message);
        }else{
            ctx.body = 'please try again!';
        }
    }
});

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

app.listen(3000,() => {
    console.log('app starting at port 3000');
})