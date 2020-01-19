// 插入排序，从未排序的队列中取出一个值，和已经排序的队列里的数据进行对比，然后插入对应的位置
// 左边序列被任务被认为是有序的，未排序的队列中取出的值和已排序的队列进行比较，小于已排序最大值则把最大值向右侧移动一位
// 循环的未排序的队列O(n^2)
function insertFun(arr){ 
 for(let i = 0;i<arr.length -1;i++){
   let current = arr[i+1]
   let currentIndex = i
   while(currentIndex >= 0 && current < arr[currentIndex]){
     arr[currentIndex+1] = arr[currentIndex]
     currentIndex--
   }
   arr[currentIndex + 1] = current
 }
 return arr
}
let arr = [6,9,2,4,7,9,3]
console.log(insertFun(arr))

function insertSort(arr){
  for(let i = 0;i<arr.length -1;i++){
    let insertValue = arr[i+1]
    let currentIndex = i
    while(currentIndex >= 0 && insertValue < arr[currentIndex]){
      arr[currentIndex + 1] = arr[currentIndex]
      currentIndex--
    }
    arr[currentIndex + 1] = insertValue
  }
  return arr
}
console.log(insertSort(arr))