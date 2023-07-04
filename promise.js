
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise 1")},2000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise 2")},2000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise 3")},2000)
})

Promise.race([p1,p2,p3]).then((prMsg)=>{
    console.log(prMsg)
})