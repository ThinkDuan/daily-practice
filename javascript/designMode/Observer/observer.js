class Subject {
  constructor(){
    this.observers = []
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
  notify(){
    this.observers.forEach(item => {
      item.update()
    })
  }
}
class Observer {
  constructor(name){
    this.name = name
  }
  update(){
    console.log(`my name is ${this.name}`)
  }
}
let sub = new Subject()
let obs1 = new Observer('Tom')
let obs2 = new Observer('Jerry')
let obs3 = new Observer('Mike')
sub.add(obs1)
sub.add(obs2)
sub.add(obs3)
sub.notify()
sub.remove(obs3)
sub.notify()