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

