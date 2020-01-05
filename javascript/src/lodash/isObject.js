function isObject(obj){
  if(!obj) return false
  if(Object.prototype.toString.call(obj) === '[object Object]') return true
  return false
  // const type = typeof obj
  // return value !== null && ((type === 'object' || type === 'function'))
}
export default isObject