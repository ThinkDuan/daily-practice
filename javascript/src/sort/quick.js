// 快速排序的基本思想：选择一个基准，然后将比基准大的值都放到其右边，将比基准值小的值都放到其左边，
// 然后分别对左右两边分别进行排序
// 快速排序具体实现方法
// 快速排序分为两部分，基础是分治法加上挖坑填值法
// 挖坑填值法：选择基准值，将基准值(a[0]或者是其他值)存在临时变量(base)中，base = a[0]，这时
// a[0] 就可以认为是坑，从右边循环直到找到比基准值小的值，将这个值填到之前的坑里面，这个值得位置
// 就是另外一个坑然后从左边循环直到找到比基准值大的值，然后放到之前的坑里面，直到 i = j,然后进行
// 分治循环
// 直到找到比基准值大的值，将这个值填的
// 分治法：递归调用

function quick(arr,left,right){
  let i = left,j = right,base=arr[left];
  while(i < j){
    while(i < j && base < arr[j]){
      j--
    }
    if(i < j){
      arr[i] = arr[j]
      i++
    }
    while(i < j && base > arr[i]){
      i++
    }
    if(i<j){
      arr[j] = arr[i]
      j--
    }
  }
  arr[i] = base
  return i
}
function quickSort(arr,left,right){
  if(left < right){
    let i = quick(arr,left,right)
    quickSort(arr,left,i - 1)
    quickSort(arr,i + 1,right)
  }
}

let arr = [3,2,4,5,7,1,7,9]
console.log(quick(arr,0,arr.length - 1))
console.log(arr)
console.log(quickSort(arr,0,arr.length - 1))
console.log(arr)