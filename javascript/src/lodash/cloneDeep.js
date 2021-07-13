import isObject from './isObject'
function deepClone(target){
  if(typeof target !== 'object' || target === null) return target
  let newObj
  if(Object.prototype.toString.call(target) === '[object Array]'){
    newObj = cloneArray(target)
  } else {
    newObj = cloneObject(target)
  }
  return newObj
}
// 深拷贝对象
function cloneObject(obj){
  let newObj = {}
  Object.keys(obj).forEach((item) => {
    if(typeof obj[item] === 'object' && obj[item] !== null){
      if(Object.prototype.toString.call(obj[item]) === '[object Object]'){
        newObj[item] = cloneObject(obj[item])
      } else if(Object.prototype.toString.call(obj[item]) === '[object Array]'){
        newObj[item] = cloneArray(obj[item])
      } else {
        newObj[item] = cloneFunction(obj[item])
      }
    } else if(typeof obj[item] === 'symbol'){
      newObj[item] = cloneSymbol(obj[item])
    } else {
      newObj[item] = obj[item]
    }
  })
  return newObj
}
function cloneFunction(fun){
  let funString = fun.toString()
  let args = funString.match(/\(.*\)$/)[0]
  let body = funString.match(/\{.*\}$/)[0]
  return new Function(args.substring(1,args.length -1),body.substring(1,args.length -1))
}
function cloneArray(array){
  let newarr = [];
  array.forEach((item) => {
    if(typeof item === 'object' && item !== null){
      if(Object.prototype.toString.call(item) === '[object Object]'){
        newarr.push(cloneObject(item))
      } else if(Object.prototype.toString.call(item) === '[object Array]'){
        newarr.push(cloneArray(item))
      } else {
        newarr.push(cloneFunction(item))
      }
    } else {
      newarr.push(item)
    }
  })
  return newarr
}
function cloneSymbol(data){
  let symbolString = data.toString()
  let args = symbolString.match(/\(.*\)$/)[0]
  return Symbol(args.substring(1,args.length -1))
}
export default deepClone