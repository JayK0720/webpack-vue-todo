<template>
    <div class="real-app">
        <h1>I am app page</h1>
        <router-link to="/foo">foo</router-link>
        <router-link to="/bar">bar</router-link>
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

</style>