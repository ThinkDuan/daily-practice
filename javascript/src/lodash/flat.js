// Array.prototype.flat([length])
// 可用于将多维数组改变为一维数组，参数length 是展开的深度，使用Infinity可以展开任意层次，flat() 会去除数组里面的空选项

let arr = [[1,2],[1],[1,2,3]]
let arr1 = [1,[2,[3,4,[5]]],[2]]
var arr2 = [1,2,3,[1,2,3,4, [2,3,4]]];

// console.log(arr.flat())

// 展开一层数组
// reduce + concat
console.log(arr.reduce((acc,val) => acc.concat(val),[]))
// concat + ... 扩展运算符
console.log([].concat(...arr))

// reduce + concat + isArray + 递归 展开多层嵌套
function flatLength(arr,length = 1){
  return length > 0 ?  arr.reduce((acc,val) => {return acc.concat(Array.isArray(val) ? flatLength(val,length - 1) : val)},[]) : arr.slice();
}
function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
};
console.log(flatLength(arr2,Infinity))
console.log(flatDeep(arr2,Infinity))
console.log(JSON.parse('['+JSON.stringify(arr2).replace(/(\[|\])/g,'') + ']'))
console.log(JSON.stringify(arr2).replace(/(\[|\])/g,'').split(','))