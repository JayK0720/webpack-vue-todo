<template>
    <div class="real-app">
        <h4 class="title">This is app page</h4>
        <ul class="tabs">
            <router-link tag='li' class='tab-item' to="/foo">
                <span>Foo</span>
            </router-link>
            <router-link tag='li' class='tab-item' to="/bar">
                <span>Bar</span>
            </router-link>
        </ul>
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
    font-size:20px;
    color:deeppink;
    text-align:center;
    line-height:60px;
    border-bottom:1px solid #c1c1c1;
}
.tabs{
    height:40px;
    display:flex;
    .tab-item{
        flex:1;
        line-height:40px;
        text-align:center;
        border-bottom:1px solid #c1c1c1;
        cursor:pointer;
        &.active{
            color:red;
            border-bottom-color:red;
        }
    }
}
</style>