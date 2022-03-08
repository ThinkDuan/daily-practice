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
ES6规定
var、function声明的全局变量依然为顶层变量的属性
let、const、class声明的变量全局变量依然为全局变量，但是这个全局变量不属于顶层变量的

## 什么是变量提升
变量提升是javascript在编译阶段将变量声明提前放入到内存中

## let const 声明的变量存在哪
在全局变量范围内声明，使用let，const声明的对象存在，Script对象上，在全局范围内var声明的对象存在全局变量上global；在ES6具有块级作用域的变量声明在Block对象上。

在块级作用域中使用var声明的变量依然存在于global对象上。

- 使用let，const在全局范围内声明变量，之后可以在块级作用域中使用let或者const声明同名的变量，但是不可以在全局作用域或者块级作用域中使用var声明同名变量。
- 至此可见，block对象上的变量可以重复命名scrip对象以及global对象的上的同名变量；script对象上已有的的变量在global对象上不可重复命名
- block对象可以有多个
- for循环for ()是一个block，{}是另外一个block，