<template>
    <div class="register-container">
        <div class="register-header">
            <span class="register-title">Sign in to todolist</span>
            <span class="register-message" v-show="errMessage">* {{errMessage}}</span>
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
                    class="register-button"
                >
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang='scss'>
    .register-container{
        margin:0 auto;
        padding:30px 30px 20px;
        width:400px;
        height:280px;
        border:1px solid #ccc;
        border-radius:8px;
        background-color:#fff;
        .register-header{
            height:50px;
        }
        .register-title{
            font-size:22px;
            color:#757575;
        }
        .register-message{
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
            .user-input,.pass-input,.register-button{
                width:100%;
                height:40px;
                font-size:18px;
                border:1px solid #eee;
                border-radius:4px;
            }
            .register-button{
                background-color:#00c544;
                color:#fff;
                border:none;
            }
        }
    }
</style>