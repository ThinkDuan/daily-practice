<!--
 * @Author: duanxinxin
 * @Date: 2020-02-17 19:10:11
 * @LastEditTime: 2020-04-10 17:49:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/css/index.md
 -->
 // TODO: js控制浏览器选择内核
## 移动端单位的选择 （px,em,rem,vw，vh）
px 绝对字体大小
em 基于父元素字体的大小
rem 基于根节点（html）字体的大小
vm 视窗比例的
## 物理像素和逻辑像素的关系
### 物理像素(dp) device pixel 
物理像素指的是设备像素，这在设备出厂的时候便是设置好的
### 逻辑像素(dip) device independent pixels
逻辑像素指的是CSS像素，viewport中的一个小方格，CSS样式代码中使用的便是逻辑像素.
当用户进行缩小或者是放大操作时，CSS像素，就逻辑像素是没有变化的，变化的是当前设备的缩放比。缩小时一个设备像素覆盖了多个逻辑像素，放大时一个css像素覆盖了多个物理像素
### 像素比(dpr) device pixel ratio
（某一方向上）物理像素和逻辑像素之间的比例，所以dpr=2 表示一个css像素代表4个物理像素。物理像素 / 逻辑像素 = 像素比； 可通过 window.devicePixelRatio 来获取。或者使用css中的 device-pixel-ratio 来获取

常见设备像素比
- 普通密度桌面显示屏: devicePixelRatio = 1
- 高密度桌面显示屏（Mac Retina）: devicePixelRatio = 2
- 主流手机显示屏： devicePixelRatio = 2 or 3
  
对于100px * 100px 的一张图片来看，在普通电脑上是正常的，但是在手机或者retina屏中打开，按照逻辑分辨率来说使用了4个像素来描绘一个电子像素，相当于拿两倍的放大镜去看，所以这时候图片就会变模糊，这时就需要使用@2x或者@3x的图片来避免图片的是真

### 屏幕像素密度（ppi）pixel per inch
通常以每英寸有多少像素计算,计算方式，对角线的像素处于对角线的英寸数，当像素超过300ppi时人眼就不能区别出每个像素，所以iphone的这个也被叫做retina屏，视网膜屏


### viewport 
viewport是指浏览器的窗口，即浏览器上用来显示网页的那部分区域，是用户网页的可视区域，
viewport的功能在于控制网站的最高块状（block）容器： html元素
可以理解viewport是容纳<html>元素的元素。html元素的宽度就是浏览器的宽度，也就是viewport宽度的100%，视口也被成为初始包含块
- viewport 标签只对移动端浏览器有效。 判断是否是移动端浏览器可通过 window.navigator.userAgent 判断是否有 mobile
- 当缩放比例为100%时，dip宽度 = css像素宽度 = 理想视口的宽度 = 布局视口的宽度
- 单独设置initial-scale或者width都会有兼容性问题，所以设置布局视口为理想窗口的最佳方法是同时这两个属性
- 即使设置了user-scalable=no，在android chrome浏览器中也可以强制启用手动缩放

### 移动端和PC端视口的区别
PC端的视口是浏览器窗口区域
移动端有算哪个不同的视口概念： 布局视口（Layout Viewport），视觉视口（visual viewport），理想视口

### 布局视口 （Layout Viewport）
一般移动设备的浏览器都设置一个viewport元标签，定义一个虚拟的布局视口（layout viewport）用来解决早期的页面在手机上显示的问题。ios和android基本上把这个视口分辨率设置为980px，所以未做移动端处理的PC页面可以在移动端浏览器中显示，只不过元素很小。同时一般默认设置用户可以通过手动缩放网页
布局视口的宽和高可以通过 document.documentElement.clientWidth/clientHeight 来获取

### 视觉视口 (Visiual Viewport)
视觉视口是当前用户看到的区域，用户可以通过缩放操作视觉时候，同时不影响布局视口
视觉视口和缩放比例的关系：  当前缩放值 = 理想视口宽度 / 视觉视口宽度
所以当用户放大时，视觉视口将会变小，css像素将跨越更多的物理像素
可以通过window.innerWidth/innerHeight 来获取

### 理想视口
布局视口的宽度并不是一个理想的宽度，所以apple和其他浏览器厂商引入了理想视口的概念。它对设备而言是最理想的布局视口尺寸。显示在理想视口中的网站具有最理想的宽度，用户无需进行缩放。

理想视口的值其实就是屏幕分辨率的值，对应的像素叫做设备逻辑像素（device independent pixel）。dip和设备的物理像素无关，一个dip在任意像素密度的设备屏幕上都占用相同的空间。如果用户没有进行缩放，那么一个css像素就等一一个dip。

使用元标签来控制布局视口，使布局视口和理想视口的宽度一致
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
所以设置的是布局视口,布局视口不会受到缩放的影响，缩放不会导致页面回流，这对于移动端宝贵的性能来说很重要


### head 标签里面如果有div标签的话在浏览器中会被移动到body体内