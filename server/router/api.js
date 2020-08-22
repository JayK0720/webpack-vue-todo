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
    const result = await Todo.find();
    ctx.body = responseData(result.todos);
});

router.post('/add',async ctx => {
    const {id,completed,text} = ctx.request.body;
    const todo = new Todo({
        id,
        completed,
        text
    })
    todo.save();
    ctx.body = responseData({
        message:'上传成功'
    })
})

router.put('/update/:id',async ctx => {
    const {id} = ctx.params;
})

router.get('/delete/:id',async ctx => {
    const {id} = ctx.params;
    const result = await Todo.findOne({id});
    if(result) {
        await Todo.deleteOne({id});
        ctx.body = responseData({
            message:'删除成功'
        });
    }else{
        ctx.body = responseData({
            message:'没有查询到要删除的数据'
        })
    }
});

router.get('/delall',async ctx => {
    const {deleteCount} = await Todo.deleteMany({});
    if(deleteCount) {
        ctx.body = responseData({
            message:'删除数据成功!'
        });
    }else{
        ctx.body = responseData({
            message:'没有可以删除的数据啦！'
        })
    }
})

module.exports = router;