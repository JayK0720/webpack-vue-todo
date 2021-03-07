import Vue from 'vue'
import './css/reset.scss';
import App from './App';
import router from './router'

new Vue({
	router,
	render:h => h(App),
}).$mount("#root")
