import createApp from './app.js';
// 服务器只会启动一次，每次客户端访问都返回一个新的Vue实例。
export default (context) => {

    const {app,router} = createApp();
    return app;
}
