<template>
    <transition name="fade">
        <div class="notification-wrapper">
            <p class="content">{{content}}</p>
            <span class="close">{{btn}}</span>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'Notification',
        props:{
            content:{
                type:String,
                required:true
            },
            btn:{
                type:String,
                required:true
            }
        }
    }
</script>

<style scoped lang='scss'>
    .notification-wrapper{
        right:10px;
        bottom:15px;
        position:absolute;
        width:240px;
        height:80px;
        background-color:rgba(0,0,0,.35);
        border-radius:5px;
        .content{
            text-align:center;
            line-height:80px;
            color:#fff;
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



