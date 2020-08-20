const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text:String,
    id:Number,
    completed:Boolean
})

const Todo = mongoose.model('todo',TodoSchema)

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

module.exports = {
    Mongoose,
    Todo
}