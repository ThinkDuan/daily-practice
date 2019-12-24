// 在Lambda演算（一套数理逻辑的形式系统，具体我也没深入研究过）中有个小技巧：假如一个函数只能收一个参数，那么这个函数怎么实现加法呢，
// 因为高阶函数是可以当参数传递和返回值的，所以问题就简化为：写一个只有一个参数的函数，而这个函数返回一个带参数的函数，这样就实现了能写两个参数的函数了
// （具体参见下边代码）——这就是所谓的柯里化（Currying，以逻辑学家Hsakell Curry命名），也可以理解为一种在处理函数过程中的逻辑思维方式
// function add(a,b){
//   return a + b
// }
// function curry(a){
//   return function(b){
//     return a + b
//   }
// }
// console.log(add(1,2))
// console.log(curry(1)(2))
// console.log(curry(1)())

// const curry = (fn, ...arg) => {
//   let all = arg || [],
//       length = fn.length;
//   console.log('curry----length',length)
//   return (...rest) => {
//       let _args = all;
//       _args.push(...rest);
//       // console.log('-----_args---',_args)
//       if (rest.length === 0) {
// 　　　　　　　all=[];
//           return fn.apply(this, _args);
//       } else {
//           return curry.call(this, fn, ..._args);
//       }
//   }
// }
// let test = curry(function(...rest) {
//   let args = rest.map(val => val * 10);
//   console.log(args);
// })
// test(2);
// test(2);
// test(3);
// test();
// test(5);
// test();
// test(2)(2)(2)(3)(4)(5)(6)();
// test(2, 3, 4, 5, 6, 7)();


// // 实现一个add方法，使计算结果能够满足如下预期：
// // add(1)(2)(3) = 6;
// // add(1, 2, 3)(4) = 10;
// // add(1)(2)(3)(4)(5) = 15;
// function add(){
//   let arg = Array.prototype.slice.call(arguments)
//   let adder = function(){
//     arg.push(...arguments)
//     return adder
//   }
//   adder.toString = function(){
//     return arg.reduce(function(a,b){
//       return a+b
//     })
//   }
//   return adder
// }
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;


function add(a,b){
  return a + b
}
function curryCreate(fn,...arg){
  let all = arg
  return function(...rest){
    let args = all.push(rest)
    return fn.apply(null,args)
  }
}
let add1 = curryCreate(add,1)
add1(1)
