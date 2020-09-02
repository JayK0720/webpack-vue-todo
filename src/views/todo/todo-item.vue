<template>
    <li :class="['todo-item',todo.completed ? 'completed':'']">
        <div class="left-content">
            <input
                type="checkbox"
                class="toggle-todo"
                v-model="todo.completed"
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
            toggleTodo(event){
                this.$emit('toggle',this.todo);
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
        border-top:1px solid #e1e1e1;
        &:hover{
            background-color:#eee;
            cursor:pointer;
        }
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