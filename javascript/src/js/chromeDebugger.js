console.group("闭包");
var fn;
function foo(value) {
    var a = value;
    function baz() {
        console.log( a );
    }
    fn = baz;
}
function bar() {
    fn();
}

foo(2);
bar();

var name = "window";

var p = {
  name: 'Perter',
  getName: function() {

    // 利用变量保存的方式保证其访问的是p对象
    var self = this;
    return function() {
      return self.name;
    }
  }
}

var getName = p.getName();
var _name = getName();
console.log(_name);
console.log("输出1~5");
for (var i=1; i<=5; i++) {
  (function(value){
    setTimeout( function timer() {
      console.log(value);
  }, value*1000 );
  })(i);
}
console.groupEnd();

console.group("变量提升");
console.log(name);
function name(){
  var name = "Jerry";
  console.log("this is inside name:" + name);
}
var name = "Tom";
console.log("this is outer name:" + name);
// name(); //name变量被重新复制为简单变量
console.groupEnd();

