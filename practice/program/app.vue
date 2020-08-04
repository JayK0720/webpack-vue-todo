<template>
    <div>
        <p class="title">This is app page</p>
        <div class="tabs">
            <router-link tag='div' to="/foo" class="tab-item">
                <span>Foo</span>
            </router-link>
            <router-link tag='div' to="/bar" class="tab-item">
                <span>Bar</span>
            </router-link>
        </div>
        <span>{{message}}</span>
        <button @click="handleChangeMessage">click me</button>
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message:'hello world'
            }
        },
        methods:{
            handleChangeMessage(){
                this.message = 'hello vue.js'
            }
        }
    }
</script>

<style scoped lang='scss'>
    body,html,p{
        padding: 0;
        margin: 0;
    }
    .title{
        font-size:20px;
        color:seagreen;
        text-align:center;
        border-bottom:1px solid #ccc;
        line-height:60px;
    }
    .tabs{
        display:flex;
        height:40px;
        line-height:40px;
        border-bottom:1px solid #ccc;
        .tab-item{
            flex:1;
            text-align:center;
            &.active{
                color:red;
            }
        }
    }

</style>