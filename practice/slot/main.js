import Vue from 'vue';


Vue.component('todo-list', {
    props: {
        todos: {
            type: Array,
        }
    },
    template: `
        <ul>
            <li
                v-for="todo in todos"
                :key="todo.id"
            >
                <slot name="todo" :todo="todo">{{todo.text}}</slot>
            </li>
        </ul>`,
});

new Vue({
    template:`<div>
        <p>{{message}}</p>
        <todo-list :todos="todos">
            <template v-slot:todo="slotProps">
                {{slotProps.todo.text}}
            </template>
        </todo-list>
    </div>`,
    data:{
        message: 'hello world!',
        todos:[
            {
                id:1,
                text:'hello,vue.js'
            },
            {
                id:2,
                text:'hello react.js'
            },
            {
                id:3,
                text:'hello angular.js'
            }
        ]
    }
}).$mount('#root')