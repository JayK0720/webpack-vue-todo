import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);
import axios from 'axios';
import {notification} from '../components/notification/index.js';

function updateTodo(state) {
    return axios({
        method:'post',
        url:"http://localhost:3000/api/todo/update",
        data:{
            todos:JSON.stringify(state.todos)
        },
        withCredentials:true
    })
}

export function createStore(){
    const store = new Vuex.Store({
        state:{
            todos:[],
            username:"",
            loading:false
        },
        mutations:{
            getTodos(state,todos) {
                state.todos = todos;
            },
            addTodo(state,todo){
                state.todos.unshift(todo);
            },
            setUser(state,username){
                state.username = username;
            },
            updateTodo(state,{id,todo}){
                const index = state.todos.findIndex((todo) => todo.id === id);
                state.todos.splice(index,1,todo);
            },
            deleteTodo(state,id) {
                const index = state.todos.findIndex((todo) => todo.id === id);
                state.todos.splice(index,1);
            },
            clearTodo(state){
                const unCompletedTodos = state.todos.filter((todo) => !todo.completed);
                state.todos = unCompletedTodos;
            },
            startLoading(state){
                state.loading = true;
            },
            endLoading(state){
              state.loading = false;
            }
        },
        actions:{
            getAllTodos({commit}) {
                commit('startLoading');
                axios({
                    method:"get",
                    url:"http://localhost:3000/api/todo/all",
                    withCredentials:true
                }).then(response => {
                    const todos = response.data.data;
                    commit('endLoading');
                    commit('getTodos',todos);
                })
            },
            addTodoAsync({commit,state},todo){
                commit('startLoading');
                commit('addTodo',todo);
                updateTodo(state).then(response => {
                    if(response.data.code === 0) {
                        commit('endLoading');
                        notification({
                            content:"今日已新增一个事项哦！"
                        })
                    }
                })
            },
            deleteTodoAsync({commit,state},id){
                commit('deleteTodo',id);
                commit('startLoading');
                updateTodo(state).then(response => {
                    commit('endLoading');
                    if(response.data.code === 0) {
                        notification({
                            content:'今日已完成一件事情,继续加油！'
                        })
                    }
                })
            },
            clearTodoAsync({commit,state}){
                commit('startLoading');
                commit('clearTodo');
                updateTodo(state).then(response => {
                    if(response.data.code === 0){
                        commit('endLoading');
                        notification({
                            content:"已清除所有完成事项!"
                        })
                    }
                })
            },
            toggleTodoAsync({commit,state},{id,todo}){
                commit('startLoading');
                commit("updateTodo",{id,todo});
                updateTodo(state).then(response => {
                    if(response.data.code === 0) {
                        commit('endLoading');
                        if(todo.completed) {
                            notification({
                                content:"已切换为已完成事项"
                            })
                        }else{
                            notification({
                                content:"已切换为代办事项"
                            })
                        }
                    }
                })
            }
        }
    });
    return store;
}