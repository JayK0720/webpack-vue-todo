import createApp from './app.js';
// 服务器只会启动一次，每次客户端访问都返回一个新的Vue实例。
export default (context) => {
/*    return new Promise((resolve,reject) => {
        const {app,router} = createApp();
        router.push(context.url);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            resolve(app);
        },reject)
    })*/
    const {router,app} = createApp();
    router.push(context.url);
    return app;
}
