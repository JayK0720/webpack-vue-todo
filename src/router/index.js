import VueRouter from 'vue-router'

export function createRouter(){
    return new VueRouter({
        mode:'history',
        linkExactActiveClass:'active',
        routes:[
            {
                path:'/',
                name:'todo',
                component:() => import ('../views/todo/todo.vue')
            },
            {
                name:'login',
                path:'/login',
                component:() => import ('../views/login/login.vue'),
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
}




