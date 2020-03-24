// function is(x,y){
//   if(x === y){
//     return x !== 0 || y !== 0 || 1/x === 1/y
//   } else {
//     return x !== x && y !== y
//   }
// }
// console.log(is(0,-0))
// console.log(is(0,0))
// console.log(is(0,'0'))
// console.log(is(0,'NaN'))
// console.log(is(NaN,NaN))


class Temp {}
Temp.prototype.name = 'zhangsan'
Temp.prototype.print = function(){
  console.log(this.name)
}
var temp = new Temp()
console.group('temp')
console.log('temp',temp)
console.log('temp.__proto__ === Temp.prototype======>',temp.__proto__ === Temp.prototype)
console.log('temp.__proto__===>',temp.__proto__)
console.log('Temp.__proto__======>',Temp.__proto__)
console.log('Temp.__proto__=== Function.prototype',Temp.__proto__ === Function.prototype)
console.log('temp.constructor === Temp======>',temp.constructor === Temp)
console.log('temp.constructor======>',temp.constructor)
console.log('Temp.constructor======>',Temp.constructor)
console.log('temp.prototype======>',temp.prototype)
console.log('Temp.prototype======>',Temp.prototype)
console.log('Temp.prototype.constructor======>',Temp.prototype.constructor)
console.log(Object.constructor)
console.groupEnd()
'use strict'
const obj = {}
const obj1 = Object.create(Object.prototype)
console.group('obj')
console.log('obj.prototype--->',obj.prototype)
console.log('Object.prototype',Object.prototype.name = '张三')
console.log('obj.name',obj.name)
console.log('obj1.name--->',obj1.name)
console.groupEnd()

let prototypeObj = {
  name: 'Tom',
  age: 12,
  say(){
    console.log('I am Tom',this.name)
  }
}

let CreateOne = function(name){
  this.name = name
}
let CreateTwo = function(name){
  this.name = name
}
CreateOne.prototype = prototypeObj
CreateTwo.prototype = prototypeObj
let oneObj = new CreateOne("ZhangSan")
let twoObj = new CreateTwo()

console.log('oneObj instanceof CreateTwo-->',oneObj instanceof CreateTwo)
console.log('oneObj.name--->',oneObj.name)
console.log('twoObj.name--->',twoObj.name)
console.log('oneObj instanceof Object--->',oneObj instanceof Object)