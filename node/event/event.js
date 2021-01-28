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


class Event {
  constructor(){
    this.list = {}
  }
  on (key, fn, type) {
    if(!this.list[key]){
      this.list[key] = []
    }
    const array = this.list[key]
    if (!type) {
      type = 'all'
    }
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        if (fn === array[i].fn) return
      }
    }
    array.push({
      type,
      fn
    })
  }
  once (key, fn) {
    this.on(key, fn, 'once')
  }
  emit (key, ...data) {
    const array = this.list[key]
    const onceList = []
    if(array && array.length > 0){
      array.forEach((item) => {
        item.fn.apply(this, data)
        if (item.type === 'once') {
          onceList.push(
            {
              key,
              fn: item.fn
            }
          )
        }
      })
      if (onceList.length > 0) {
        onceList.forEach(item => {
          this.remove(item.key, item.fn)
        })
      }
    }
  }
  remove(key, fn){
    if(!key) return
    const array = this.list[key]
    if(!array && array.length === 0) return
    const length = array.length
    for(let i = 0;i < length;i++){
      if(array[i] && fn.toString() === array[i].fn.toString()){
        array.splice(i,1)
      }
    }
  }
  removeAll () {
    this.list = {}
  }
  destory () {
    this.list = {}
  }
}