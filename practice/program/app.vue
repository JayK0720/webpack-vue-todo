<template>
    <div class="real-app">
        <h2 class="title">I am app page</h2>
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
            return {}
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