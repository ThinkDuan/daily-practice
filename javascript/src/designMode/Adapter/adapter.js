// 适配器模式很好理解，在日常开发中其实不经意间就用到了。适配器模式（Adapter）是将一个类（对象）的接口（方法或属性）转化成适应当前场景的另一个接口（方法或属性），
// 适配器模式使得原本由于接口不兼容而不能一起工作的那些类（对象）可以一些工作。所以，适配器模式必须包含目标（Target）、源（Adaptee）和适配器（Adapter）三个角色。
// class Adaptee {} -> class Adapter {} -> class Target {}
class Target {
  constructor(){}
}
class Adapter {
  constructor(){}
}