// 选择排序，选择未排序数组中的最大或者最小的值放到已排序数组的头部或者尾部 O(n^2)
function select(arr){
  for(let i = 0;i<arr.length;i++){
    let tempIndex = i
    for(let j = i + 1;j<arr.length;j++){
      if(arr[j] < arr[tempIndex]){
        tempIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[tempIndex]
    arr[tempIndex] = temp
  }
  return arr
}
let arr = [6,9,2,4,7,9,3]
console.log(select(arr))