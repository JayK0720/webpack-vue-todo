import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
import {mapMutations,mapState,mapActions,mapGetters} from 'vuex';
import player from './player/index.js';

const store = new Vuex.Store({
    state:{
        count:0
    },
    getters:{
        doubleCount(state){
            return state.count * 4;
        }
    },
    mutations:{
        increment(state,payload){
            state.count += payload;
        },
    },
    actions:{
        incrementAsync({commit,dispatch},payload){
            setTimeout(() => {
                commit('increment',payload);
            },2000)
        }
    },
    modules:{
        player
    }
});


if(module.hot){
    module.hot.accept(
        ['./player/index.js'],
        () => {
            const newPlayer = require('./player/index.js').default;
            store.hotUpdate({
                modules:{
                    player:newPlayer
                }
            })
        })
}

store.subscribe((mutation,state) => {
    console.log(mutation.type,mutation.payload);
});

store.subscribeAction((mutation,state) => {
    console.log(mutation.type,mutation.payload);
})

Vue.component('base-layout',{
    template:`<div>
        <p>count:{{this.$store.state.count}}</p>
        <button @click="handleIncrement">+1</button>
        <button @click="handleDecrease">-2</button>
        <button @click="handleIncrementAsync">async+1</button>
        <div>
            <ul>
                <li v-for="(player,index) in this.player" :key="index">
                    <span>号码：{{player.number}}</span>
                    --
                    <span>姓名: {{player.name}}</span>
                </li>
            </ul>
            <ol>
                <li>球衣号码相同的球员</li>
                <li v-for="(player,index) in this.filterPlayer" :key="index">
                    {{player.name}}
                </li>
            </ol>
            <button @click="handleAddPlayer">增加球员</button>
            <button @click="handleAddPlayerAsync">异步增加球员</button>
            <button @click="handleRemovePlayer">减少球员</button>
        </div>
    </div>`,
    computed:{
        ...mapState({
            player:state => state.player.player,
            count:state => state.count
        }),
        ...mapGetters(['filterPlayer'])
    },
    mounted(){
        console.log(this.player);
    },
    methods:{
        ...mapMutations(['increment','addPlayer','removePlayer']),
        ...mapActions(['addPlayerAsync']),
        handleAddPlayer(){
            this.addPlayer({
                number:0,
                name:'Lillard'
            })
        },
        handleAddPlayerAsync(){
            this.addPlayerAsync({
                number:3,
                name:'Wade'
            })
        },
        handleRemovePlayer(){
            this.removePlayer(this.count);
        },
        handleIncrement(){
            this.$store.commit('increment',1);
        },
        handleDecrease(){
            this.increment(-2);
        },
        handleIncrementAsync(){
            this.$store.dispatch('incrementAsync',1);
        }
    }
})


new Vue({
    template:`<div>
        <p>{{message}}</p>
        <base-layout/>
    </div>`,
    data:{
        message:'Hello,Vuex'
    },
    store
}).$mount("#root")