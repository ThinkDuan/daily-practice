// let a = {
//   i: 0,
//   valueOf: function(){
//     return ++a.i
//   }
// }
// if(a == 1 && a == 2 && a ==3){
//   console.log('Hello')
// }
//节流
function throttle(fn,interval){
  let timer = null,last = new Date().getTime()
  return function(...args){
    let context = this
    let now = new Date().getTime()
    if(now - last < interval){
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(function(){
        fn.apply(context,args)
      },interval)
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
let div = document.querySelector('#content')
div.style.width = '100%'
div.style.height = '100px'
div.style.background = 'red'
div.style.color = '#ffffff'
let count = 0
let mouseoverDebounceFunc = debounce(function(e){
  console.log(e.target.textContent)
  div.innerHTML = div.innerHTML + '防抖' + count++
},1000,true)
let mousemoveThrottleFunc = throttle(function(e){
  div.innerHTML = '节流' + count++
},1000)
// div.addEventListener('mousemove',mouseoverDebounceFunc)
div.addEventListener('mousemove',mousemoveThrottleFunc)

// [['a','0'],['b','1'],['c','2']] => ['abc','ab2','a1c','a12','0bc','0b2','01c','012']
let result = []
function enumArr(arr,index){
  arr.forEach((item,index) => {
    if(index !== arr.length){
      enumArr(arr,index)
    } else {
      result.push()
    }
  });
}
