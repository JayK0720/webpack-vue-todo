import Vue from 'vue';
import App from './app.vue';
import {createRouter} from './router/index.js';
import {createStore} from './store/index.js';
import './style/index.scss';


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


