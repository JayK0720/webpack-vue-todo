import Vue from 'vue';

const vm = new Vue({
    el:"#root",
    data:{
        message:'hello world'
    },
    // template:`<div><p>{{message}}</p></div>`,
    render(h){
        console.log('render function invoked');
        return h('div',{},this.message);
    },
    beforeCreate(){
        console.group("beforeCreate");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    created(){
        console.group("created");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    beforeMount(){
        console.group("beforeMount");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    mounted(){
        console.group("mounted");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    beforeUpdate(){
        console.group("beforeUpdate");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    updated(){
        console.group("updated");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    beforeDestroy(){
        console.group("beforeDestroy");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    },
    destroyed(){
        console.group("destroyed");
        console.log("message",this.message,);
        console.log('el',this.$el);
        console.groupEnd();
    }
});

setTimeout(() => {
    vm.$data.message = 'hello vue.js';
},1000);

setTimeout(() => {
    vm.$destroy();
},4000)