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