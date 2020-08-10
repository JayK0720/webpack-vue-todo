<template>
    <div class="content">
        <p class="name">This is {{name}} page</p>
        <div>
            <span>sore中的数据{{firstName}}</span>
            <button @click="handleChangeName">changeName</button>
        </div>
        <button @click="handleAdd">click {{count}} times</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'foo',
                count:0
            }
        },
        asyncData(store){
            console.log('asyncData');
            return store.dispatch('changeName',{name:'kyrie'})
        },
        computed:{
            firstName(){
                return this.$store.state.firstName
            }
        },
        methods:{
            handleAdd(){
                this.count += 1;
            },
            handleChangeName(){
                this.$store.dispatch('changeName',{firstName:'kyrie'})
            }
        }
    }
</script>

<style scoped lang='scss'>
    .content{
        text-align:center;
        font-size:20px;
        padding-top:40px;
    }
</style>