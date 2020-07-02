import Vue from 'vue';


Vue.component('custom-input',{
    template:`
        <div>
           <input 
                type="text"
                :value="searchText"
                @input="handleInput"
            />
            <p>{{searchText}}</p>
        </div>`
,
    data(){
        return {
            searchText:'hello,custom input'
        }
    },
    methods:{
        handleInput(event){
            this.searchText = event.target.value;
        }
    }
})


Vue.component('base-input',{
    model:{
        prop:'checked',
        event:'change'
    },
    props:['value'],
    template:`<input 
        type="text"
        :value="value"
        @input="handleInput"
    >`,
    methods:{
        handleInput(event){
            this.$emit("input",event.target.value);
        }
    }
})


Vue.component('base-checkbox',{
    props:['checked'],
    model:{
        prop:"checked",
        event:"change"
    },
    template:`<input 
        type="checkbox" 
        :checked="checked" 
        @change="handleChange"
    />`,
    methods:{
        handleChange(event){
            this.$emit('change',event.target.checked)
        }
    }
})



const vm = new Vue({
    el:"#root",
    template:`<div>
        <p>{{message}}</p>
        <input type="text" v-model="searchText">
        <p>{{searchText}}</p>
        <h3>我是custom - input</h3>
        <custom-input/>
        <base-input :value="value" @input="handleInput"/>
        <p>{{value}}</p>
        <p>
            <input type="checkbox" value="kyrie" v-model="players">
            <input type="checkbox" value="durant" v-model="players">
            <input type="checkbox" value="lebron" v-model="players">
            <span>选择的球员是{{players}}</span>
        </p>
    </div>`,
    data:{
        message:'hello world',
        searchText:'searchText',
        name:'hello',
        value:'',
        players:[]
    },
    methods:{
        handleInput(value){
            console.log(value);
            this.value = value;
        }
    }
});
