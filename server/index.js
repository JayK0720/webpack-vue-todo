const Koa = require('koa');
const app = new Koa();

const isDevelopment = process.env.NODE_ENV === 'development';

app.use(async (ctx,next) => {
    try {
        console.log(`request with path ${ctx.path}`);
        next();
    } catch (err){
        ctx.status = 500;
        if(isDevelopment){
            ctx.body = err.message;
        }else{
            ctx.body = 'Please try again later'
        }
    }
})
