/*
 * @Author: your name
 * @Date: 2020-04-11 20:37:31
 * @LastEditTime: 2020-04-11 22:23:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/javascript/src/js/settimeout.js
 */
// 使用setTimeout来模拟setInterval的原因
// 浏览器环境中会发生 setInterval的计时开始时间是在相应函数执行开始，这就导致超过执行间隔时间，会导致两个函数之间的间隔被忽略，轮询请求时会导致大量请求累计，同时调用的函数花费的时间很长，某些调用会被忽略
// Node环境间隔和setTimeout一致
let set = setInterval(foo,1000,'q','w')
function sleep(startTime,time){
  let endTime = new Date().getTime();
  // console.log("sleep")
  while(true){
    if(new Date().getTime() - startTime > time){
      break;
    }
  }
}
let startTime = 0;
function foo(q,w){
  console.log("---foo time",new Date().getTime() - startTime,q,w)
  startTime = new Date().getTime();
  sleep(startTime,2500);
  let endTime = new Date().getTime();
  console.log('totalTIme',endTime - startTime)
}

function setIntervalFun(fn,time,value){
  return setTimeout(function(value){
    fn();
    setIntervalFun(fn,time,value)
  },time);
}
// let startTime = 0;
// setIntervalFun(function(){
//   console.log('111',new Date().getTime() - startTime)
//   startTime = new Date().getTime()
//   sleep(startTime,100)
//   // console.log('setIntervalFun')
// },2000)