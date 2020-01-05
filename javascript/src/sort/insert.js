// 插入排序，从未排序的队列中取出一个值，和已经排序的队列里的数据进行对比，然后插入对应的位置
function insert(arr){ 
 for(let i = 0;i<arr.length;i++){
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
console.log(insert(arr))