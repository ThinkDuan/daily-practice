import unique from './src/lodash/unique'
let arr = [1,1,2,'2',NaN,NaN,'NaN',0,-0,{'name': 'zhang'},{'name': 'zhang'},{},{}]
// let arr = [1,{'name': 'zhang'},{'name': 'zhang'},{},{}]
console.log(unique(arr))
let text = unique(arr)
let div = document.createElement('div')
div.innerText = text
document.body.appendChild(div)