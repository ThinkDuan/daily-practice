/**
 * Array基本定义，以及常用操作方法
 */
{
  console.log("========数组定义=======");
  let arr1 = new Array();
  arr1 = [123,222,'123'];
  let arr2 = new Array(3);
  let arr3 = new Array('123',123,true);
  let arr4 = ['man','is',123];
  console.log('arr1=',arr1);
  console.log('arr2=',arr2);
  console.log('arr3=',arr3);
  console.log('arr4=',arr4);
  console.log('=======数组方法=======');
  /**
   * 数组连接concat(),用于连接两个或者多个数组,不会改变现有数组,只会返回当前数组的一个副本,返回一个数组;
   * 语法:
   * arrayObject.concat(arrayX,arrayX,......arrayX);
   * 参数: 
   * arrayX 必须,可以使数组也可以是具体的值
   * 返回值:
   * 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
   */
  var arrA = ['Hell0','World',123,'we','go'];
  var arrB = ['2018'];
  var arrC = arrA.concat(arrB);
  console.log('arrA=',arrA);
  console.log('arrB=',arrB);
  console.log('arrC=',arrC);
  console.log('=======模拟实现concat()======');
  var concatArray = function(){
    var oldArray = concatArray.caller();
    console.log(oldArray);
  };
  Array.prototype.concatArray = function(){
    // debugger;
    let arr = this.slice(0);
    if(arguments.length){
      arguments.forEach((value) => {
        if(Array.isArray(value)){
          value.forEach((v) => {
            arr.push(v);
          })
        } else{
          arr.push(value);
        }
      });
    }
  };
  arrA.concatArray();

/**
 * slice()方法从已有的数组中返回选定的元素
 * 语法:
 * array.slice(start,end);
 * 参数:
 * start: 必须,规定从数组的哪一个位置开始选取,如果是负数则代表从尾部开始算起,-1代表最后一个元素
 * -2代表倒数第二个元素,以此类推.
 * end: 可选参数,可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，
 * 那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
 * 返回值:
 * 这个方法返回一个新的数组,包含start到end(不包含end处的元素)的数组
 * 注意:
 * 无论start是正负值,都是从前往后截取;
 */
var arrALength = arrA.length;
console.log(arrA.slice(0));
/**
 * 模拟实现
 */
Array.prototype.sliceArray = function(){
  var arr = this
}
}