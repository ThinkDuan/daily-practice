import sampleObj from './sampleObj'
import isObject from './isObject'
import baseIndexOf from './baseIndexOf'
import sampleBase from './sampleBase'
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
export default unique