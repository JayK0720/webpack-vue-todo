function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done')
    })
}

const p1 = timeout(3000).then((value) => {
    console.log(value);
});