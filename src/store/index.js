import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

export function createStore(){
    const store = new Vuex.Store({
        state:{
            count:0
        }
    });
    return store;
}