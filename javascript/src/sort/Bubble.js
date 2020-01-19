// 比较相邻的两个元素的大小，最后一个元素是最大的
// 冒泡排序，每一趟把最大的值放到最后一个或者倒序把最小的值放到第一个
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
let bestArr = [0,1,2,3,4,6]
console.log(bubble(arr))

function bubbleSort(arr,type){
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j< arr.length - i;j++){
      if(type === 1){
        if(arr[j] < arr[j+1]){
          let temp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = temp
        }
      } else {
        if(arr[j] > arr[j+1]){
          let temp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = temp
        }
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr,1))
