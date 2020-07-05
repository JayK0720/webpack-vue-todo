import Vue from 'vue';
import App from './app.vue';
import './style/index.scss';
import router from './route/index.js';
import store from './store/index.js';

new Vue({
    render:(h) => h(App),
    router,
    store
}).$mount("#root");