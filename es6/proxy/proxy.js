let obj = {
  name: 'zhangsan',
  sex: 12,
  school: {
    high: 'beijing'
  },
  score: [120,134]
}
let objOne = {
  name: 'lisi'
}
let objPro = new Proxy(obj,{
  get: function(target,propKey,receiver){
    console.log('--------get')
    console.log('target --->',target,typeof target,'propkey ->',propKey,typeof propKey,'recever -> ',receiver,typeof receiver)
    Reflect.get(target,propKey,receiver)
  },
  set: function(target,propKey,receiver){
    console.log('--------set')
    Reflect.get(target,propKey,receiver)
  }
})
console.log('get obj.name ->',objPro.name)
// console.log('set obj.sex=13 ->',objPro.sex = 13)
// console.log('get obj.sex ->',objPro.sex)
// console.log('objOne.name ->',objOne.name)