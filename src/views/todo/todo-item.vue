<template>
    <li :class="['todo-item',todo.completed ? 'completed':'']">
        <div class="left-content">
            <input
                type="checkbox"
                v-model="todo.completed"
                class="toggle-todo"
                @click="toggleTodo"
            >
            <p class="text">
                <span class="gesture">{{todo.completed ? '👌' : '👋'}}</span>
                <span>{{todo.text}}</span>
            </p>
        </div>
        <span
            class="delete-btn"
            @click="deleteTodo(todo.id)"
        >x</span>
    </li>
</template>

<script>
    import {notification} from '../../components/notification/index.js'
    export default {
        props:{
            todo:{
                type:Object,
                required:true
            }
        },
        methods:{
            deleteTodo(id){
                this.$emit('del',id);
            },
            toggleTodo(){
                this.todo.completed = !this.todo.completed;
                if(this.todo.completed){
                    notification({
                        content:'已经完成一个代办事项！'
                    })
                }else{
                    notification({
                        content:'已经切换为代办事项！'
                    })
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .todo-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        list-style:none;
        padding:0 20px;
        height:50px;
        border-top:1px solid #ccc;
        .left-content{
            flex:1;
            display:flex;
            align-items:center;
            .text{
                padding-left:15px;
                font-size:18px;
                color:#616161;
                flex:1;
            }
            .gesture{
                padding-right:5px;
                font-size:12px;
            }
        }
        &.completed{
            .text{
                text-decoration:line-through;
                color:#ccc;
            }
        }
        .delete-btn{
            display:none;
        }
        &:hover{
            .delete-btn{
                display:block;
                cursor:pointer;
                color:rgba(175, 47, 47, 0.4);
            }
        }
    }
</style>