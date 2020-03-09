function Stack(arr){
  this.stack = Array.isArray(arr) ? arr : []
}
Stack.prototype.pop = function(){
  return this.stack.pop()
}
Stack.prototype.push = function(num){
  return this.stack.push(num)
}
Stack.prototype.print = function(){
  console.log(this.stack)
}
Stack.prototype.get = function(){
  return this.stack
}
let stack = new Stack([2,3])
stack.push(1)
stack.push(2)
stack.print()
console.log(stack.pop())
console.log(stack.pop())
stack.print()