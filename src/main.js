import Vue from 'vue';
import App from './app.vue';
import router from './router';
import '@/common/style/reset.css';
import {Button,message,Modal} from 'ant-design-vue';

Vue.component(Button.name,Button);
Vue.use(Modal);
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;
new Vue({
	el:"#root",
	render:(h) => h(App),
	router
}).$mount(root)




