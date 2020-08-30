<template>
    <div class="loading-container">
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'loading'
    }
</script>

<style scoped lang='scss'>
    .loading-container{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,.2);
        .loading{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            top:0;
            height:100px;
            line-height:100px;
            text-align:center;
            margin:auto;
        }
    }
    .loading span {
        display: inline-block;
        vertical-align: middle;
        width: .6em;
        height: .6em;
        margin: .19em;
        background: #007DB6;
        border-radius: .6em;
        animation: loading 1s infinite alternate;
    }
    .loading span:nth-of-type(2) {
        background: #008FB2;
        animation-delay: 0.2s;
    }
    .loading span:nth-of-type(3) {
        background: #009B9E;
        animation-delay: 0.4s;
    }
    .loading span:nth-of-type(4) {
        background: #00A77D;
        animation-delay: 0.6s;
    }
    .loading span:nth-of-type(5) {
        background: #00B247;
        animation-delay: 0.8s;
    }
    .loading span:nth-of-type(6) {
        background: #5AB027;
        animation-delay: 1.0s;
    }
    .loading span:nth-of-type(7) {
        background: #A0B61E;
        animation-delay: 1.2s;
    }
    @keyframes loading {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>