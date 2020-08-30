const {Todo} = require('../util/db.js');
const Router = require('koa-router');
const ERR_CODE = 0;
const responseData = (data) => {
    return {
        code:ERR_CODE,
        data
    }
}
const router = new Router({
    prefix:'/api/todo'
});

// 获取所有的todos 列表
router.get('/all',async ctx => {
    const username = ctx.session.username;
    const query = {username};
    const result = await Todo.find(query);
    console.log('result:',result);
    ctx.body = responseData(result[0].todos);
});

// 添加todos;
router.post('/update',async ctx => {
    const {todos} = ctx.request.body;
    const query = {username:ctx.session.username};
    const result = await Todo.update(query,{$set:{todos:JSON.parse(todos)}});
    if(result) {
        ctx.body = {
            code:0,
            message:'添加成功'
        };
    }
})

module.exports = router;