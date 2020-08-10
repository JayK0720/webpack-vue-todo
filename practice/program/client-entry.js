import createApp from './app.js';
const {app,router,store} = createApp();

if(window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE);
}

router.onReady(() => {
    app.$mount('#root');
})
