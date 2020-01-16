// 顶层对象在不同环境中是不一样的，浏览器环境中顶层对象是 window 同时 self 也指向window； web worker中self指向顶层对象  node环境中顶层对象是global 其他环境不支持
// 获取顶层对象 现在一般采取this来获取顶层对象
// 全局环境中 this会返回顶层对象，但是在node和web worker环境中返回的是当前模块
// 函数里面的this 如果函数不作为对象的方法使用返回的是顶层对象，但是严格模式下返回的 this 的值为undefined
// 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。
function getGlobal(){
  if(typeof self !== 'undefined'){
    return self
  }
  if(typeof window !== 'undefined'){
    return window
  }
  if(typeof global !== 'undefined'){
    return global
  }
  throw new Error('unable to local global object')
}