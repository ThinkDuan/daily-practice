import event from '../utils/event'
function hackState(){
  let type = ['pushState','replaceState'];
  for(let i of type){
    (function(i,action){
      window.history[i] = function(){
        let args = Array.prototype.slice.apply(arguments);
        event.emit('historyStateChange',args)
        action.apply(this,args)
      }
    })(i,window.history[i])
  }
}
export default hackState