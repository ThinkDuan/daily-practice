//节流
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
// 防抖
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