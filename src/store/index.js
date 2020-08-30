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
            username:""
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
        },
        actions:{
            getAllTodos({commit}) {
                axios({
                    method:"get",
                    url:"http://localhost:3000/api/todo/all",
                    withCredentials:true
                }).then(response => {
                    const todos = response.data.data;
                    commit('getTodos',todos);
                })
            },
            addTodoAsync({commit,state},todo){
                updateTodo(state).then(response => {
                    console.log('add',response);
                    if(response.data.code === 0) {
                        commit('addTodo',todo);
                        notification({
                            content:"今日已新增一个事项哦！"
                        })
                    }
                })
            },
            deleteTodoAsync({commit,state},id){
                updateTodo(state).then(response => {
                    console.log("delete",response);
                    if(response.data.code === 0) {
                        commit('deleteTodo',id);
                        notification({
                            content:'今日已完成一件事情,继续加油！'
                        })
                    }
                })
            },
            clearTodoAsync({commit,state}){
                updateTodo(state).then(response => {
                    if(response.data.code === 0){
                        commit('clearTodo');
                        notification({
                            content:"已清除所有完成事项!"
                        })
                    }
                })
            },
            toggleTodoAsync({commit,state},{id,todo}){
                updateTodo(state).then(response => {
                    if(response.data.code === 0) {
                        commit("updateTodo",{id,todo});
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