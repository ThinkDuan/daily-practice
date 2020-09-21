// 当函数变为立即执行的函数表达式时，表达式中的变量不能从外部访问，当将立即执行函数保存到一个变量时，这个变量保存的是
// 是函数的返回值

// 重绘和回流
// 回流指的是：页面的布局，元素的宽高内容发生变化的时候就会发生回流，
// 重绘指的是：当样式发生变化的时候，会发生重绘
// 回流的代价比重绘大得多，虽然浏览器在这一方面做了相关处理，但是在平时的写法的时候我们还是需要注意一些事情
// 比如将多个节点操作合并为一个操作等

// XSS 跨站脚本攻击 主要预防手段，不相信用户的输入，对cookie增加http-only控制
// CSRF 跨站脚本伪造 借用当前登录用户的权限来完成某个操作，主要预防手段：关键业务点增加验证码， 增加
// token

// 跨域：只要协议，域名，端口有任何一个不同都被当做是不同的域
// 对于端口和协议的不同只有后端可以解决，前端可以解决域名不同的问题

// 解决跨域问题的方法： 
// 1. CORS：跨域资源共享，定义了必须在访问跨域资源时，浏览器和服务器应该如何沟通，CORS背后的思想就是
// 使用自定义的http头部让浏览器和服务器进行沟通，从而来决定请求或者响应是失败还是成功，服务器端对于CORS的支持，
// 主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。
// 
// 2. JSONP JSON with padding  是json的一种使用模式可以让网页从别的网域要资料
// JSONP 由两部分组成，回调函数和数据
// 在js中直接使用XMLHttpRequest时是不允许的，但是在页面中引用不同域的js文件是允许的，jsonp正是使用了这种能力
/* <script type="text/javascript">
  // 回调函数和返回的数据
  function callBack(jsonpdata){
    console.log(jsonpdata)
  }
</script>
<script src="http://wwww.baidu.com?callback=callBack"></script> */
// js在加载完成之后会执行我们在url中的指定的函数，并且会把我们需要的json数据作参数传入。所以jsonp是需要服务器页面进行配合的
// 配合主要是为了传入数据
// JSONP的优缺点：
// 优点：不受同源策略限制；兼容性好；
// 缺点：只支持get请求，不支持http的其他请求；她只支持跨域http请求，不能解决不同域两个页面之间如何进行javascript的调用

// CORS和JSONP的优缺点：
// CORS更为先进可以进行多种http请求，可以使用XmlHttpRequest发送请求，现在多数浏览器已经支持CORS

// 跨子域
// documnet.domain
// window.name

// 使用HTML5 的 postMessage(message,targetOrigin) 

// 浏览器缓存：
// 浏览器缓存分为强制缓存，协商缓存，缓存策略都是通过设置http-header实现的
// 浏览器每次发起请求前都会查看浏览器缓存中查找该请求的结果以及缓存标识，
// 浏览器每次拿到返回的结果都会将该结果和标识存入浏览器缓存中

// 强缓存：
// 不会向服务器发送请求，直接从缓存中读取资源。返回标识： 200 size：form disk cache 或者 form memory cache 
// 强缓存通过设置 exprires 和 cache-control max-age=11111 

// http1.0 expires 结合last-modified 使用，存资源到期日期 
// http1.1 现代浏览器主要使用 cache-control：public，private，no-cache，no-store,max-age,s-message,
// publice 表示资源可以被任何一级缓存，代理1-> 代理 -> 浏览器
// private 表示资源只针对个人用户
// max-age 用来设置资源可以被缓存多久，单位为秒
// s-message 针对代理服务器，设置资源可以被缓存多久
// no-cache 强制客户端直接向服务器发送请求，每次请求资源都必须向服务器发送请求。同时带相关资源的标识，
// 如果资源没有更新，则返回304，不返回资源。否则返回新的资源
// no-store 不缓存资源

// 缓存策略 协商缓存
// cache-control设置为no-cache
// Etag 和 if-none-match
// 服务器返回资源的时候返回资源唯一标识符Etag，这个Etag由服务器根据资源生成，具有唯一性，当客户端再次发送资源请求的时候
// http请求header会增加 if-none-match 值为 之前返回的 Etag， 服务器对比If-None-Match是否发生改变，改变的时候服务器
// 设置 If-None-Match 为false，返回状态码304，服务器不返回资源；若资源发生改变则设置 If-None-Match 为true，设置状态码 200
// 服务器返回新的资源

// Last-Modified （资源最后一次修改时间） 和 If-Modefied-Since
// 两者相比： Last-Modified 只能精确到秒级，如果一个文件在一秒内多次修改，则不能准确表示文件的生成时间，
//          如果有些资源文件定期生成但是内容没有改变则会导致客户端不能正确使用资源
//          有可能存在服务器没有准确获取文件修改时间，或者和代理服务器时间不一致


// preloader



// let A = '1';
var A = "1";
var aaaa = 'aaaa';
(function A(window){
  // 'use strict'
  console.log("Before A",A)
  A = 1
  console.log("After A",A)
  console.log('window A',window.A)
})(window);

(function (window){
  'use strict'
  console.log("2 Before A",A)
  console.log('2 window A',window.A)
})(window);
// setTimeout 暂停一秒钟顺序输出的方法
for(var i = 0;i<5;i++){
  setTimeout(function(i){
    console.log(i)
  },i*1000,i)
}

for(var i = 0;i<5;i++){
  fun(i)
}
function fun(i){
  setTimeout(function(){
    console.log(i)
  },i*1000)
}

for(let i = 0;i<5;i++){
  setTimeout(function(){
    console.log(i)
  },i*1000)
}

for(var i = 0;i<5;i++){
  (function(i){
    setTimeout(function(){
      console.log(i)
    },i*1000)
  })(i)
}