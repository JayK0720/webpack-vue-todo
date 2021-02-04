import Vue from 'vue';
import App from './app.vue';
import './style/reset.css';

let root = document.createElement('div');
document.body.append(root);

let vm = new Vue({
	el:root,
	render:(h) => h(App)
}).$mount(root)



