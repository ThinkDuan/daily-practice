class Subject {
  constructor(){
    this.observers = []
    this.state = 0
  }
  add(observer){
    this.observers.push(observer)
  }
  remove(observer){
    let index = this.observers.findIndex(item => {
      return item === observer
    })
    this.observers.splice(index,1)
  }
  notify(data){
    this.observers.forEach(item => {
      item.update(data)
    })
  }
  setState(){
    this.state++
    this.notify(this.state)
  }
  printName(){
    this.notify('喜欢黑色吗')
  }
  getState(){
    return this.state
  }
}
class Observer {
  constructor(name,object){
    this.name = name
    object.add(this)
  }
  update(data){
    console.log(`this ${this.name} say ${data}`)
  }
}
let sub = new Subject()
let obs1 = new Observer('Tom',sub)
let obs2 = new Observer('Jerry',sub)
let obs3 = new Observer('Mike',sub)
sub.setState()
sub.printName()

class SubjectShare {
  constructor(){
    this.subList = {}
  }
  addSub(sub,key){
    if(!this.subList[key]){
      this.subList[key] = []
    }
    this.subList[key].push(sub)
  }
  removeSub(sub,key){
    if(!this.subList[key]) return
    this.subList[key] = this.subList[key].filter((item) => {
      return item !== sub
    })
  }
  publish(fn,key){
    this.subList[key].forEach((ob) => {
      fn.call(ob)
    })
  }
}
class ObserverShare {
  constructor(name){
    this.name = name
  }
}
class EventSub {
  constructor(){
    this.subShare = null
  }
  init(){
    this.subShare = new SubjectShare()
  }
  addSub(ob,key){
    this.subShare.addSub(ob,key)
  }
  publish(fn,key){
    this.subShare.publish(fn,key)
  }
  removeSub(ob,key){
    this.subShare.removeSub(ob,key)
  }
}
let subShare = new SubjectShare()
let eventSub = new EventSub()
eventSub.init()
eventSub.addSub()
let obShare1 = new ObserverShare('司马懿')
let obShare2 = new ObserverShare('孙尚香')
subShare.addSub(obShare1,'block')
subShare.addSub(obShare1,'say')
subShare.addSub(obShare2,'say')
subShare.removeSub(obShare1,'say')
subShare.publish(function() {
  console.log(this.name,'喜欢黑色吗')
},'block')
subShare.publish(function() {
  console.log(this.name,'大小姐驾到')
},'say')


// node event 实现,发布订阅模式
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

let eventInstance = new Event()
let play = function(data){
  console.log('[evenet]:this is my play',data)
}
eventInstance.once('play',play)
eventInstance.on('play',() => {
  console.log('[evenet]:this is 2 play')
})
eventInstance.on('say',() => {
  console.log('[evenet]:this is my say')
})
eventInstance.emit('play','jerry')
eventInstance.remove('play', () => {
  console.log('[evenet]:this is 2 play')
})
eventInstance.emit('play','jerry')
eventInstance.emit('say','tom')
