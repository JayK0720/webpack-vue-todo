class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return this.x + this.y;
    }
}

// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。因为子类自己的this对象,必须先通过父类的构造函数
// 完成塑造，得到与父类同样的实例属性和方法。然后再对其进行加工,加上子类自己的实例属性和方法。

// super虽然代表的是父类构造函数,但是返回的却是子类的实例。
class ColorPoint extends Point {
    constructor(x,y,color){
        super(x,y);
        this.color = color;
    }
    toString() {
        return this.color + "" + super.toString();
    }
}
let cp = new ColorPoint(1,2,'red');
console.log(cp.toString());


class A {
    constructor(){
        this.x = 1;
    }
    print(){
        console.log(this.x);
    }
}

class B extends A {
    constructor(){
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}

let b = new B();
b.m()   // 2




















