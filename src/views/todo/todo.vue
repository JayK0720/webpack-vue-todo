<template>
    <div class="todo-wrapper">
        <div class="input-wrapper">
            <input
                class="add-input"
                type="text"
                placeholder="what next to do?"
                autofocus="true"
                @keyup.enter="handleAddTodo"
            >
        </div>
        <template v-if="todos.length">
            <div class="todo-list">
                <todo-item
                    v-for="(todo,index) in filterTodoList"
                    :key="index"
                    :todo="todo"
                    @del="handleDeleteTodo"
                    @toggle="handleToggleTodo"
                />
            </div>
        </template>
        <template v-else>
            <div class="nothing">
                👌 nothing to do!!!
            </div>
        </template>
        <tabs
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearCompleted="clearCompleted"
        />
        <loading v-show="loading"/>
    </div>
</template>

<script>
    import TodoItem from './todo-item.vue';
    import Tabs from './tabs.vue';
    import {notification} from '../../components/notification/index.js';
    import axios from 'axios';
    import loading from '../../components/loading/index.vue';
    import {mapState,mapActions,mapMutations} from 'vuex'
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
            Tabs,
            loading
        },
        computed:{
            ...mapState(['todos','loading']),
            filterTodoList(){
                if(this.filter === 'all'){
                    return this.todos;
                }
                const completed = this.filter === 'completed';
                return this.todos.filter(todo => todo.completed === completed);
            },
        },
        created(){
            this.getAllTodos();
        },
        methods:{
            ...mapActions(['getAllTodos','addTodoAsync',"deleteTodoAsync","clearTodoAsync",'toggleTodoAsync']),
            ...mapMutations(['setUser']),
            handleAddTodo(event){
                if(!event.target.value.trim()){
                    notification({
                        content:'代办事项不能为空哦！'
                    });
                    return;
                }
                const todo = {id:Date.now(),text:event.target.value,completed:false};
                this.addTodoAsync(todo);
                event.target.value = "";
            },
            handleDeleteTodo(id){
                this.deleteTodoAsync(id);
            },
            toggleFilter(filter){
                this.filter = filter;
            },
            clearCompleted(){
                this.clearTodoAsync()
            },
            handleToggleTodo(todo){
                this.toggleTodoAsync({
                    id:todo.id,
                    todo:Object.assign({},todo,{
                        completed:!todo.completed
                    })
                })
            }
        },
        // beforeRouteEnter里没有this,可以在next回调函数里再调用
        beforeRouteEnter(to,from,next){
            axios({
                url:"http://localhost:3000/api/user/info",
                method:'get',
                withCredentials:true
            }).then(response => {
                if(response.data.code === 0) {
                    const username = response.data.data.username;
                    next((vm) => {
                        vm.isLoading = false;
                        vm.setUser(username);
                    });
                }else{
                    next('/login');
                }
            })
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
        .nothing{
            border-top:1px solid #F1f1f1;
            height:70px;
            line-height:70px;
            text-align:center;
            color:#ccc;
            font-style:italic;
        }
        .input-wrapper{
            height:60px;
            width:600px;
        }
        .add-input{
            width:100%;
            height:60px;
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