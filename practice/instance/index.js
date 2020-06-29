import Vue from 'vue';

const vm = new Vue({
    template:`<p>Hello,Vue.js -- {{text}} obj.a {{obj.a}}</p>`,
    data:{
        text:0,
        obj:{
        }
    },
    props:{
        name:{
            type:String,
        }
    },
    watch:{
        text(newValue,oldValue){
            console.log(`${newValue}--${oldValue}`)
        }
    }
})
vm.$mount('#root')

setInterval(() => {
    vm.$data.text += 1;
},1000);

// $data
console.log("$data",vm.$data);
console.log("$children",vm.$children);
console.log("$parent",vm.$parent);
console.log("$el",vm.$el);
console.log("$refs",vm.$refs);
console.log("$root",vm.$root);
console.log("$props",vm.$props);


// $watch
/*const unWatch = vm.$watch('text',(newValue,oldValue) => {
    console.log(`${newValue}-${oldValue}`);
});*/

/*
setInterval(() => {
    unWatch();
},2000);*/


let i = 0;
setInterval(() => {
    i+=1;
    vm.$data.obj.a = i;
    vm.$set(vm.$data.obj,"a",i);
},1000);