import Vue from 'vue';

const vm = new Vue({
    el:'#root',
    template:`<div>
        <p>{{message}}</p>
        <p v-text="message"></p>
        <p v-show="show">show text</p>
        <p v-show="!show">show text</p>
        <ul>
            <li 
                v-for="(player,index) in players" 
                :key="player"
            >{{player}}</li>
        </ul>
        <ul>
            <li 
                v-for="(val,key,index) in player"
                :key="val"
            >
                <span>value:{{val}}</span>
                <span>key:{{key}}</span>
                <span>index:{{index}}</span>
            </li>
        </ul>
        <input type="text" v-model="message">
        <p>单行文本:Message is: {{message}}</p>
        <p>
            <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
            <input type="checkbox" id="john" value="john" v-model="checkedNames">
            <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
        </p>
        <p>selected:{{checkedNames}}</p>
        <p>
            <input type="radio" value="male" v-model="sex">
            <input type="radio" value="female" v-model="sex">
        </p>
        <p>selected:{{sex}}</p>
        <p>
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option value="apple">apple</option>
                <option value="huawei">huawei</option>
                <option value="mi">mi</option>
            </select>
            <span>selected:{{selected}}</span>
        </p>
    </div>`,
    data:{
        message:"Hello World",
        show:false,
        players:['durant','wade','lebron','kyrie'],
        player:{
            firstName:'kyrie',
            lastName:'irving',
            age:28
        },
        checkedNames:[],
        sex:'male',
        selected:""
    }
})