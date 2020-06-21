<template>
    <li :class="['todo-item',todo.completed ? 'completed':'']">
        <div class="left-content">
            <input
                type="checkbox"
                v-model="todo.completed"
                class="toggle-todo"
                @click="toggleTodo"
            >
            <p class="text">{{todo.text}}</p>
        </div>
        <span
            class="delete-btn"
            @click="deleteTodo(todo.id)"
        >x</span>
    </li>
</template>

<script>
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
                this.todo.completed = true;
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
                padding-left:10px;
                flex:1;
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
            }
        }
    }
</style>