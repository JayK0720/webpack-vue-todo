<template>
    <div class="login-container">
        <div class="login-header">
            <span class="login-title">Sign in to todolist</span>
            <span class="login-message" v-show="errMessage">* {{errMessage}}</span>
        </div>
        <form @submit="handleSubmit" autocomplete="off">
            <div class="input-wrapper">
                <p class="tip">Username</p>
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
        <div class="create-account" @click="handleRegister">
            <span>* create account</span>
        </div>
    </div>
</template>

<script>
    import {notification} from '../../components/notification/index.js'
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
                if( this.validate() ) {
                    this.axios.post('http://localhost:3000/api/user/login',{
                        username:this.username,
                        email:this.username,
                        password:this.password
                    }).then(response => {
                        console.log(response);
                        if(response.data.code === 0) {
                            notification({
                                content:'登陆成功',
                                cancel:'X'
                            })
                            this.$router.replace('/');
                        }else{
                            this.errMessage = '用户名或密码错误！'
                        }
                    })
                }
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
            },
            handleRegister(){
                this.$router.push("/register");
            }
        }
    }
</script>

<style scoped lang='scss'>
    .login-container{
        margin:0 auto;
        padding:30px 30px 20px;
        width:360px;
        border:1px solid #ccc;
        border-radius:8px;
        background-color:#fff;
        .login-header{
            height:45px;
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
            margin-top:12px;
            .tip{
                line-height:36px;
                font-size:16px;
                color:#787c80;
                font-weight:bold;
            }
            .user-input,.pass-input,.login-button{
                width:100%;
                height:40px;
                font-size:16px;
                border:1px solid #eee;
                border-radius:4px;
                text-indent:.8em;
                color:#3c3c3c;
            }
            .login-button{
                background-color:#00c544;
                color:#fff;
                border:none;
                text-indent:0;
            }
        }
        .create-account{
            padding-top:10px;
            height:40px;
            line-height:40px;
            text-align:right;
            color:#f00;
            span{
                cursor:pointer;
            }
        }
    }
</style>