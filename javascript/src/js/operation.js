let obj = {
  valueOf: function(){
    console.log('valueof')
    return this.obj
  },
  toString: function(){
    console.log('toString')
    return ['object Object']
  }
}
console.log('-',1 + obj)
console.log('=','1' + obj)
console.log(1 + [2])
console.log(Number([2]))