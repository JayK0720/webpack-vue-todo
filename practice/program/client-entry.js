import {createApp} from './app.js';
const {router,app} = createApp();

router.onReady(() => {
    app.$mount('#root')
})