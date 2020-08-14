import Vue from 'vue';
import Player from './index.vue';

const Profile = Vue.extend(Player);

const vm = new Profile({
    el:'#root',
    data(){
        return {
            firstName:'lebron',
            age:'30'
        }
    }
})

/*var Profile = Vue.extend({
    template:`<p>{{firstName}} - {{lastName}}</p>`,
    data(){
        return {
            firstName:'kyle',
            lastName:'irving'
        }
    },
    mounted(){
        console.log("profile mounted")
    }
})

new Profile({
    mounted(){
        console.log("instance mounted");
    }
})

Vue.component('child-component',{
    template:`<div>我是子组件</div>`,

    beforeCreate(){
        console.log("子组件beforeCreate");
    },
    created(){
        console.log("子组件created");
    },
    beforeMount(){
        console.log("子组件beforeMount");
    },
    mounted(){
        console.log("子组件mounted");
        console.log(this.$parent.$options.name);
    },
    beforeUpdate(){
        console.log("子组件beforeUpdate");
    },
    updated(){
        console.log("子组件updated");
    },
})

const vm = new Vue({
    name:'root',
    el:'#root',
    template:`<div>
        <p>{{message}} -- {{name}}</p>
        <child-component/>
    </div>`,
    data:{
        message:"我是根组件",
    },
    computed:{
        name(){
            return 'kyrie'
        }
    },
    beforeCreate(){
        console.log("根组件beforeCreate",this.name);
    },
    created(){
        console.log("根组件created",this.name);
    },
    beforeMount(){
        console.log("根组件beforeMount");
    },
    mounted(){
        console.log("根组件mounted");
    },
    beforeUpdate(){
        console.log("根组件beforeUpdate");
    },
    updated(){
        console.log("根组件updated");
    },
})*/

