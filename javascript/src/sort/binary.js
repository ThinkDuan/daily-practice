// 二分查找,arr被认为是有序序列，折半查找，对于非均匀分布的数组折半查找的效率好一点，
// 对于均匀分布的的数组，插值查找则效率高一点，插值最重要的是寻找中值，
// mid = (left + right)/2 = left + (right - left)/2
// 1/2 为系数 插值寻找则是寻扎一个比较合适的系数，然后拿到比较合适的中值a[mid]
// 系数的改造 (key - a[left] / a[right] - a[left] ) 
function binary(target,arr){
  let begin = new Date().getTime()
  let left = 0,right = arr.length - 1;
  let mid = Math.floor(right >> 1);
  if(target <= arr[right] && target >= arr[0]){
    while(left <= right){
      if(target === arr[mid]){
        console.log('get->',new Date().getTime() - begin)
        return arr[mid]
      } else if(target < arr[mid]){
        right = mid
        mid = Math.floor(left + ((mid - left) >> 1))
        // (mid + left)/2 = left + (mid - left)/2
      } else if(target > arr[mid]){
        left = mid
        mid = Math.floor(mid + ((right - mid) >> 1))
        // (right + mid)/2 = mid + (right - mid)/2
        // >> << 按位与的运算优先级低于乘除和加减
      }
    }
  }
  console.log('not get->',new Date().getTime() - begin)
  return -1
}
function binaryOp(arr,target,left,right){
  let begin = new Date().getTime()
  while(left <= right){
    mid = left + ((target - arr[left])/(arr[right] - arr[left])) * (right - left)
    if(target === arr[mid]){
      console.log('binaryOp:get->',new Date().getTime() - begin)
      return arr[mid]
    } else if(target < arr[mid]){
      right = mid - 1
    } else if(target > arr[mid]){
      left = mid + 1
    }
  }
  console.log('not get->',new Date().getTime() - begin)
  return -1
}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(binary(6,arr))
console.log(binary(17,arr))
console.log(binaryOp(arr,6,0,13))