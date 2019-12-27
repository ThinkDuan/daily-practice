class Circle {
  draw(){
    console.log('draw a circle')
  }
}
class Decorator {
  constructor(circle){
    if(!circle){
      circle = new Circle()
    }
    this.circle = circle
  }
  draw(){
    this.circle.draw()
    this.setRedBorder()
    console.log('more draw')
  }
  setRedBorder() {
    console.log('画一个红色边框');
  }
}
let draw = new Decorator()
draw.draw()