function hackFetch(){
  const _oldFetch = window.fetch;
  window.fetch = function(url,options){
    let a = arguments.length === 1 ? [arguments[0]] : Array.prototype.slice(arguments);
    let began = new Date().getDate();
    return _oldFetch.apply(window,a).then((response) => {
      if(response.ok){
        console.log('>>>>>> hanckFetch: response.ok is true',)
      } else {
        console.log('>>>>>> hanckFetch: response.ok is false',)
      }
    }).catch((err) => {
      console.log('>>>>>> hanckFetch: err',err)
    })
  }
}
export default hackFetch