<template>
    <div class="real-server">
        <div class="cover"></div>
        <vHeader/>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import vHeader from './layout/v-header.vue';
    import vFooter from './layout/v-footer.vue';
    export default {
        components:{
            vHeader,
            vFooter,
        },
    }
</script>

<style lang="scss" scoped>
    .real-server{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        overflow:auto;
        .cover{
            position:absolute;
            left:0;
            right:0;
            top:0;
            opacity:0.3;
            z-index:-1;
        }
        .fade-enter-active,.fade-leave-active{
            transition:opacity .3s;
        }
        .fade-enter,.fade-leave-to{
            opacity:0;
        }
    }
</style>