import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import {createRouter} from './router/index.js';

Vue.use(VueRouter);

export default () => {
    const router = createRouter();
    const app = new Vue({
        router,
        render:h => h(App)
    });
    return {app,router}
}