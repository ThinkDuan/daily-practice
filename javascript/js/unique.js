function unique(arr){
  return arr.filter((item,index) => {
    let aindex = baseIndexOf(item,arr)
    if(aindex !== index){
      if(isObject(item)){
        return !sampleObj(item,arr[aindex])
      }else {
        return !sampleBase(item,arr[aindex])
      }
    }
    return true
  })
}
function baseIndexOf(item,arr){
  for(let i = 0;i<arr.length;i++){
    if(isObject(item) && isObject(arr[i]) && sampleObj(item,arr[i])){
      return i
    } else if(sampleBase(item,arr[i])){
      return i
    }
  }
  return -1
}
function sampleBase(a,b){
  return Object.is(a,b)
}
function sampleObj(obja,objb){
  if(!isObject(obja) || !isObject(objb)) throw new Error('Except two Object type')
  let objaKeys = Object.keys(obja)
  let objbKeys = Object.keys(objb)
  if(objaKeys.length !== objbKeys.length) return false
  for(let i = 0;i<objaKeys.length;i++){
    if(obja[objaKeys[i]] !== objb[objbKeys[i]]){
      if(isObject(obja[objaKeys[i]]) && isObject(objb[objbKeys[i]])){
        sampleObj(obja[objaKeys[i]],objb[objbKeys[i]])
      } else {
        return false
      }
    }
  }
  return true
}
function isObject(obj){
  if(!obj) return false
  if(Object.prototype.toString.call(obj) === '[object Object]') return true
  return false
  // const type = typeof obj
  // return value !== null && ((type === 'object' || type === 'function'))
}
let arr = [1,1,2,'2',NaN,NaN,'NaN',0,-0,{'name': 'zhang'},{'name': 'zhang'},{},{}]
// let arr = [1,{'name': 'zhang'},{'name': 'zhang'},{},{}]
console.log(unique(arr))