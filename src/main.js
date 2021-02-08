import Vue from 'vue';
import App from './app.vue';
import router from './router';
import '@/style/reset.css';
import {Button,message} from 'ant-design-vue';

Vue.component(Button.name,Button);
Vue.prototype.$message = message;

let root = document.createElement("div");
document.body.append(root);
new Vue({
	render:(h) => h(App),
	router
}).$mount(root)




