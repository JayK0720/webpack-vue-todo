const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';

app.use(static(
    path.resolve(__dirname,'../assets')
));

app.use(async (ctx,next) => {
    try {
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
let pageRouter;

if(isDevelopment){
    pageRouter = require('./router/dev.ssr.js');
}else{
    pageRouter = require('./router/prod.ssr.js');
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

app.listen(3000,() => {
    console.log('app starting at port 3000');
})