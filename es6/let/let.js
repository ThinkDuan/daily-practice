function foo(){
  console.log('I am outside')
}
(function(foo){
  if(false){
   function foo(){
      console.log('I am inside')
    }
  }
  console.log('IEEF内部', foo)
  if (typeof foo === 'function') {
    foo()
  }
})(foo)
const a = ''
// console.log(b)
let b = 'name'

for (let i = 0;i<5;i++) {
  console.log(i)
}
console.log(i)

for (var i = 0;i<5;i++) {
  console.log(i)
}
console.log(i)

console.log(a)
let a = 'name';
var b = '1';
const c = 'const';
for (let i = 0;i<5;i++) {
  debugger
  console.log(i)
}
{
    // var a;
    console.log(b)
    let b;
}
console.log(i)