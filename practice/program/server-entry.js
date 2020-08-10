import createApp from './app.js';

export default (context) => {
    return new Promise((resolve,reject) => {
        const {router,app,store} = createApp();
        router.push(context.url);
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents();
            if(matchedComponents.length === 0){
                return reject({code:404})
            }
            Promise.all( matchedComponents.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        router: router.currentRoute
                    })
                }
            })).then(() => {
                context.state = store.state;
                resolve(app);
            })
        },reject);
    })
}