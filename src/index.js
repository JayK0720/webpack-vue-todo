import Vue from 'vue';
import App from './app.vue';
import './images/background.png';
import './style/index.scss';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render:(h) => h(App)
}).$mount(root);