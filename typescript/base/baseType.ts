// 基础类型
// 布尔值
let isDone: boolean = true;
//数字:除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
let countTen: number = 12;
let countSixT: number = 0x12;
let countTwo: number = 0b1010;
let countEight: number = 0o744;

// 字符串,你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。
// 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
let names: string = "Tom";
let ages: number = 22;
let sentence: string = `Hello ${names},your's age is ${ages}`;

// 数组:只能定义相同类型的数组
let listOne: number[] = [1,2,3];
let listTwo: Array<number> = [1,2,3];

// 元组:元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let tupleOne: [string,number];
tupleOne = ['Hello',123];
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(tupleOne[0].toString());
//错误实例number上不存在substr()方法 console.log(tupleOne[1].substr(1);
// 当访问一个越界的元素，会使用联合类型替代
tupleOne[3] = 'World'; //字符串可以赋值给(string | number)类型

// 枚举使用枚举类型可以为一组数值赋予友好的名字,默认情况下，从0开始为元素编号
// 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号,或者全部都采用手动赋值：
enum ColorOne {Green,Blue,Red};
enum ColorTwo {Red = 1,Blue = 2,Green = 4};
let colorOne: ColorOne = ColorOne.Green;
let colorTwo: string = ColorTwo[2];

// Any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
// 那么我们可以使用 any类型来标记这些变量
// 它允许你在编译时可选择地包含或移除类型检查
// Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// 你有一个数组，它包含了不同的类型的数据
let listThree: any[] = [123,"string",true];

// void 表示没有类型,函数没有返回值的时候可以使用
// 声明一个void对象没有太大的作用,只能复制为undefined和null
// Null 和 Undefined两者有各自的类型, 分别是undefined和null,
// 默认情况下null和undefined是所有类型的子类型,
// 但是如果你指定了 --strictNullChecks 标记,null和undefined只能赋值给void和他们本身
function voidDemo(): void{
  console.log('void 没有返回值');
}

// never
// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
//never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// null 和 undefined 也有自己的类型分别是 null 和undefined 本身作用不是很大，但是默认情况下null和undefined是所有类型的子类型，也就是说可以将null和undefined赋值给其他任何类型的变量
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法：

let someValueOne: any = "this is a string";

let strLengthOne: number = (<string>someValueOne).length;
// 另一个为as语法：

let someValueTwo: any = "this is a string";

let strLengthTwo: number = (someValueTwo as string).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在Type/Script里使用JSX时，只有 as语法断言是被允许的。

// 