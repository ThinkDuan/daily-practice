"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类型注解,来定义接收参数的类型,若参数类型出错会报错,但是依然会生成js(正确执行)
function fn(person) {
    return "Hello" + person;
}
var user = "Tom";
fn(user);
function fm(person) {
    return "Hello" + person.firstName + "" + person.lastName;
}
var lisi = {
    firstName: "Tom",
    lastName: 'One'
};
fm(lisi);
/**类
最后，让我们使用类来改写这个例子。TypeScript支持JavaScript的新特性，比如支持基于类的面向对象编程。
让我们创建一个Student类，它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，
程序员可以自行决定抽象的级别。
还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。 */
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var zhangTongXue = new Student("Tom", "M", "Two");
fm(zhangTongXue);
var Lady = /** @class */ (function () {
    function Lady(name, age) {
        this.name = name;
        this.age = age;
    }
    return Lady;
}());
var Xiao = /** @class */ (function (_super) {
    __extends(Xiao, _super);
    function Xiao(name, age, like, _anyLove) {
        var _this = _super.call(this, name, age) || this;
        _this.like = like;
        _this._anyLove = _anyLove;
        _this._want = "money";
        return _this;
    }
    Xiao.sayInnerWant = function () {
        console.log("I want " + this.innerWant);
    };
    Object.defineProperty(Xiao.prototype, "anyLove", {
        get: function () {
            return this._anyLove;
        },
        set: function (love) {
            this._anyLove = love;
        },
        enumerable: false,
        configurable: true
    });
    Xiao.innerWant = "more money";
    return Xiao;
}(Lady));
var one = new Xiao('zhangsan', 22, 'any', 'love');
console.log(one.anyLove);
Xiao.sayInnerWant();
//# sourceMappingURL=one.js.map