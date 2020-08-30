const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const todoRouter = require('./router/todo.js');
const userRouter = require('./router/user.js');
const {Mongoose} = require('./util/db.js');
const session = require('koa-session');

const isDevelopment = process.env.NODE_ENV === 'development';
app.use(bodyParser());

app.use(static(
    path.resolve(__dirname,'../assets')
));

app.keys = ['vue ssr demo'];

const config = {
    key: 'koa:sess',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: true,
    sameSite:null,
    secure:false,
};
app.use(session(config, app));

app.use(async (ctx,next) => {
    try {
        ctx.set('Access-Control-Allow-Origin',"http://localhost:8000");
        ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE");
        ctx.set("Access-Control-Allow-Credentials",true);
        ctx.set("Access-Control-Allow-Headers","Content-Type");
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
// 连接数据库;
Mongoose.connect();
let pageRouter;
if(isDevelopment){
    pageRouter = require('./router/dev.ssr.js');
}else{
    pageRouter = require('./router/prod.ssr.js');
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods());
app.use(todoRouter.routes()).use(todoRouter.allowedMethods());
app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(3000,() => {
    console.log('app starting at port 3000');
})