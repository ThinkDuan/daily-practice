// this 的指向
// 1. 全局环境中， 非严格模式this指向window，严格模式指向undefined
// 2. 函数环境下，当函数作为对象的方法调用时，this是调用该函数的对象，多个对象级联调用时this只和最近的引用有关系 o.b.f() f的this指向 o.b 
// 3. 原型链中的this 如果原型对象上存在的方法被实例调用，则该方法里的this指向的实例 
// 4. 使用call和apply改变this的指向的时候，如果第一个参数传递的不是一个对象，则会调用toObject方法其转换为对象
// fun.bind(object) 方法会创建一个和和fun具有相同作用域和函数体的函数，在这个 新函数 之中this被永久的绑定到bind的第一个参数，无论这个函数是被谁调用的
// 箭头函数中，this与封闭词法环境保持一致，全局环境中就是指向全局变量。 函数环境中和上层函数保持一致

// 'use strict'
function bar(){
  'use strict'
  console.log('dont use strict--->',this)
  console.log('use strict--->',this)
}
bar()
console.group('this')
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

function barOne(){
    console.log('bar-->',Object.prototype.toString.call(this))
}
barOne.call(1) // new Number(1)
barOne.apply('123') // new String('123')


function bindFun(){
    console.log('bindFun--->this.name',this.name)
}
let bindObjOne = {
    name: 'Tome'
}
let bindObjTwo = {
    name: 'Jerry'
}
let bindFunOne = bindFun.bind(bindObjOne)
let bindFunTwo = bindFun.bind(bindObjTwo)

bindFunOne.bind({
    name: 12
})
bindFunOne()
bindFunTwo()
let objThree = {
    name: 'change'
}
bindFunOne.call(objThree)
// objThree.bindFun() // 抛出错误

// 全局环境中指向全局变量
var fooOne = (() => this)
console.log('fooOne->',fooOne())
// 封闭词法环境中
var objFour = {
    name: 'zhangsan'
}
objFour.fooOne = fooOne
console.log(objFour.fooOne())
console.log(fooOne.call(objFour))


function f(){
    alert(x);
}

function g(){
    var x = 100;
    f();
}
for(var i = 0;i<5;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },i*100)
    }
    )(i)
}
for(let i = 0;i<5;i++){
    setTimeout(function(){
        console.log('let',i)
    },i*100)
}
function cFun(i){
    console.log('cfun',i)
}
for(var i = 0;i<5;i++){
    cFun(i)
}
const task = []
for(var j = 0;j<5;j++){
    (function(j){
        task.push(new Promise((res,rej) => {
            setTimeout(function(){
                console.log(j)
                res()
            },j*1000)
        }))
    })(j)
}

Promise.all(task).then(() => {
    setTimeout(function(){
        console.log(j)
    },1000)
})
const taskO = []
for(let i = 0;i<5;i++){
    taskO.push(new Promise((res,rej) => {
        setTimeout(function(){
            console.log('let -->',i)
            res(i)
        },i*1000)
    }))
}
Promise.all(taskO).then((i) => {
    setTimeout(function(){
        console.log(i[4]+1)
    },1000)
})
let arr1 = [1,2,3,4]
for(var i in arr1){
    console.log('for...in',i)
}
for(var j in objFour){
    console.log('for...in...obj',j)
}
let arr2 = [3,4,5,6]
let arr3 = [4,5,6,5]
function exFun(arr,arr1){
    return [...arr].filter(x => { return arr1.includes(x)})
}
function pexFun(){
    let args = Array.prototype.slice.call(arguments)
    let arr = args[0]
    args.forEach((item) => {
        arr = exFun(arr,item)
    })
    return arr
}
let arr = new Set(pexFun(arr1,arr2,arr3))
console.log('set-->',Array.from(arr))
g()
console.groupEnd()