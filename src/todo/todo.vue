<template>
    <div class="todo-wrapper">
        <input
            class="add-input"
            type="text"
            placeholder="接下去要做什么?"
            autofocus="true"
            @keyup="addTodo"
        >
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods:{
            addTodo(){

            }
        }
    }
</script>

<style scoped lang='scss'>
    .todo-wrapper{
        margin:0 auto;
        width:600px;
        box-shadow:0 0 5px #666;
        background-color:#fff;
        .add-input{
            height:50px;
            border:none;
            outline:none;
            text-indent:1em;
            font-size:20px;
            color:#212121;
        }
    }
</style>