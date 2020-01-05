// 比较相邻的两个元素的大小，最后一个元素是最大的
function bubble(arr){
  for(let i = 0;i< arr.length;i++){
    for(let j = 0;j< arr.length - 1 - i;j++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
let arr = [6,9,2,4,7,9,3]
console.log(bubble(arr))