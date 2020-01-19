// this 的指向
// 1. 全局环境中， 非严格模式this指向window，严格模式指向undefined
// 2. 函数环境下，当函数作为对象的方法调用时，this是调用该函数的对象，多个对象级联调用时this只和最近的引用有关系 o.b.f() f的this指向 o.b 
// 3. 原型链中的this 如果原型对象上存在的方法被实例调用，则该方法里的this指向的实例 
// 4. 

// 'use strict'
function bar(){
  'use strict'
  console.log('dont use strict--->',this)
  console.log('use strict--->',this)
}
bar()
console.log(this)

var a = 20;
function foo () {
    var a = 1;
    var obj = {
        a: 10,
        c: this.a + 20,
        fn: function () {
            return this.a;
        }
    }
    return obj.c;

}
console.log(window.foo());  // ?
console.log(foo());    // ？