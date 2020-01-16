function getPerson(name = 'zhangsan',age = 12){
  console.log(name,age)
}
// 结合对象的解构
function getName({name,sex = 'man'}){
  console.log(name,sex)
}
// 使用了函数参数的默认值以及对象的解构
function getNameO({name,age=12} = {}){
  console.log(name,age)
}
getPerson()
getName({})
getNameO()
console.log(global)

