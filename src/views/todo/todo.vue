<template>
    <div class="todo-wrapper">
        <div class="input-wrapper">
            <input
                class="add-input"
                type="text"
                placeholder="what next to do?"
                autofocus="true"
                @keyup.enter="addTodo"
            >
        </div>
        <div class="todo-list">
            <todo-item
                v-for="(todo,index) in filterTodoList"
                :key="index"
                :todo="todo"
                @del="deleteTodo"
            />
            <tabs
                :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @clearCompleted="clearCompleted"
            />
        </div>
    </div>
</template>

<script>
    import TodoItem from './todo-item.vue';
    import Tabs from './tabs.vue';
    import {notification} from '../../components/notification/index.js';
    import {mapState,mapActions} from 'vuex';

    let nextId = 0;
    export default {
        metaInfo:{
            title:'Todo Page'
        },
        data() {
            return {
                filter:"all",
            }
        },
        components:{
            TodoItem,
            Tabs
        },
        computed:{
            ...mapState(['todos']),
            filterTodoList(){
                if(this.filter === 'all'){
                    return this.todos;
                }
                const completed = this.filter === 'completed';
                return this.todos.filter(todo => todo.completed === completed);
            },
        },
        methods:{
            ...mapActions(['getAllTodos']),
            addTodo(event){
                this.todos.unshift({
                    id:nextId++,
                    text:event.target.value.trim(),
                    completed:false
                });
                notification({
                    content:'今日新增一个事项哦！',
                    cancel:'X'
                });
                event.target.value = "";
            },
            deleteTodo(id){
                const index = this.todos.findIndex(todo => todo.id === id);
                const todo = this.todos[index];
                if(todo.completed){
                    notification({
                        content:'已删除一个完成事项!'
                    })
                }else{
                    notification({
                        content:'已删除一个代办事项!'
                    })
                }
                this.todos.splice(index,1);
            },
            toggleFilter(filter){
                this.filter = filter;
            },
            clearCompleted(){
                this.todos = this.todos.filter(todo => !todo.completed);
                notification({
                    content:'已删除所有完成事项！',
                    cancel:'X'
                })
            },
        },
        mounted(){
            this.getAllTodos();
            console.log(this.todos);
        },
        beforeRouteEnter(to,from,next){
            console.log('todo router before enter invoked');
            next();
        },
        beforeRouteUpdate(to,from,next){
            console.log('todo router before update invoked');
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log('todo router before leave invoked');
            next();
        }
    }
</script>

<style scoped lang='scss'>
    .todo-wrapper{
        margin:0 auto;
        width:600px;
        box-shadow:0 0 5px #666;
        background-color:#Fefefe;
        border-radius:4px;
        .input-wrapper{
            height:50px;
            width:600px;
        }
        .add-input{
            width:100%;
            height:50px;
            padding:0;
            border:none;
            outline:none;
            text-indent:1em;
            font-size:20px;
            color:#313131;
            background-color:#Fefefe;
        }
    }
</style>