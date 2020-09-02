<template>
    <div class="real-server">
        <p class="username">
            hello ,
            <span class="user-text">{{username}} !</span>
            <span
                class="log-out"
                @click="handleLogout"
            >登出</span>
        </p>
        <vHeader/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import vHeader from './layout/v-header.vue';
    import vFooter from './layout/v-footer.vue';
    import {mapState} from 'vuex';
    import axios from 'axios';
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
        computed:{
            ...mapState(['username'])
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
            handleLogout() {
                axios.post('http://localhost:3000/api/user/logout')
                .then(response => {
                    if(response.data.code === 0) {
                        this.$router.push('/login');
                    }
                })
            }
        }
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
        min-width:940px;
        .username{
            position:absolute;
            right:20px;
            top:20px;
        }
        .user-text{
            font-weight:bold;
        }
        .log-out{
            padding-left:5px;
            color:#f00;
            cursor:pointer;
        }
        .fade-enter-active,.fade-leave-active{
            transition:all .35s;
        }
        .fade-enter,.fade-leave-to{
            opacity:0;
        }
    }
</style>