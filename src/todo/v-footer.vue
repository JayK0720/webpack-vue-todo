<template>
    <div class="footer-wrapper">
        <p class="author">Written by {{name}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'Jayk'
            }
        }
    }
</script>

<style scoped lang='scss'>
    .author{
        text-align:center;
        font-size:20px;
        color:#c1c1c1;
    }
</style>