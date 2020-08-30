<template>
    <transition
        name="fade"
        @after-leave="afterLeave"
    >
        <div
            class="notification-wrapper"
            :style="styleObj"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseout="createTimer"
        >
            <p class="content">{{content}}</p>
            <span class="close" @click="handleCancel">{{cancel}}</span>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'Notification',
        data(){
            return {
                visible:true,
                height:0
            }
        },
        computed:{
            styleObj(){
                return {
                    bottom:this.verticalHeight + 'px'
                }
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.height = this.$el.offsetHeight;
            })
        },
        methods:{
            afterLeave(){
                console.log('after leave');
                this.$emit('closed');
            },
            handleCancel(){
                this.$emit('close')
            },
        }
    }
</script>

<style scoped lang='scss'>
    .fade-enter-active,.fade-leave-active{
        transition:opacity .4s;
    }
    .fade-enter,.fade-leave-to{
        opacity:0;
    }
    .notification-wrapper{
        right:10px;
        bottom:6px;
        position:absolute;
        width:240px;
        height:70px;
        background-color:#00c544;
        border-radius:5px;
        transition:all .35s;
        user-select:none;
        .content{
            text-align:center;
            line-height:70px;
            color:#fff;
            font-size:13px;
        }
        .close{
            position:absolute;
            right:12px;
            top:10px;
            font-size:14px;
            color:#fff;
            cursor:pointer;
        }
    }
</style>



