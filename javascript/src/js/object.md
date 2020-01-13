### 原型
每一个对象（null除外）都和 另一个 对象相关联，这 另一个 对象就是原型， 每一个对象都从 原型 上继承属性
Object.prototype 没有原型
Object.create(a[,b])  Object.create() 是一个静态方法  接受两个参数，第一个参数(必填)是 构建函数 第二个参数是对象的配置
创建没有原型的对象 Object.create(null)

原型对象是类的唯一标识： 当且仅当两个对象继承自同一个原型对象时他们才是同一个类的实例。初始化对象状态的构造函数不是类的标识，构造函数可以看做是类的 ”公共标识“
### 作用域链
> 对象分为普通对象和函数对象，Function类型也为对象
普通对象是通过 new Object() 或者 对象字面量创建出来对象 或者 通过 实例化构造函数创建出来的
函数对象是通过 new Function() 或者 函数字面量或者是函数声明创建出来的对象

1. 普通对象
`
let a = {}
let b = new Object()
let c = new Person()
`
2. 函数对象
`
let a = function(){}
function Person(){}
let b = new Function('b','console.log(123)')
`
### 构造函数以及实例
1. 构造函数

`
function Person(name){
  this.name = name
}
Person.prototype.getName = function(){
  return this.name
}
Person.prototype.sex = 23
const per1 = new Person('per1')
const per2 = new Person('per2')
`
实例对象都有一个constructor属性指向构造函数，在这里 per1.constructor 和 per2.constructor 都指向 构造函数 Person

## 第一个结论
> 所有的对象都有 __proto__ 和 constructor 属性，只有函数对象才有 prototype 属性，对象的 __proto__ 属性指向构造函数的原型对象 Person.prototype，原型对象（Person.prototype）的constructor 属性指向构造函数，
