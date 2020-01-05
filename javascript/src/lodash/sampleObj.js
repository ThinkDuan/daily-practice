import isObject from './isObject'
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
export default sampleObj