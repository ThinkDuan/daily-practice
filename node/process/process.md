## node process
process对象是一个全局变量，提供了有关当前Node.js进程的信息并对其进行控制。作为全局变量，它始终可供Node.js应用程序使用，无需使用require()。它也可以使用require()显示地访问。
```
const process = require('process')
```

## 进程事件
process对象是EventEmitter的实例
1. beforeExit()。当 Node.js 清空其事件循环并且没有其他工作要安排时，会触发 'beforeExit' 事件。 通常，Node.js 进程将在没有调度工作时退出，但是在 'beforeExit' 事件上注册的监听器可以进行异步调用，从而导致 Node.js 进程继续。

调用监听器回调函数时会将 process.exitCode 的值作为唯一参数传入。

对于导致显式终止的条件，不会触发 'beforeExit' 事件，例如调用 process.exit() 或未捕获的异常。

除非打算安排额外的工作，否则不应将 'beforeExit' 用作 'exit' 事件的替代方案。
```
process.on('beforeExit', (code) => {
  console.log('进程 beforeExit 事件的代码:', code)
})

process.on('exit', (code) => {
  console.log('进程 exit 事件的代码:', code)
})

console.log('此消息最新显示')

// 打印
// 此消息最新显示
// 进程 beforeExit 事件的代码: 0
// 进程 exit 事件的代码: 0
```
## process属性
1. process.argv
   process.argv属性会返回一个数组，其中包含Node.js进程被启动是传入的命令行参数。第一个元素是process.execPath。如果需要访问 argv[0] 的原始值，则参见 process.argv0。第二个元素是正被执行的 JavaScript 文件的路径。 其余的元素是任何额外的命令行参数。
   ```
   // 打印 process.argv。
    process.argv.forEach((val, index) => {
      console.log(`${index}: ${val}`);
    });
    启动 Node.js 进程：node process-args.js 参数1 参数2 参数3
    输出如下：
    0: /usr/local/bin/node
    1: /Users/mjr/work/node/process-args.js
    2: 参数1
    3: 参数2
    4: 参数3
   ```
2. process.env 属性会返回包含用户环境的对象,可以修改此对象，但这些修改不会反映到 Node.js 进程之外，或者（除非明确地要求）反映到其他 Worker 线程
## process方法
1. process.cwd(): 返回Node.js进程大当前工作目录
2. process.exit(): 以退出状态 code 指示 Node.js 同步地终止进程。 如果省略 code，则使用成功代码 0 或 process.exitCode 的值（如果已设置）退出。 在调用所有的 'exit' 事件监听器之前，Node.js 不会终止。执行 Node.js 的 shell 应该得到的退出码为 1。调用 process.exit() 将强制进程尽快退出，即使还有尚未完全完成的异步操作，包括对 process.stdout 和 process.stderr 的 I/O 操作。在大多数情况下，实际上不必显式地调用 process.exit()。 如果事件循环中没有待处理的额外工作，则 Node.js 进程将自行退出。 process.exitCode 属性可以设置为告诉进程当进程正常退出时使用哪个退出码。
### 退出码
退出码
正常情况下，如果没有异步操作正在等待，那么 Node.js 会以状态码 0 退出，其他情况下，会用如下的状态码:

1 未捕获异常 - 有一个未被捕获的异常, 并且没被 domain 或 'uncaughtException' 事件处理器处理。
2 - 未被使用 (Bash 为防内部滥用而保留)
3 内部的 JavaScript 解析错误 - Node.js 内部的 JavaScript 源代码在引导进程中导致了一个语法解析错误。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
4 内部的 JavaScript 执行失败 - 引导进程执行 Node.js 内部的 JavaScript 源代码时，返回函数值失败。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
5 致命错误 - 在 V8 中有一个致命的错误。 比较典型的是以 FATALERROR 为前缀从 stderr 打印出来的消息。
6 非函数的内部异常处理 - 发生了一个内部异常，但是内部异常处理函数被设置成了一个非函数，或者不能被调用。
7 内部异常处理运行时失败 - 有一个不能被捕获的异常，在试图处理这个异常时，处理函数本身抛出了一个错误。 这是可能发生的, 比如, 如果一个 'uncaughtException' 或者 domain.on('error') 处理函数抛出了一个错误。
8 - 未被使用，在之前版本的 Node.js, 退出码 8 有时候表示一个未被捕获的异常。
9 - 不可用参数 - 也许是某个未知选项没有确定，或者没给必需要的选项填值。
10 内部的 JavaScript 运行时失败 - 调用引导函数时，引导进程执行 Node.js 内部的 JavaScript 源代码抛出错误。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
12 不可用的调试参数 - --inspect 和/或 --inspect-brk 选项已设置，但选择的端口号无效或不可用。
13 Unfinished Top-Level Await: await was used outside of a function in the top-level code, but the passed Promise never resolved.
>128 退出信号 - 如果 Node.js 接收到致命信号, 诸如 SIGKILL 或 SIGHUP，那么它的退出代码将是 128 加上信号的码值。 这是 POSIX 的标准做法，因为退出码被定义为 7 位整数，并且信号退出设置高位，然后包含信号码值。 例如，信号 SIGABRT 的值为 6，因此预期的退出代码将为 128 + 6 或 134。