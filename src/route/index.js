import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router =  new VueRouter({
    mode:'history',
    linkExactActiveClass:'active',
    routes:[
        {
            path:'/',
            name:'todo',
            component:() => import ('../views/todo/todo.vue'),
            meta:{
                title:'首页'
            },
            beforeEnter(to,from,next){
                console.log("before enter invoked");
                next();
            }
        },
        {
            name:'login',
            path:'/login',
            component:() => import ('../views/login/login.vue'),
            meta:{
                title:'登陆'
            },
            beforeEnter(to,from,next){
                console.log('login route before enter invoked');
                next();
            }
        },
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

router.beforeEach((to,from,next) => {
    document.title = to.meta.title;
    console.log('before each invoked');
    next();
})

router.beforeResolve((to,from,next) => {
    console.log('before resolve invoked');
    next();
})

router.afterEach((to,from) => {
    console.log('after each invoked');
});

export default router;