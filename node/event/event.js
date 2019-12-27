// EventEmitter 以注册的顺序同步地调用所有监听器。
// 监听器函数可以使用 setImmediate() 和 process.nextTick() 方法切换到异步的操作模式
const EventEmitter = require('events')
class Application extends EventEmitter {}
const app = new Application()
app.on('hello',data => {
  console.log('this data is ' ,data)
})
app.emit('hello','Hello World!')

class Person extends EventEmitter {
  constructor(name){
    super()
    this.name = name
  }
}
const personOne = new Person('tom')
personOne.emit('play','this is play')
personOne.on('play',function(data){
  console.log('-------------this person name is',this.name)
  console.log('data is ',data)
})
personOne.on('play',data => {
  Promise.resolve().then(() => {
    console.log('Promise')
  })
  console.log(data)
})
personOne.on('play',data => {
  process.nextTick(() => {
    console.log('process.nexttick')
  })
  console.log(data)
})
setTimeout(() => {
  console.log('etTimeout')
},100)
personOne.once('play',() => {
  console.log('==========123=======once')
})
// personOne.removeListener('play')
personOne.emit('play','this is play')
personOne.emit('play','this is play two')