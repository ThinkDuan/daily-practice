ES6 新增了块级作用域 {}
let 和 const 在块级作用域范围内有效，不存在变量提升，即变量在未声明之前不能使用，会报错。只要在块级作用域中使用 let 命令声明了变量，那么在这之前的使用都是会报错的
`
{
  typeof a // 会报错，因为使用了let 声明变量
  let a = 1
}

{
  typeof a // undefind 不会报错
}
function foo(x){
  let x = x // 会报错x已经被定义了，
}
`