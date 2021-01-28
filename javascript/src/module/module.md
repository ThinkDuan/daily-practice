## AMD，CMD，CommonJS和ES6对比

### AMD 异步模块定义
AMD是RequireJS在推广的时候对模块定义的规范化产出，它是一个概念，RequireJS是对这个概念的实现，就好比JavaScript语言是对ECMAScript规范的实现。AMD是一个组织，RequireJS是在这个组织下自定义的一套脚本语言

#### RequireJS
一个AMD框架，可以异步加载JS文件，按照模块加载方法，通过define()函数定义，第一个参数是一个数组，里面定义一些需要依赖的包，第二个参数是一个回调函数，通过变量来引用模块里面的方法，最后通过return输出

```
define([moduleA,moduleB], function(A, B) {
  function foo () {
    A.fun()
    B.fun()
  }
  return {
    foo: foo
  }
})
```
是一个依赖前置，异步定义的AMD框架在定义的同时如果需要用到别的模块，在最前面定义好即在参数数组里面进行引入，在回调里面加载

### CMD 同步定义模块
CMD是SeaJS在推广过程中对模块定义的规范化产出。SeaJS是对CMD规范的实现、
SeaJS依赖就近加载，属于同步加载
```
define(function(require, exports, modules) {
  var $ = require('modulesA')
})
```

## CommonJS规范
通过module.exports定义，在浏览器中并不支持，是通过nodeJS实现的

## ES6模块
export用于从模块中导出`实时`绑定的函数、对象或者原始值，以便其他程序可以通过import语句来使用，被导出的绑定值依然可以在本地（原模块）进行修改。
在使用import导入时，这些绑定值只能被导入模块读取，但在export导出模块中对这些值进行修改所修改的值也会实时的更新

无论怎么定义，export导出的模块都处于严格模式，
export语句不能用于嵌入式脚本中。

ES6模块的设计思想是尽量的静态化，在编译时就能确定模块的依赖关系，这使得静态优化成为可能
CommonJS和AMD模块，都只能在运行时确定这些关系

## ES6模块的优势
1. 静态分析
2. 不再需要UMD模块格式，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点
3. 不再需要对象作为命名空间（比如Math对象），这个功能可以通过模块提供
4. 未来浏览器新的api就能用模块化提供，不必再做成全局变量或者navigator对象的属性