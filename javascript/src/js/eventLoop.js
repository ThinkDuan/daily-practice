debugger
console.group("EventLoop")
console.log("start")
setTimeout(() => {
  new Promise((resolve,reject) => {
    console.log("setTimeout 1 Promise")
    resolve()
  }).then(() => {
    console.log("setTimeout 1 Promise then")
  }).catch(() => {
    console.log("setTimeout 1 Promise then")
  })
},500)

Promise.resolve().then(() => {
  console.log("Promise")
})

setTimeout(() => {
  new Promise((resolve,reject) => {
    console.log("setTimeout 2 Promise")
    resolve()
  }).then(() => {
    console.log("setTimeout 2 Promise then")
  }).catch(() => {
    console.log("setTimeout 2 Promise then")
  })
},200)

async function main(){
  console.log("async start")
  await consoleFun("---async await")
  console.log("async end")
}

async function fun(){
  console.log("async fun start")
  await new Promise((res) => {
    res()
    console.log("async fun promise")
    setTimeout(() => {
      console.log("async fun promise setTimeout")
    },100)
  })
  await console.log("async fun await 2")
  console.log("async fun end")
}

function consoleFun(str){
  console.log(str)
}
main().then(() => {
  console.log('main then')
})
fun().then(() => {
  console.log("fun then")
})
console.log("end")
console.groupEnd()