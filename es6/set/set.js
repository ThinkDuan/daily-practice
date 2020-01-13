// set 类似于数组，成员值是唯一的
// set 可使用构造函数构造,接受一个数组或者具有 (iterable 接口的其他数据结构,例如：document.querySelectorAll('div') arguments）作为参数，用来初始化。
//  set 可用于数组去重，但是对于 对象,数组，方法 无法去重
let foo = Symbol('foo')
let set = new Set([1])
let setOne = new Set([12,12,'1','1',NaN,NaN,0,-0,{},{},[],[],function name(){},function name(){},foo,foo,set,set])
console.log(setOne)
console.log([...setOne])
console.log(setOne.size)
console.log(setOne.constructor)
console.log(setOne.add(1))
console.log(setOne.has(1))
console.log(setOne.delete(1))
// console.log(setOne.clear())
console.log('keys->',setOne.keys())
console.log('value->',setOne.values())
console.log('entries->',setOne.entries())
setOne.forEach((item,key) => {
  console.log('setOne->',key,item)
})