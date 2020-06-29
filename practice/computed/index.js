import Vue from 'vue';

const vm = new Vue({
    el:'#root',
    template:`<div>
        <p>{{message}}</p>
        <p>{{firstName + " " + lastName}}</p>
        <p>FullName:{{fullName}}</p>
        <p>{{getName()}}</p>
        <button @click="handleClick">{{count}}</button>
        <button @click="handleChangeFirstName">changeName</button>
        <div>
            <p><input type="text" v-model="province"></p>
            <p><input type="text" v-model="city"></p>
        </div>
        <p>{{province}}省-{{city}}市</p>
        <p><input type="text" v-model="obj.a"></p>
    </div>`,
    data:{
        message:"Hello World",
        firstName:"kyrie",
        lastName:"irving",
        count:0,
        province:'安徽',
        city:"合肥",
        obj:{
            a:123
        }
    },
    computed:{
        fullName(){
            console.log('computed');
            return `${this.firstName}-${this.lastName}`
        }
    },
    mounted(){
/*        this.obj = {
            a:'345'
        }*/
    },
    watch:{
        province:{
            handler(newProvince,oldProvince){
                console.log(newProvince,oldProvince);
            },
            immediate:true
        },
        city:{
            handler(newCity,oldCity){
                console.log(newCity,oldCity);
            },
            immediate:true
        },
/*        obj:{
            handler(value,oldValue){
                console.log('obj.a changed');
                console.log(value,oldValue);
            },
            deep:true,
            immediate:true
        }*/
        "obj.a":{
            handler(value,oldValue){
                console.log(value,oldValue);
            }
        }
    },
    methods:{
        getName(){
            console.log('getName invoked');
            return `${this.firstName}-${this.lastName}`;
        },
        handleClick(){
            this.count += 1;
        },
        handleChangeFirstName(){
            this.firstName = 'kyle';
        }
    }
})