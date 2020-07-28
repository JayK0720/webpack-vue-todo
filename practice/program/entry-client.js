import createApp from './app.js';

const {app,router} = createApp();
// 客户端无需暴露工厂函数,因为客户端可以被多次访问，即多次执行，每次执行返回的都是一个新的Vue项目实例子。
router.onReady(() => {
    app.$mount('#root')
})
