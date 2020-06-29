import Vue from 'vue';

const vm = new Vue({
    el:'#root',
    template:`<div>
        <p>{{message}}</p>
        <p>{{isActive ? 'active' : 'not active'}}</p>
        <p>{{count}}</p>
        <p>未使用v-html:{{html}}</p>
        <p v-html="html"></p>
        <button @click="handleClick">click me</button>
        <p 
            :style="styleObj"
            :class="[isActive ? 'active' : '']"
            :class="{active:!isActive}"
        >red</p>
    </div>`,
    data:{
        message:"Hello World",
        isActive:false,
        count:0,
        html:'<span>我是一段html代码</span>',
        styleObj:{
            color:'red'
        }
    },
    methods:{
        handleClick(){
            this.count += 1;
            console.log("hello world")
        }
    }
})