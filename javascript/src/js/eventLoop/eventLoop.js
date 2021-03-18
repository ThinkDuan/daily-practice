// EventLoop 事件循环
debugger
console.group("EventLoop")
console.log("start")
setTimeout(() => {
  new Promise((resolve,reject) => {
    console.log("16")
    resolve()
  }).then(() => {
    console.log("17")
  }).catch(() => {
    console.log("snon-17")
  })
},500)

Promise.resolve().then(() => {
  console.log("7")
})
requestAnimationFrame(() => {
  console.log("=========requestAnimationFrame===========")
})
setTimeout(() => {
  new Promise((resolve,reject) => {
    console.log("14")
    resolve()
  }).then(() => {
    console.log("15")
  }).catch(() => {
    console.log("non-15")
  })
},200)

async function main(){
  console.log("1")
  await consoleFun("2")
  console.log("8")
}

async function fun(){
  console.log("3")
  await new Promise((res) => {
    res()
    console.log("4")
    setTimeout(() => {
      console.log("13")
    },100)
  })
  await console.log("9")
  console.log("11")
}

function consoleFun(str){
  console.log(str)
}
// node 环境
// process.nextTick(() => {
//   console.log("6")
// })
main().then(() => {
  console.log('10')
})
fun().then(() => {
  console.log("12")
})
console.log("5")
console.groupEnd()