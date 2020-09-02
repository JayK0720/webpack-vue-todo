const Router = require('koa-router');
const {Email,Todo} = require('../util/db.js');
console.log(Email.transpoter);

const router = new Router({
    prefix:'/api/user'
});

router.use(async (ctx,next) => {
    console.log(ctx.url);
    await next();
})

// 邮箱验证接口
router.get('/verify',async ctx => {
    const verify = Math.random().toString().substring(2,6);
    const {email} = ctx.request.query;
    ctx.session.email = email;
    ctx.session.verify = verify;
    let info = await Email.transporter.sendMail({
        from:'2165767230@qq.com',
        to:email,
        subject:'todo-list 验证码',
        text:'验证码:'+ verify
    })
    if(info) {
        ctx.body = {
            code:0,
            message:'发送成功'
        };
    }
});
// 注册接口
router.post('/register',async ctx => {
    const {username,email,verify,password} = ctx.request.body;
    // 判断提交的邮箱和 邮箱验证码是否匹配
    if(email !== ctx.session.email || verify !== ctx.session.verify) {
        ctx.body = {
            code:-1,
            message:'验证码错误'
        }
    }
    const hasUser = await Todo.find({username});
    if(hasUser.length) {
        ctx.body = {
            code:-2,
            message:'该用户名已注册！'
        };
        return;
    }
    const hasEmail = await Todo.find({email});
    if(hasEmail.length){
        ctx.body = {
            code:-3,
            message:'该邮箱已经注册!'
        }
        return;
    }
    const user = new Todo({
        username,
        email,
        password,
        todos:[]
    });
    const result = await user.save();
    if(result) {
        ctx.body = {
            code:0,
            message:'注册成功'
        }
    }
});
// 登陆接口
router.post('/login', async (ctx) => {
    const {username,password} = ctx.request.body;
    let result = await Todo.find({username,password});
    if(result.length) {
        //  登陆成功的时候,保存当前的用户名!
        ctx.session.username = username;
        ctx.body = {
            code:0,
            message:'登陆成功'
        }
    }else{
        ctx.body = {
            code:-1,
            message:'登陆失败'
        }
    }
})
// 判断当前是否登陆
router.get('/info',async ctx => {
    if(ctx.session.username){
        ctx.body = {
            message:'获取用户信息成功',
            code:0,
            data:{
                username:ctx.session.username
            }
        }
    }else{
        ctx.body = {
            message:'获取用户信息失败',
            code:-1
        }
    }
});

router.post('/logout',async ctx => {
    ctx.session.username = "";
    ctx.body = {
        code:0,
        message:"退出成功"
    }
})

module.exports = router;