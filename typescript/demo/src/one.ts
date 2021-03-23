// 类型注解,来定义接收参数的类型,若参数类型出错会报错,但是依然会生成js(正确执行)
function fn(person: string){
  return "Hello" + person;
}
let user = "Tom";
fn(user);
// 接口:这里我们使用接口来描述一个拥有firstName和lastName字段的对象。 
// 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的
// 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements语句。
interface Person {
  firstName: string;
  lastName: string;
}
function fm(person: Person){
  return "Hello" + person.firstName + "" + person.lastName;
}
let lisi = {
  firstName: "Tom",
  lastName: 'One'
}
fm(lisi);
/**类
最后，让我们使用类来改写这个例子。TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。
让我们创建一个Student类，它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，
程序员可以自行决定抽象的级别。
还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。 */
class Student {
  fullName: string;
  constructor(public firstName:string,public middleInitial:string,public lastName:string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
let zhangTongXue = new Student("Tom","M","Two");
fm(zhangTongXue);


class Lady {
  constructor (public name:string, public age:number) {}
}
class Xiao extends Lady {
  static innerWant: string = "more money";
  static sayInnerWant ():void {
    console.log(`I want ${this.innerWant}`)
  }
  readonly _want:string = "money";
  constructor (name: string, age: number, public like: string, private _anyLove:string) {
    super(name, age)
  }
  get anyLove (): string {
    return this._anyLove;
  }
  set anyLove (love:string) {
    this._anyLove = love
  }
}
const one = new Xiao('zhangsan', 22, 'any', 'love')
console.log(one.anyLove)
Xiao.sayInnerWant()