<template>
    <div class="login-container">
        <div class="login-header">
            <span class="login-title">Sign in to todolist</span>
            <span class="login-message" v-show="errMessage">* {{errMessage}}</span>
        </div>
        <form @submit="handleSubmit" autocomplete="off">
            <div class="input-wrapper">
                <p class="tip">Username or email address</p>
                <input
                    type="text"
                    name="username"
                    v-model="username"
                    class="user-input"
                >
            </div>
            <div class="input-wrapper">
                <p class="tip">Password</p>
                <input
                    type="password"
                    name="password"
                    v-model="password"
                    class="pass-input"
                >
            </div>
            <p class="input-wrapper">
                <input
                    type="submit"
                    value="Sign in"
                    class="login-button"
                >
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        metaInfo:{
            title:'Login Page'
        },
        data() {
            return {
                username:'',
                password:'',
                errMessage:""
            }
        },
        methods:{
            handleSubmit(e){
                e.preventDefault();
                // 如果姓名和密码都输入了
                this.validate()
            },
            validate(){
                if(!this.username.trim()){
                    this.errMessage = '姓名不能为空';
                    return false
                }
                if(!this.password.trim()) {
                    this.errMessage = '密码不能为空';
                    return false;
                }
                this.errMessage = "";
                return true;
            }
        }
    }
</script>

<style scoped lang='scss'>
    .login-container{
        margin:0 auto;
        padding:30px 30px 20px;
        width:400px;
        height:280px;
        border:1px solid #ccc;
        border-radius:8px;
        background-color:#fff;
        .login-header{
            height:50px;
        }
        .login-title{
            font-size:22px;
            color:#757575;
        }
        .login-message{
            padding-left:10px;
            font-size:14px;
            color:red;
        }
        .input-wrapper{
            margin-top:10px;
            .tip{
                line-height:36px;
                font-size:16px;
                color:#787c80;
                font-weight:bold;
            }
            .user-input,.pass-input,.login-button{
                width:100%;
                height:40px;
                font-size:18px;
                border:1px solid #eee;
                border-radius:4px;
            }
            .login-button{
                background-color:#00c544;
                color:#fff;
                border:none;
            }
        }
    }
</style>