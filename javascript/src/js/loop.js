// 相关循环
// for()循环，可break、return、throw、continue来中断操作

// for...of 在可迭代对象上（Array，Set，map，String，TypedArray，arguments）创建一个迭代循环，并为每个不同的属性的 值 执行语句
// 可迭代对象： 
// 具有Iterator接口的数据结构
// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象


// for in 以任意循序遍历一个对象的出symbol以外的可枚举属性,
// for in 循环使用注意事项
// 1. 在循环时删除或者增加对象的属性，可能会被循环到也可能不被循环到，所以最好不要在循环过程中新增或者删除属性
// 2. 因为for in 循环时无序的所以最好不要使用来循环数组，数组的循环一般是强调顺序的

// Array的循环
// 1.for()循环
// 2. Array.prototype.map 
// 3. Array.prototype.forEach
// 4. Array.prototype.reduce 累加 
let str = 'hello'
let obj = {
  name: '对象',
  type: 'Object'
}
// let 
 = [1,2,3]
let set = new Set([1,2,3,4,4,3])
let map = new Map([[1,2],[3,4]])
for(let i of str){
  console.log('str',i)
}
// for(let i of obj){
//   console.log('obj',i)
// }
// for(let i of 
){
  // console.log('
  ',i)
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

for(let i in obj){
  console.log("for in 循环开始=====")
  delete obj.name
  obj.key = "add"
  console.log("obj key->",i)
  console.log("obj value->",obj[i])
}

// for(let i in 
){
  // console.log("
   key->",i)
  // // console.log("
   value->",
  [i])
}
for(let i in str){
  console.log("str key->",i)
  console.log("str value->",str[i])
}
