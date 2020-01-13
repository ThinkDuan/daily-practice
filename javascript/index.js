import unique from './src/lodash/unique'
import Vue from 'vue'
import deepClone from './src/lodash/deepClone'
import IIFE from './src/js/IIFE'
import object from './src/js/object'
import index from './src/js/index'
let foo = Symbol('foo')
let arr = [1,1,2,'2',NaN,NaN,'NaN',0,-0,{'name': 'zhang'},{'name': 'zhang'},{},{},foo]
let obj = {
  name: "ZhangSan",
  sex: 12,
  getName: function(name){
    console.log(name)
    return 'Hello ' + name
  },
  family: ['Tom','Jerry'],
  school: {
    name: 'BeiJing',
    score: {
      math: 120
    }
  },
  symbolStr: Symbol('foo')
}
// let arr = [1,{'name': 'zhang'},{'name': 'zhang'},{},{}]


console.log('index arr',arr)
console.log('unique',unique(arr))
let deepArr = deepClone(arr)
console.group('deepClone')
console.log('deepClone',deepArr)
arr[9].name = 'lisi'
console.log('deepClone again',deepArr)
console.log('obj--->',obj)
let newObj = deepClone(obj)
console.log('deepClone Obj-->',newObj)
obj.name = 'Lily'
obj.getName = function(name){
  return name
}
obj.school.name = 'QingHua'
console.log('deepClone Obj again-->',newObj)
console.log(newObj.getName("HELLO"))
console.log(newObj.symbolStr === obj.symbolStr)
console.log('obj--->',obj)
console.groupEnd()

let text = unique(arr)
let div = document.createElement('div')
div.innerText = text
document.body.appendChild(div)
new Vue({
  el: app
})