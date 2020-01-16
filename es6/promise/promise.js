function getMessage(type){
  let self = getGloabl();
  let promise;
  if(self.Promise){
    promise = new self.Promise(function(res,rej){
      setTimeout(() => {
        console.log('setTimeout after 1000ms')
        if(type){
          res('done')
        } else {
          rej('error')
        }
      }, 1000);
    })
  }
  return promise
  
}
function getMessageThen(){
  getMessage(true).then((data) => {
    console.log(data)
    return function(){setTimeout(() => {
      console.log('- settimeout')
    },400)}
  }).then((data) => {
    console.log(123)
    data()
  }).catch((data) => {
    console.log(data)
  })
}

function getGloabl(){
  if(typeof window !== 'undefined'){
    return window
  }
  if(typeof self !== 'undefined'){
    return self
  }
  if(typeof global !== 'undefined'){
    return global
  }
}

getMessageThen()