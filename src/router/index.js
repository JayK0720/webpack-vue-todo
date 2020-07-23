import VueRouter from 'vue-router'

export function createRouter(){
    return new VueRouter({
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
                    console.log('login router before enter invoked');
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
}




