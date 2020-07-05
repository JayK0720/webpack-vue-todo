<template>
    <div class="todo-wrapper">
        <div class="input-wrapper">
            <input
                class="add-input"
                type="text"
                placeholder="接下去要做什么?"
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

    let nextId = 0;
    export default {
        data() {
            return {
                todos:[],
                filter:"all"
            }
        },
        components:{
            TodoItem,
            Tabs
        },
        computed:{
            filterTodoList(){
                if(this.filter === 'all'){
                    return this.todos;
                }
                const completed = this.filter === 'completed';
                return this.todos.filter(todo => todo.completed === completed);
            }
        },
        methods:{
            addTodo(event){
                this.todos.unshift({
                    id:nextId++,
                    text:event.target.value.trim(),
                    completed:false
                })
                event.target.value = "";
            },
            deleteTodo(id){
                const index = this.todos.findIndex(todo => todo.id === id);
                this.todos.splice(index,1);
            },
            toggleFilter(filter){
                this.filter = filter;
            },
            clearCompleted(){
                this.todos = this.todos.filter(todo => !todo.completed);
            }
        },
        beforeRouteEnter(to,from,next){
            console.log('todo route before enter invoked');
            next();
        },
        beforeRouteUpdate(to,from,next){
            console.log('todo route before update invoked');
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log('todo route before leave invoked');
            next();
        }
    }
</script>

<style scoped lang='scss'>
    .todo-wrapper{
        margin:0 auto;
        width:600px;
        box-shadow:0 0 5px #666;
        background-color:#fff;
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
            color:#212121;
        }
    }
</style>