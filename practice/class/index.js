function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function(){
    console.log(this.x + this.y);
}

let p1 = new Point(1,2);
p1.toString()   // 3


class ClassPoint{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        console.log(this.x + this.y);
    }
    say(){
        console.log('hello,我是class类');
    }
}
let p2 = new ClassPoint(1,2);
p2.toString();
p2.say();
console.log(p2);

// 类的内部所有定义的方法都是不可枚举的

console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(Object.getOwnPropertyNames(ClassPoint.prototype));

console.log(Object.keys(Point.prototype));
console.log(Object.keys(ClassPoint.prototype));

console.log(p2.hasOwnProperty('say'));  //false


// 获取实例对象的原型
console.log(Object.getPrototypeOf(p1)); // {toString: ƒ, constructor: ƒ}
console.log(Object.getPrototypeOf(p2)); // {constructor: ƒ, toString: ƒ, say: ƒ}


class Logger{
    constructor(){
        this.printName = this.printName.bind(this);
    }
    printName (name = 'there'){
        this.printText(`hello ${name}`);
    }
    printText(text){
        console.log(text);
    }
}
const logger = new Logger('hello');
// logger.printName();
const {printName} = logger;
printName();


// 静态方法

class Foo{
    static classMethod(){
        console.log('hello,我是静态方法');
    }
    static bar(){
        this.baz();
    }
    static baz(){
        console.log('静态方法 baz');
    }
    baz(){
        console.log('原型上的方法 baz');
    }
}
Foo.classMethod();
Foo.bar();

class Bar extends Foo{
}
Bar.classMethod();


// 数据库单例模式
class Database {
    constructor(){
        console.log('执行constructor构造函数');
        this.connect()
    }
    connect(){
        console.log('连接数据库');
    }
    find(){
        console.log('查询数据库的数据')
    }
}


/*let db1 = new Database();
let db2 = new Database();*/

class DataBase {
    constructor(){
        console.log('执行constructor');
        this.connect()
    }
    static getDataBase(){
        if(!DataBase.instance) {
            DataBase.instance = new DataBase()
        }
        return DataBase.instance;
    }
    connect(){
        console.log('连接数据库');
    }
    find(){
        console.log('查找数据');
    }
}

let DB1 = DataBase.getDataBase();
let DB2 = DataBase.getDataBase();




