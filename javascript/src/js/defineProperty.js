// Object.defineProperty(obj, prop, descriptor) 方法会直接在一个对象上创建一个新属性或者修改一个对象的现有属性并返回这个对象
// obj 要在其上定义属性的对象。
// prop 要定义或修改的属性的名称。
// descriptor 将被定义或修改的属性描述符。

// descriptor 对象所包含的值如下：
// value: 当前属性的值，默认为undefined； writable：当前属性是否可写，即是否可以通过赋值运算符改变其值，默认为false；enumerable：是否可枚举，是否可以出现在该对象的
// 枚举属性中，默认为false；
// configurable：当前属性是否可以被删除，以及除value和writable之外的属性是否可以被改变(改变为其他值或者是原来的值都会抛出异常)，默认为 false. 
// 经在chrome上测试，configurable为false时，该改变 value 属性也会抛出异常，改变writable属性则没有效果，不会报错

// 和通过赋值操作添加的属性和属性值的区别
// 通过赋值操作添加的普通属性是可枚举的（enumerable: true）能够在属性枚举的期间呈现出来（for....in或forEach；可写的(writable: true)，可以通过赋值操作来改变其值；
// 可配置的(configurable: true)，可以删除（delete obj.keys）
// 默认情况下通过 defineProperty 添加的属性值是不可以修改的，即不可枚举，不可修改值，不可删除

// 对象的描述符存在两种：属性描述符(一个具有值的属性)和存取描述符（getter-setter对描述的属性）描述符必须是两者中的一个不能同时存在

// 数据描述符和存取描述符同时存在的属性
// configurable 默认为false，enumerable 默认为false
// 数据描述符同时具有的可选键值 value 默认为undefined，writable 默认为false
// 存取描述符同时具有的可选键值 get 默认为undefined ，set 默认为undefined
// 如果一个描述符 value，writable 或者 get，set其中的任何一个关键键值不存在，则该描述符被认为是一个数据描述符，


// 重复使用defineProperty()定义同一个属性时，如果这个属性的之前的属性configurable为false则会抛出异常，为true时可正常改变
// 如果一个描述符同时具有value,writable 和get，set 则产生一个异常

// 如果要使一个对象不可写，不可删除，不可枚举，则可以使用Object.freeze()方法，默认实现
function freezeFun(obj){
  
}
let obj = {
  name: 'zhangsan'
}
let descriptorObj = Object.create(null)
Object.defineProperty(obj,'age',descriptorObj)
console.log('descriptorObj-->', descriptorObj)
// 显示声明
Object.defineProperty(obj,'sex',{
  // value: 'male',
  // writable: false,
  // // set: function(){}
  // enumerable: false,
  configurable: false,
  get:function(){
    return 1
  }
})
Object.defineProperty(obj,'sex',{
  // value: 'female',
  wirtable: true,
  // configurable: false
  // enumerable: false
})
obj.sex = 12
function foo(){
  console.log(123)
}
foo.d = {
  value: 12
}

// 循环使用同一对象
function withValue(value){
  let d = withValue.d || (
    withValue.d = {
      wirtable: true,
      value: null,
      enumerable: true,
      configurable: true
    }
  )
  d.value = value
  return d
}
let objOne = {}
Object.defineProperty(objOne,'static',withValue('static'))


console.group('defineProperty')
console.log('descriptorObj->',descriptorObj)
console.log('obj.sex--->',obj.sex)
console.log('obj.age->',obj.age)
obj.sex = 'female'
obj.age = 12
console.log('obj.sex--->',obj.sex)
console.log('obj.age->',obj.age)
console.log('keys',Object.keys(obj))
delete obj.sex
console.log('obj->',obj)

console.log('foo.d->',foo.d)
foo()
console.groupEnd()