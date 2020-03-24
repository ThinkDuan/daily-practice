
/**
 *把子对象的原型指向父对象的实例
 * Object.create(proto[,propertiesObject]) 创建一个新对象，使用现有对象来提供新创建的对象的__proto__
 * @param {*} name
 */
function Super(name){
  this.name = name
  this.sex = 'male'
  this.obj = {
    a: '1',
    b: '2'
  }
  this.say = function(){
    console.log(`this is ${this.name},this obj is ${this.obj.a}`)
  }
}
function OtherSuper(name){
  this.otherName = name
  this.otherSay = function(){
    console.log(`otherSuper say ${this.otherName}`)
  }
}
Super.prototype.printName = function(){
  console.log(`This name is ${this.name},this sex is ${this.sex}`)
}
function Child(name){
  Super.apply(this,arguments)
  OtherSuper.apply(this,arguments)
  this.name = name
}
console.log('Object.assign',Object.assign)
Child.prototype = Object.create(Super.prototype)
Object.assign(Child.prototype,OtherSuper.prototype)
Child.prototype.constructor = Child
Object.defineProperty(Child.prototype,'constructor',{
  enumerable: false
})

let childOne = new Child('Joho')
let childTwo = new Child('Mike')
childOne.printName()
console.log(childOne.constructor)
childOne.say()
childOne.otherSay()
childOne.obj.a = '123'
childOne.say()
childTwo.printName()
childTwo.say()
console.log(childOne.constructor,'childone constructor')
console.log(childOne instanceof Super)
console.log(childOne instanceof Child)
console.log(Super.prototype.constructor,Child.prototype.constructor)
console.log(Super.constructor,Child.constructor)
console.log(Child.prototype.isPrototypeOf(childOne))
console.log(Child.prototype.isPrototypeOf(childTwo))


// 实例对象的constructor属性指向构造函数，实例对象的__proto__指向 原型对象， 原型对象的constructor属性指向 构造函数，构造函数的prototype属性指向 原型对象
function extend(supers,childs){
  function F(){}
  F.prototype = supers.prototype
  var inner = new F()
  inner.constructor = childs
  childs.prototype = childs
  Object.defineProperty(childs.prototype,'constructor',{
      enumerable:false
  });
}

