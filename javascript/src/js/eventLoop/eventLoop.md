# eventloop
Javascript 单线程的来源，取决于javascript的用途，主要和用户互动，以及操作Dom。多线程会带来很复杂的同步问题。
为了利用多核cpu的计算能力，HTML5提出了web worker，允许Javascript创建多个线程，但是子线程完全受主线程控制，且不得操作dom

## 浏览器常驻的线程
1. JS引擎：负责执行函数执行栈的最顶端代码
2. GUI线程：负责渲染页面
3. 事件监听线程：负责监听各种事件
4. 计时器线程：负责计时
5. 网络线程：负责网络通信

## 事件队列
### 任务分类
在Javascript中函数分为两类，同步执行和异步执行。
异步执行的函数，例如：发送网络请求，计时器等。会委托浏览器中的其他线程处理，当这些函数处理完成之后，回调函数会被放到事件队列中。
当JS引擎发现执行栈中已经没有可执行内容后，会将事件队列中的第一个函数加入到执行栈中执行。

## Javascript运行时
再执行Javascript代码时，Javascript运行时实际上维护了一组用于执行Javascript代码的代理。每个代理由一组执行上下文的集合，执行上下文栈，主线程，一组可能被创建用于执行worker的额外的线程集合，一个任务队列、一个微任务队列组成。除主线程之外，其他组成部分对于该代理都是唯一的
## 宏任务和微任务
异步任务分为宏任务和微任务，相应的，事件队列也分为宏队列和微任务队列。
微任务的优先级比宏任务的优先级要高，当两个队列都非空时，微队列的任务会被优先执行。
宏任务：script，计时器的回调函数（setTimeout(),setInterval()）,ajax事件，注册的事件，setImmediate()（浏览器未支持）会排在队列的最前面,requestAnimationFrame
微任务：promise.then() catch() finaly(), nextTick（例如vue，node等）,MutationObserver

node 环境中的 process.nextTick()事件最处于微任务的最前面

#### requestAnimationFrame() 事件
requestAnimationFrame(callback) callback事件不能简单的归并为微任务或者宏任务，它发生在浏览器下次重绘之前，在当前一次事件循环之中，处于微任务之后，宏任务之前，如果当前事件循环运行在后台标签页或者隐藏的<iframe> 里时requestAnimationFrame()会被暂停调用，