import Vue from 'vue';
import App from './app.vue';
import {createRouter} from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function createApp(){
    const router = createRouter();
    const app = new Vue({
        render:h => h(App),
        router
    });
    return {app,router}
}