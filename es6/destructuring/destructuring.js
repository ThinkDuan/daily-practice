// 完全解构
let [x,y] = [1,2]
console.log(x,y)
// 结构不成功则返回undefined
let [a,b] = []
console.log(a,b)

let [c,d] = [1]
console.log(c,d)
// 不完全结构，即等号左边的模式只匹配一部分等号右边的数组，这种情况下解构被认为是成功的
let [e,[f]] = [[1,2,3],[4,6]]
console.log(e,f)

// 如果等号右边的是不可遍历的结构那么将会报错
// 报错,前五个转变为对象之后不具备iterator接口，最后一个本身不具备iterator接口
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};