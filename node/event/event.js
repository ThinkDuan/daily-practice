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
personOne.on('play',function(data){
  console.log('this person name is',this.name)
  console.log('data is ',data)
})
personOne.on('play',data => {
  console.log(data)
})
personOne.emit('play','this is play')