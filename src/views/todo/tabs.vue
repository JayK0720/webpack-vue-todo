<template>
    <div class="footer-wrapper">
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
            <span
                v-for="(state,index) in states"
                :key="index"
                :class="['tab-item',filter === state ? 'active':'']"
                @click="toggleFilter(state)"
            >{{state}}</span>
        </span>
        <span
            @click="clearCompleted"
            class="clear-completed"
        >clear-completed</span>
    </div>
</template>

<script>
    export default {
        props:{
            filter:{
                type:String,
                required:true
            },
            todos:{
                type:Array,
            }
        },
        data() {
            return {
                states:['all','active','completed']
            }
        },
        computed:{
            unFinishedTodoLength(){
                return this.todos.filter(todo => !todo.completed).length;
            }
        },
        methods:{
            clearCompleted(){
                this.$emit('clearCompleted')
            },
            toggleFilter(filter){
                this.$emit('toggle',filter);
            }
        }
    }
</script>

<style scoped lang='scss'>
    .footer-wrapper{
        padding:0 15px;
        display:flex;
        height:50px;
        justify-content:space-between;
        align-items:center;
        font-size:16px;
        color:#717171;
        .tabs{
            .tab-item{
                padding:0 10px;
                cursor:pointer;
                &.active{
                    color:darkred;
                    font-weight:bold;
                }
            }
        }
        .clear-completed{
            cursor:pointer;
        }
    }
</style>