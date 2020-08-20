import Vue from 'vue';


Vue.component('submit-button',{
    template:`<button>
        <slot>submit</slot>
    </button>`
});

// 具名插槽
Vue.component('layout',{
    template:`<div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot></slot>
        </footer>
    </div>`
})

// 作用域插槽，绑定在<slot>元素上的attribute被称为插槽prop。
Vue.component('current-user',{
    data(){
        return {
            user:{
                firstName:'kyrie',
                lastName:'irving'
            }
        }
    },
    template:`<div>
        <p>
            <slot :user="user">
                {{user.firstName}}
            </slot>
        </p>
    </div>`
});


new Vue({
    template:`<div>
        <p>Hello World</p>
        <submit-button>Hello</submit-button>
        <layout>
            <template v-slot:header>
                <h3>Here might be a page title</h3>
            </template>
            <template v-slot:main>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>
            <template v-slot:default>
                <p>Here's some contact info</p>
            </template>
        </layout>
        <current-user>
            <template v-slot:default="defaultProps">
                {{defaultProps.user.lastName}}
            </template>
        </current-user>
    </div>`
})


Vue.component('todo-list',{
    template:`
        <ul>
            <li v-for="todo in todos">
                <slot name="todo" :todo="todo">
                    {{todo.firstName}} --- {{todo.lastName}}
                </slot>
            </li>
        </ul>
    `,
    props:{
        todos:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
});


new Vue({
    el:'#root',
    data(){
        return {
            playerList:[
                {firstName:'kyrie',lastName:'irving'},
                {firstName:'lebron',lastName:'james'},
                {firstName:'kevin',lastName:'durant'}
            ]
        }
    },
    template:`<div>
        <todo-list :todos="playerList">
            <template v-slot:todo="slotProps">
                {{slotProps.todo.firstName}}
            </template>
        </todo-list>
    </div>`
})




