function Queue(arr){
  this.queue = Array.isArray(arr) ? arr : []
}
Queue.prototype.shift = function(){
  return this.queue.shift()
}
Queue.prototype.push = function(num){
  return this.queue.push(num)
}
Queue.prototype.get = function(){
  return this.queue
}
let queue = new Queue([2,3,4])
queue.push(5)
queue.shift()
console.log(queue.get())

function test(person){
  person.age = 26
  person = {
    name: 'zhangsan'
  }
  return person
}
let p1 = {
  name: "p1"
}
let p2 = test(p1)
console.log(p1,p2)