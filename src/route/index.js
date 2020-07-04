import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    linkExactActiveClass:'active',
    routes:[
        {
            path:'/',
            component:() => import ('../views/todo/todo.vue')
        },
        {
            path:'/login',
            component:() => import ('../views/login/login.vue')
        },
    ]
})