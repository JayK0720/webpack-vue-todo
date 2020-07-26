function timeout(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    })
}

async function asyncPrint(value,ms){
    await timeout(ms);
    console.log(value);
}
asyncPrint('hello',1000);



async function time(ms){
    await new Promise(resolve => {
        setTimeout(resolve,ms);
    })
}

async function print(value,ms){
    await time(ms);
    console.log(value);
}

print('hello vue.js',2000);


async function f(){
    return 'hello world';
}
f().then(res => {
    console.log(res);
});



class Sleep{
    constructor(timeout){
        this.timeout = timeout;
    }
    then(resolve,reject){
        const startTime = Date.now();
        setTimeout(
            () => resolve(Date.now() - startTime),
        this.timeout)
    }
}
(async () => {
    const sleepTime = await new Sleep(1000);
    console.log('sleep time');
})();


async function bar(){
    try{
        await new Promise(function(resolve,reject){
            throw new Error('出错了');
        })
    } catch(e){
        console.log(e);
    }
    return await ('hello try catch');
}

bar().then(res => {
    console.log(res);
})


function f1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('f1')
        },3000)
    })
}

function f2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('f2')
        },4000);
    })
}
let i = 0;

/*
setInterval(() => {
    i++;
    console.log(i);
},1000);
*/


async function baz(){
    let [value1,value2] = await Promise.all([f1(),f2()]);
    console.log(value1,value2);
}
baz();




