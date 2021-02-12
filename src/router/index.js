import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default new VueRouter({
	linkActiveClass:'active',
	mode:"history",
	routes:[
		{
			path:"/",
			component:() => import("@/views/todo")
		}
	]
})