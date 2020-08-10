<template>
    <div class="content">
        <p>This is {{name}} page</p>
        <div
            class="box"
            ref="box"
        ></div>
        <button @click="handleChangeColor">change color</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'Bar',
            }
        },
        methods:{
            handleChangeColor(){
                let r = (Math.floor(Math.random() * 256)).toString(16);
                let g = (Math.floor(Math.random() * 256)).toString(16);
                let b = (Math.floor(Math.random() * 256)).toString(16);
                let number = Math.floor(Math.random() * 256);

                let number1 = number.toString(16);
                let number2 = parseInt(number,16);
                console.log("number:",number,'number1:',number1,'number2:',number2);

                if(r.length < 2) {
                    r = '0' + r;
                }
                if(g.length < 2){
                    g = '0' + g;
                }
                if(b.length < 2){
                    b = '0' + b;
                }
                const color = '#'+r+g+b;
                this.$nextTick(() => {
                    this.$refs.box.style.backgroundColor = color;
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
    .content{
        text-align:center;
        font-size:30px;
        padding-top:40px;
    }
    .box{
        display:inline-block;
        width:40px;
        height:20px;
        background-color:pink;
        vertical-align:middle;
    }
</style>