import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

export function createRouter(){
    const router = new VueRouter({
        mode:'history',
        linkActiveClass:'active',
        routes:[
            {
                path:'/foo',
                component:() => import('../components/foo'),
                meta:{
                    title:"foo"
                }
            },
            {
                path:'/bar',
                component:() => import('../components/bar'),
                meta:{
                    title:'bar'
                }
            }
        ]
    });
    return router;
}