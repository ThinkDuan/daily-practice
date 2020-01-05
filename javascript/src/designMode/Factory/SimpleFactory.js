class Product {
  constructor(name){
    this.name = name
  }
  init(){
    console.log(`This product name is ${this.name}`)
  }
}
class Factory {
  create(name){
    return new Product(name)
  }
}
let factory = new Factory()
let tom = factory.create('Tom')
tom.init()

class User {
  constructor(opt){
    this.name = opt.name
    this.age = opt.age
  }
  static getInstance(role){
    switch(role){
      case 'admin':
        return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] })
        break
      case 'superAdmin':
        return new User({ name: '管理员', viewPage: ['首页', '通讯录'] })
        break
      default:
        throw new Error('Fail role') 
        break
    }
  }
}
let superAdmin = User.getInstance('superAdmin')
let admin = User.getInstance('admin')
// 常用jQuery的$实现以及Vue的Vue.component实现的等，都是使用工厂模式
// class jQuery {
//   constructor(selector){
//     super(selector)
//   }
// }
// window.$ = function(selector){
//   return new jQuery(selector)
// }

// Vue.component('async-component',(resolve,reject) => {
//   setTimeout(() => {
//     resolve({
//       template: `<div>Hello World！</div>`
//     })
//   },1000)
// })
class Users {
  constructor(name = '',viewPage = []){
    this.name = name
    this.viewPage = viewPage
  }
}
class UsersFactory extends Users {
  constructor(name,viewPage){
    super(name,viewPage)
  }
  create(role){
    switch(role){
      case 'admin':
        return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] })
        break
      case 'superAdmin':
        return new User({ name: '管理员', viewPage: ['首页', '通讯录'] })
        break
      default:
        throw new Error('Fail role') 
        break
    }
  }
}
let usersFactory = new UsersFactory()
let superAdminFactory = usersFactory.create('superAdmin')
let adminFactory = usersFactory.create('admin')
test()
function test(){
  console.log('test function')
}