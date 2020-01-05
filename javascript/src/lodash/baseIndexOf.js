import sampleObj from './sampleObj'
import sampleBase from './sampleBase'
import isObject from './isObject'
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
export default baseIndexOf