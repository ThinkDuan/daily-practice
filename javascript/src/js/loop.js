// 相关循环
// for()循环，可break、return、throw、continue来中断操作
// for...of 在可迭代对象上（Array，Set，map，String，TypedArray，arguments）创建一个迭代循环，并为每个不同的属性的值执行语句
// 可迭代对象： 
// 具有Iterator接口的数据结构
// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象
let str = 'hello'
let obj = {
  name: 'Object'
}
let arr = [1,2,3]
let set = new Set([1,2,3,4,4,3])
let map = new Map([[1,2],[3,4]])
for(let i of str){
  console.log('str',i)
}
// for(let i of obj){
//   console.log('obj',i)
// }
for(let i of arr){
  console.log('arr',i)
}
for(let i of set){
  console.log('set',i)
}
for(let i of map){
  console.log('map',i)
}
console.log(String.prototype[Symbol.iterator])
console.log(Array.prototype[Symbol.iterator])
console.log(Set.prototype[Symbol.iterator])
console.log(Map.prototype[Symbol.iterator])
console.log(Object.prototype[Symbol.iterator])

// Object部署iterator接口
