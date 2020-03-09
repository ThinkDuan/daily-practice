//节流：固定时间内重复触发事件，只执行一次
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
// 防抖：一段时间内触发的事件只执行一次，这段时间内重新出发事件则重新计算时间
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