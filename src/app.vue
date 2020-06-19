<template>
    <div class="real-app">
        <div class="cover"></div>
        <vHeader/>
        <todo/>
        <vFooter/>
    </div>
</template>

<script>
    import vHeader from './todo/v-header.vue';
    import vFooter from './todo/v-footer.vue';
    import todo from './todo/todo.vue';
    export default {
        data() {
            return {

            }
        },
        components:{
            vHeader,
            vFooter,
            todo
        }
    }
</script>

<style lang="scss" scoped>
    .real-app{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        .cover{
            position:absolute;
            left:0;
            right:0;
            top:0;
            bottom:0;
            background-color:#777;
            opacity:0.3;
            z-index:-1;
        }
    }
</style>