import Vue from 'vue';
import App from './app.vue';
import axios from 'axios';
import {createRouter} from './router/index.js';
import {createStore} from './store/index.js';
import Meta from 'vue-meta';
import './style/index.scss';
Vue.use(Meta);
Vue.prototype.axios = axios;
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


