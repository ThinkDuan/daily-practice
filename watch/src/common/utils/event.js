class Event {
  constructor(){
    this.list = {}
  }
  on(key,fn){
    if(!this.list[key]){
      this.list[key] = []
    }
    this.list[key].push({
      fun: fn,
      type: 'on'
    })
  }
  emit(key,...data){
    if(this.list[key]){
      this.list[key].forEach(element => {
        if(element.type === 'on'){
          element.fun.apply(this,data)
        } else if(element.type === 'once'){
          element.fun.apply(this,data)
          this.remove(key,element.fun)
        }
      });
    }
  }
  remove(key,fn){
    if(!this.list[key] || this.list[key].length === 0) return
    for(let i = 0;i<this.list[key].length;i++){
      if(this.list[key][i].fun.toString() === fn.toString()){
        this.list[key].splice(i,1)
      }
    }
  }
  once(key,fn){
    if(!this.list[key]){
      this.list[key] = []
    }
    this.list[key].push({
      fun: fn,
      type: 'once'
    })
  }
}
let eventInstacnce = new Event()
export default eventInstacnce