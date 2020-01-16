function foo(){
  console.log('I am outside')
}
(function(){
  if(false){
   function foo(){
      console.log('I am inside')
    }
  }
  console.log(foo)
  foo()
})()