<template>
    <div class="real-server">
        <div class="cover"></div>
        <vHeader/>
        <transition name="fade">
            <router-view/>
        </transition>
        <button @click="handleNotification">add</button>
    </div>
</template>

<script>
    import vHeader from './layout/v-header.vue';
    import vFooter from './layout/v-footer.vue';
    import {notification} from './components/notification/index.js';
    export default {
        data(){
            return {
                title:'App Page',
                keywords:'vue todo vue-meta',
                description:'this is a todo-list app page'
            }
        },
        metaInfo(){
            return {
                title:this.title,
                meta:[
                    {
                        name:'keywords',
                        content:this.keywords
                    },
                    {
                        meta:'description',
                        content:this.description
                    }
                ]
            }
        },
        components:{
            vHeader,
            vFooter,
        },
        methods:{
            handleNotification(){
                notification({
                    content:'hello ',
                    cancel:'关闭',
                    handleCancel(){
                        console.log('关闭');
                    }
                })
            }
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