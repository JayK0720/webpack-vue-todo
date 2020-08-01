<template>
    <div class="real-app">
        <h2 class="title">I am app page</h2>
        <p>{{message}}</p>
        <button @click="handleChangeMessage">change</button>
        <div class="tab">
            <router-link to="/foo">foo</router-link>
            <router-link to="/bar">bar</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message:'hello welcome my website'
            }
        },
        methods:{
            handleChangeMessage(){
                this.message = 'welcome back';
            }
        }
    }
</script>

<style scoped lang='scss'>
    .title{
        text-align:center;
        line-height:60px;
        color:pink;
    }
    .tab{
        text-align:center;
        a{
            text-decoration:none;
            color:skyblue;
        }
    }
</style>