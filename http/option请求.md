## 为什么会出现option请求
跨域请求中，option请求是浏览器自发起的preflight request（预检请求），以检测实际请求是否可以被服务器接收
在正式跨域的请求前，浏览器会根据需要，发起一个“PreFlight”（也就是Option请求），用来让服务端返回允许的方法（如get、post），被跨域访问的Origin（来源，或者域），还有是否需要Credentials(认证信息）
简而言之，OPTIONS请求方法的主要用途有两个：

1、获取服务器支持的HTTP请求方法；

2、用来检查服务器的性能。