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

// 简单实现，参数只能从右到左传递
// function createCurry(func, args) {

//   var arity = func.length;
//   var args = args || [];

//   return function() {
//       var _args = [].slice.call(arguments);
//       [].push.apply(_args, args);
//       console.log(_args,args)

//       // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//       if (_args.length < arity) {
//           return createCurry.call(this, func, _args);
//       }

//       // 参数收集完毕，则执行func
//       return func.apply(this, _args);
//   }
// }

// function add(a,b,c,d){
//   return a+b+c+d
// }
// let _add = createCurry(add)
// console.log(_add(1)(2)(3)(4))
// console.log(_add(1,2)(3)(4))
// console.log(_add(1,2,3)(4))


// function curry(fn,args){
//   let length = fn.length;
//   let arg = args || []
//   return function(){
//     let _args = Array.prototype.slice.call(arguments)
//     _args = arg.concat(_args)
//     if(_args.length < length){
//       return curry.call(this,fn,_args)
//     }
//     return fn.apply(this,_args)
//   }
// }
// function add(a,b,c,d){
//   return a+b+c+d
// }
// const _add = curry(add)
// console.log(_add(1)(2)(3)(4))
// _add(1,2)(3)(4)
// _add(1)(2,3)(4)

// function partial(a,b){
//   return a+b
// }
// let partialOne = partial.bind(null,1)
// function createPartial(fn,a){
//   return function(b){
//     return fn(a,b)
//   }
// }
// console.log(partialOne(3))
// function createPartial(){}

// function createFun(){
//   let _args = Array.prototype.slice.call(arguments)
//   let add = function(){
//     let adder = function(){
//       _args.push(...arguments);
//       console.log(_args)
//       return adder
//     }
//     adder.toString = function(){
//       return _args.reduce((a,b) => {
//         return a+b
//       })
//     }
//     return adder
//   }
//   return add(..._args)
// }
// console.log(createFun(1)(2).toString())

// 函数柯里化是将一个接受多个参数的函数经过柯里化处理之后变为一个接受多个单一参数的函数并返回结果的技术
// 基本实现
function add(a,b,c){
  return a+b+c
}
function createCurry(fn,args){
  let length = fn.length
  let _args = args || []
  return function(){
    _args.push(...arguments)
    if(_args.length < length){
      return createCurry.call(this,fn,_args)
    }
    return fn.apply(this,_args)
  }
}
let _add = createCurry(add)
console.log(_add(1)(2)(3))
// 实例应用


function createAdd(){
  let arg = Array.prototype.slice.call(arguments)
  let adder = function(){
    arg.push(...arguments)
    console.log(arg)
    return adder
  }
  adder.toString = function(){
    return arg.reduce((a,b) => {
      return a+b
    })
  }
  return adder
}
createAdd(1)(2)(3)
console.log(createAdd(1,2)(3).toString())


// 参数复用
function check(reg){
  return function(target){
    return reg.test(target)
  }
}
let checkName = check(/\d/)


