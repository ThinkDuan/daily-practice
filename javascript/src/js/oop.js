// 面向对象和面向过程的编程
console.log("=====面向对象和面向过程的编程====");
(function(){
  // 面向对象编程,首先抽象出
  let Person = function(name){
    this.name = name;
  }
  Person.prototype = {
    eat: function(something){
      console.log(this.name,"吃",something)
    }
  }
  // 面向对象调用
  let zhangsan = new Person("张三");
  zhangsan.eat("火锅");
  // 扩展
  zhangsan.coding = function (){
    console.log(this.name,"吃饱了,开始干活");
  }
  zhangsan.coding();

  // 面向过程
  let eat = function (who,something){
    console.log(who,'吃',something);
  }
  let coding = function(who){
    console.log(who,"开始码代码");
  }
  // 面向过程调用
  eat("李四","苹果");
  coding("李四");
})();
console.log("=====   this   ====");
// 函数里面的this的指向一般是调用这个函数的对象
{
  console.log("=======普通函数调用======");
  var age = 25;
  // let定义的变量具有局部作用域,let不会进行变量提升,如果使用未赋值的值会报错
  // console.log("let声明变量,在赋值之前调用,会报错",name);
  let name = "王五";
  function readName(){
    console.log('let定义的变量:',this.name);
    console.log('var定义的变量:',this.age);
  }
  readName();

  console.log("=======对象函数调用=======");
  let zhangsan = {
    name: "这是个默认的人",
    age: 100,
    getName: function(){
      console.log('name:',this.name);
    },
    getAge: function(){
      console.log('age:',this.age);
    },
    setName: function(name){
      this.name = name;
    },
    setAge: function (age){
      this.age = age;
    }
  };
  zhangsan.setName("zhangsan");
  zhangsan.setAge(22);
  zhangsan.getName();
  zhangsan.getAge();
}
