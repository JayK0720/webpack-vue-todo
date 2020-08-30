const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    date:{type:Date,default:Date.now()},
    todos:Array,
})

const Todo = mongoose.model('todo',UserSchema)

const Mongoose = {
    url:'mongodb://localhost:27017/todo',
    connect() {
        mongoose.connect(this.url,{useNewUrlParser:true},(err) => {
            if(err) {
                console.log(err);
            }else{
                console.log('数据库连接成功');
            }
        })
    }
}

const Email = {
    config:{
        host: "smtp.qq.com",
        port: 587,
        auth: {
            user: '2165767230@qq.com',
            pass:'evxesxpbruqrebaa' ,
        },
    },
    get transporter(){
        return nodemailer.createTransport(this.config)
    }
}

module.exports = {
    Mongoose,
    Todo,
    Email
}