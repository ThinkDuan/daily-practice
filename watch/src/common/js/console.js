function hackConsole(){
  let type = ['debug','error','log','info','warn']
  for(let i of type){
    (function(i,action){
      window.console[i] = function(){
        let arg = Array.prototype.slice.apply(arguments)
        getConsole(arg)
        action.apply(null,arg)
      }
    })(i,window.console[i])
  }
  function getConsole(arg){
    let data = []
    data.push(arg)
    return data
  }
}
export default hackConsole