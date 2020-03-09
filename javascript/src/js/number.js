// javascript基本数据类型有 string,number,boolean,undefined,null,symbel,object
// NaN 属于number类型，判断NaN的数据类型有 isNaN() 和 Number.isNaN() 这两者有区别
// isNaN() 强制转换为数字类型之后，不是NaN是都是 false  Number.isNaN() 方法，只有在NaN才是true
// 其他的值都是false
// NaN 全局属性表示不是一个数字，not-a-number
console.log(isNaN('hello'))
console.log(isNaN(NaN))
console.log(Number.isNaN('hello'))
console.log(Number.isNaN(NaN))