import Vue from 'vue';

Vue.component('alert-box',{
    template:`<div>
        <strong>Error!</strong>
        <slot></slot>
    </div>`
})

const vm = new Vue({
    el:"#root",
    template:`<div>
        <p>{{message}}</p>
        <alert-box>Something bad happend</alert-box>
    </div>`,
    data:{
        message:'hello world',
    },
});
