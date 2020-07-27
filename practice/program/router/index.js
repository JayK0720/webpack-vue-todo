import VueRouter from 'vue-router';

export function createRouter(){
    return new VueRouter({
        mode:'history',
        routes:[
            {
                path:'/foo',
                component:() => import('../components/foo.vue')
            },
            {
                path:'/bar',
                component:() => import('../components/bar.vue')
            }
        ]
    })
}