import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export function createRouter(){
    const router = new VueRouter({
        mode:'history',
        linkExactActiveClass:'active',
        routes:[
            {
                path:'/todo',
                name:'todo',
                component:() => import ('../views/todo/todo.vue')
            },
            {
                name:'login',
                path:'/login',
                component:() => import ('../views/login/login.vue'),
            },
            {
                name:'register',
                path:'/register',
                component:() => import('../views/register/register.vue')
            },
            {
                path:'/*',
                redirect:'/login'
            }
        ],
        scrollBehavior:function(to,from,savedPosition){
            console.log(savedPosition);
            if(savedPosition){
                return savedPosition;
            }else{
                return {x:0,y:0}
            }
        }
    });
    return router;
}




