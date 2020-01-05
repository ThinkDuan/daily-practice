window.onload = function(){
  function post(){
    let ifr = document.createElement('iframe')
    document.body.appendChild(ifr)
    ifr.style.display = 'none';
    ifr.name = 'iframe'
    ifr.src = 'http://localhost:3000/index.html'
    window.postMessage('hello i am index','http://localhost:3000')
  }
  post()
  window.addEventListener('message',function(e){
    console.log('index consoel',e)
  })
}