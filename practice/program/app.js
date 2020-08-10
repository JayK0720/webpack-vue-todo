import Vue from 'vue'
import App from './app.vue';
import {createRouter} from './router/index';
import {createStore} from './store/index.js';
import {sync} from 'vuex-router-sync';
import './style/normalize.scss';

export default () => {
    const router = createRouter();
    const store = createStore();
    sync(store,router);
    const app = new Vue({
        render:h => h(App),
        router,
        store
    })
    return {app,router,store}
}