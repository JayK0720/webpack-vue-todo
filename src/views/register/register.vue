<template>
    <div class="register-container">
        <div class="register-header">
            <span class="register-title">Create your account</span>
            <span class="login-message" v-show="errMessage">* {{errMessage}}</span>
        </div>
        <form @submit="handleSubmit" autocomplete="off" method="post">
            <div class="input-wrapper">
                <p class="tip">Username <span class="tag">*</span></p>
                <input
                    type="text"
                    name="username"
                    v-model="username"
                    class="user-input"
                >
            </div>
            <div class="input-wrapper">
                <p class="tip">Email address <span class="tag">*</span></p>
                <input
                    type="text"
                    name="email"
                    v-model="email"
                    class="email-input"
                >
            </div>
            <div class="input-wrapper">
                <p class="tip">Verify your Email<span class="tag">*</span></p>
                <p class="verify-input-wrapper">
                    <input
                        type="text"
                        name="verify"
                        class="verify-input"
                        v-model="verify"
                    >
                    <input
                        type="button"
                        value="Verify"
                        class="verify-btn"
                        @click="handleVerifyEmail"
                    />
                </p>
            </div>
            <div class="input-wrapper">
                <p class="tip">Password <span class="tag">*</span></p>
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
                    value="Create account"
                    class="register-button"
                >
            </p>
        </form>
        <p class="have-account" @click="handleLogin">
            <span>have account ? login</span>
        </p>
    </div>
</template>

<script>
    import {notification} from '../../components/notification/index.js';

    export default {
        data() {
            return {
                username:'',
                email:'',
                password:'',
                verify:'',
                errMessage:''
            }
        },
        methods:{
            handleSubmit(e){
                e.preventDefault();
                if( this.validate() ){
                    this.axios.post('http://localhost:3000/api/user/register',{
                        username:this.username,
                        email:this.email,
                        password:this.password,
                        verify:this.verify
                    }).then(response => {
                        console.log(response);
                        const code = response.data.code;
                        switch(code){
                            case 0:
                                notification({
                                    content:'注册成功',
                                    cancel:'X'
                                });
                                this.$router.replace('/login');
                            break;
                            case -1:
                                this.errMessage = '验证码错误!';
                                break;
                            case -2:
                                this.errMessage = '该用户名已注册!';
                                break;
                            case -3:
                                this.errMessage = '该邮箱已注册！';
                                break;
                        }
                    })
                }
            },
            validate(){
                if( !this.username.trim() ){
                    this.errMessage = '用户名不能为空';
                    return false;
                }
                if( !this.email.trim() ){
                    this.errMessage = '邮箱不能为空';
                    return false;
                }
                if( !this.verify.trim() ){
                    this.errMessage = '验证码不能为空';
                    return false;
                }
                if( !this.password.trim() ){
                    this.errMessage = '密码不能为空';
                }
                this.errMessage = "";
                return true;
            },
            handleVerifyEmail() {
                if(!this.email.trim()) {
                    this.errMessage = '请先输入邮箱';
                }
                this.axios(`http://localhost:3000/api/user/verify?email=${this.email}`)
                .then(response => {
                    console.log(response);
                    if(response.data.code === 0){
                        notification({
                            content:'验证码发送成功',
                            cancel:'X'
                        })
                    }
                })
            },
            handleLogin(){
                this.$router.replace('/login')
            }
        }
    }
</script>

<style scoped lang='scss'>
    .register-container{
        margin:0 auto;
        padding:30px 30px 20px;
        width:360px;
        border:1px solid #ccc;
        border-radius:8px;
        background-color:#fff;
        .login-message{
            padding-left:10px;
            font-size:14px;
            color:red;
        }
        .register-header{
            height:38px;
        }
        .register-title{
            font-size:20px;
            color:#757575;
        }
        .register-message{
            padding-left:10px;
            font-size:14px;
            color:red;
        }
        .input-wrapper{
            margin-top:12px;
            .tip{
                line-height:30px;
                font-size:14px;
                color:#787c80;
                font-weight:bold;
                .tag{
                    color:red;
                }
            }
            .user-input,.email-input,.register-button,.pass-input,.verify-input{
                width:100%;
                height:36px;
                font-size:15px;
                border:1px solid #eee;
                border-radius:4px;
                text-indent:.8em;
                color:#3c3c3c;
            }
            .verify-input-wrapper{
                display:flex;
                align-items:center;
                height:36px;
                justify-content:space-between;
            }
            .verify-input{
                width:280px;
                font-size:16px;
            }
            .verify-btn{
                border:none;
                width:60px;
                height:36px;
                color:#00c544;
                border-radius:6px;
                cursor:pointer;
            }
            .register-button{
                background-color:#00c544;
                color:#fff;
                border:none;
            }
        }
        .have-account{
            cursor:pointer;
            height:50px;
            line-height:50px;
            text-align:right;
            font-size:15px;
            color:red;
        }
    }
</style>