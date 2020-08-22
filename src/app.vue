<template>
    <div class="real-server">
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
        data(){
            return {
                title:'App Page',
                keywords:'vue todo vue-meta',
                description:'this is a todo-list app page',
                tabs:[
                    {label:'all'},{label:'active',label:'completed'}
                ]
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
        methods:{

        },
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
        background-color:#f9f9f9;
    }
</style>