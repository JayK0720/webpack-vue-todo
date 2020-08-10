import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app.vue';
import {createRouter} from './router/index.js';
import {createStore} from './store/index.js';
import './style/index.scss';

Vue.use(Vuex);
Vue.use(VueRouter);

export default () => {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        store,
        render:h => h(App)
    });
    return {app,store,router}
}


