class ReadImg {
  constructor(fileName){
    this.fileName = fileName
    this.loading()
  }
  display(){
    console.log('display......',this.fileName)
  }
  loading(){
    console.log('loading......',this.fileName)
  }
}
class ProxyReadImg {
  constructor(fileName){
    this.readImg = new ReadImg(fileName)
  }
  display(){
    this.readImg.display()
  }
}
let loadImg = new ProxyReadImg('tom')
loadImg.display()

let star = {
  name: 'Tom',
  age: 12,
  sex: 'male',
  add: {
    pro: '1',
    city: '2'
  }
}
let agent = new Proxy(star,{
  get(target,key){
    if(key === 'name'){
      return 'Tom Father'
    }
    return target[key]
  },
  set(target,key,val){
    if(key === 'sex'){
      if(val !== 'male'){
        throw new Error('不能改变性别')
      }else{
        target[key] = val
        return true
      }
    }
  }
})
console.log(agent.name)
agent.name = 'Jerry'
agent.sex = 'female'
