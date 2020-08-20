import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);
import axios from 'axios';
export function createStore(){
    const store = new Vuex.Store({
        state:{
            todos:[],
        },
        mutations:{
            setTodo(state,payload) {
                state.todos = payload.todos
            }
        },
        actions:{
            getAllTodos({commit}) {
                axios.get('http://127.0.0.1:3000/api/todo/all').then(({data:response}) => {
                    commit('setTodo',{todos:response.data});
                })
            }
        }
    });
    return store;
}