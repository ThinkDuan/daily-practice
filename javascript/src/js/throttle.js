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