/*
 * @Author: duanxinxin
 * @Date: 2020-02-21 18:49:47
 * @LastEditTime: 2020-04-12 10:47:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/javascript/src/js/loop.js
 */
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

// for of 循环中增加一项已经循环过的选项的之前的数据会引起无限循环
// 循环作为可迭代对象是的值，不是对象的属性值


// for in 以任意循序遍历一个对象的出symbol以外的可枚举属性,包括继承来的可枚举属性
// for in 循环使用注意事项
// 1. 在循环时删除或者增加对象的属性，可能会被循环到也可能不被循环到，所以最好不要在循环过程中新增或者删除属性
// 2. 因为for in 循环时无序的所以最好不要使用来循环数组，数组的循环一般是强调顺序的

// Array的循环
// 1.for()循环
// 2. Array.prototype.map 
// 3. Array.prototype.forEach
// 4. Array.prototype.reduce 累加 


// forEach() 
// 特性：
// 按照正序的在数组中含有效值的每一项执行一次callback函数，已删除或者未初始化的项将被跳过
// 遍历的范围在一开始就已经确定，调用forEach之后添加到数组的值不会被循环到
// 如果是已经存在的值被改变，则传递到callback的值是遍历到他们那一刻的值,而不是改变之后的值
// 已删除的项不会被遍历到，如果已访问的元素在迭代的时候被删除了（例如使用shift（））之后的元素会被跳过。
// 返回值是undefined，不可链式调用
// forEach不会改变原数组，也就是调用它的数组，但是在callback中可能会被改变

// 除了抛出异常没有办法终止或者停止forEach循环（forEach特有）

// every,some,find,findIndex
// 特性和forEach一致

// 可正常使用break,throw,continue,或者return终止循环的
// for循环
// for...of / for ... in
// Array.prototype.every
// Array.prototype.some
// Array.prototype.find
// Array.prototype.findIndex 
let str = 'hello'
let obj = {
  name: '对象',
  type: 'Object'
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
  if(i === 1 ){
    arr.unshift(0)
  }
  console.log('======>arr',i)
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

for(let i in arr){
  console.log("key->",i)
  console.log("value->",[i])
}
for(let i in str){
  console.log("str key->",i)
  console.log("str value->",str[i])
}

let weakArr = [1,,,,2,3,,4];
let newArr = [1,2,3];
let arrValue = arr.forEach(function(item,index){
  if(index === 1){
    // arr[index] = 'hello'
    // arr.splice(1,1)
    newArr.shift()
  }
  // arr.push(4);
  
  
  console.log('----newArr item',item)
})
let weakArrValue = weakArr.forEach(function(item){
  console.log('----weakArr item',item)
})
console.log('return value',arrValue,weakArrValue)
console.log('newArr weakArr',newArr,weakArr)


let ratings = [5, 4, 5];

let sum = 0;

let sumFunction = async function (a, b) {
    return a + b;
} 

ratings.forEach(async function(rating) {
    sum = await sumFunction(sum, rating);
    console.log('======>async',sum)
})

async function sumFun(){
  await ratings.forEach(async function(item){
    sum = await sumFunction(sum, item)
  })
  console.log('sum+',sum);
}
sumFun()

console.log('sum',sum);