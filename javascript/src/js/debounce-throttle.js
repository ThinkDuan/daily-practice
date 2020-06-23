//节流：持续触发事件时，保证固定时间内只执行一次
function throttle(fn,interval){
  let timer = null,last = new Date().getTime()
  return function(...args){
    let context = this
    let now = new Date().getTime()
    if(now - last < interval){
      if(timer){
        clearTimeout(timer)
        timer = setTimeout(function(){
          fn.apply(context,args)
        },interval)
      }
    } else {
      last = now
      fn.apply(context,args)
    }
  }
}
// 防抖：持续触发事件，一段时间内没有再触发事件才执行一次
function debounce(fn,interval,immediate){
  let timer = null;
  let immediateDo = false
  return function(){
    let context = this
    let args = Array.from(arguments)
    if(immediate && !immediateDo){
      fn.apply(context,args)
      immediateDo = true
    } else {
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(function(){
        fn.apply(context,args)
      },interval)
    }
  }
}

export default {
  debounce,
  throttle
}




// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);

// async1();

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
//   }).then(function() {
//     console.log('promise2');
// });

// console.log('script end');