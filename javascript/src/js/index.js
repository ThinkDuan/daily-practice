let a = {
  i: 0,
  valueOf: function(){
    return ++a.i
  }
}
if(a == 1 && a == 2 && a ==3){
  console.log('Hello')
}