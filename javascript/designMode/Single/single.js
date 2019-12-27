// 单例模式，顾名思义即保证实例在全局的单一性，概述如下：

// 系统中被唯一使用
// 一个类只有一个实例（注意只能有一个实例，必须是强相等===）

// 在日常业务场景中，我们经常会遇到需要单例模式的场景，比如最基本的弹窗，或是购物车等。因为不论是在单页面还是多页面应用程序中，我们都需要这些业务场景只会同时存在一个。而如果用单例模式，则会避免需要外部变量来判定是否存在的低端方法

class Model {
  constructor(name){
    this.name = name
  }
  printName(){
    console.log(this.name)
  }
}
Model.create = (function(name) {
  let instance = null
  return function(){
    if(!instance){
      instance = new Model(name) 
    }
    return instance
  }
})()
let m1 = Model.create('tom')
let m2 = Model.create('jerry')
console.log(m1 === m2)
m1.printName()
m2.printName()

const CModel = (function(){
  let instance = null
  return function(name){
    this.name = name
    if(!instance){
      instance = this
    }
    return instance
  }
})()
CModel.prototype.getName = function(){
  console.log('this name is ',this.name)
}
let m3 = new CModel('345')
let m4 = new CModel('456')
console.log(m3 === m4)
m3.getName()
m4.getName()