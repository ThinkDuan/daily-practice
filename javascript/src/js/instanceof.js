function instanceofFun(data,target){
  if(!target) return false
  if(typeof data !== 'object' || data === null) return false
  let proto = Object.getPrototypeOf(data)
  while(true){
    if(proto === null) return false
    if(proto === target.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
console.log(instanceofFun('',null))
console.log(instanceofFun({},null))
console.log(instanceofFun({},Object))
class Person{}
let per = new Person()
console.log(instanceofFun(per,Person))
console.log(instanceofFun(per,Object))

foo()
foo1()
function foo() {
  console.log('foo')
}
var foo1 = function () {
  console.log('function express foo1')
}