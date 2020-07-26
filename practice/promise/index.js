function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done')
    })
}

/*const p1 = timeout(3000).then((value) => {
    console.log(value);
});*/

let promise = new Promise(function(resolve,reject){
    console.log("Promise");
    resolve();
});

promise.then(() => {
    console.log("resolved");
});

console.log("Hi");


const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        return reject(new Error('fail'))
    },3000)
});

const promise2 = new Promise(function(resolve,reject){
    setTimeout(function() {
        return resolve(promise1)
    },1000)
})

promise2.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
})


const promise3 = new Promise((resolve,reject) => {
    try{
        throw new Error('test');
    }catch(err){
        reject(err)
    }
});

promise3.then(function(val){
    console.log('promise3:',val);
})
    .catch(function(err){
        console.log('promise3:',err);
    })


const someAsyncThing = function(){
    return new Promise(function(resolve,reject) {
        resolve(x+2);
    })
}

someAsyncThing().then(function(){
    console.log('everything is good');
})
    .catch(function(err){
        console.log(err);
    });

setTimeout(() => {console.log(123)},300);


someAsyncThing().then(function(){
    console.log('everything is great');
})
    .catch(function(err){
        console.log(err);
        y + 2;
    })
    .catch(function(err){
        console.log('oh no',err);
    })


someAsyncThing().finally(function(){
    console.log('hello,finally');
});

Promise.prototype.finally = function(callback){
    return this.then(
        value => Promise.resolve(callback()).then(() => value),
        reason => Promise.resolve(callback()).catch(() => reason)
    )
};


function foo1(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve('foo1')
        },5000)
    })
}

function foo2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('err')
        },4000)
    })
}

function foo3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('foo3')
        },3000)
    })
}

Promise.all([foo1(),foo2(),foo3()])
    .then(function(val){
        console.log(val);
    })
    .catch((err) => {
        console.log("foo2:",err);
    })


const results = Promise.allSettled([foo1(),foo2(),foo3()])
    .then(result => {
        console.log('promise.allSettled:',result);
    })

// 只要p1 p2 p3之中有一个实例率先改变状态，p的状态就跟着改变。那个先改变的Promise实例的返回值，就传递给p的回调函数。
Promise.race([foo1(),foo2(),foo3()])
    .then(result => {
        console.log('race:',result);
    })
    .catch(err => {
        console.log("race:",err);
    })



const p1 = new Promise((resolve,reject) => {
    resolve('hello');
})
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve,reject) => {
    throw new Error('报错了');
})
    .then(result => result)
    .catch(e => e);

Promise.all([p1,p2])
    .then((result) => {
        console.log(result);
    })
    .catch(e => {
        cosole.log(e);
    })


let thenable = {
    then:function(resolve,reject){
        resolve(43)
    }
}

Promise.resolve(thenable)
    .then(result => {
        console.log(result);    // 176
    });


const p = Promise.resolve('Hello!');
p.then(function(s) {
    console.log(s);
})


new Promise((resolve,reject) => {
    reject('出错了');
})
    .then(null,function(reason) {
        console.log(reason);
    })



const f = () => console.log('now');
Promise.resolve().then(f);




