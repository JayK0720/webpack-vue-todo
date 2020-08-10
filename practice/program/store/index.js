import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export function createStore(){
    const store = new Vuex.Store({
        state:{
            count:0,
            firstName:'lebron'
        },
        mutations:{
            changeName(state,payload){
                state.firstName = payload.firstName;
            }
        },
        actions:{
            changeName({commit},payload){
                setTimeout(() => {
                    commit('changeName',payload)
                },2000);
            }
        }
    })
    return store;
}