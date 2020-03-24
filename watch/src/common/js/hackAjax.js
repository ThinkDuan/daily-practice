function hackAjax(){
  if(typeof window.XMLHttpRequest === 'function'){
    let oldXmlHttpRequest = window.XMLHttpRequest;
    window.oldXmlHttpRequest = oldXmlHttpRequest
    window.XMLHttpRequest = function(data){
      let xhr = new oldXmlHttpRequest(data);
      let page = '',url = '',begin = 0;
      let open = xhr.open;
      let send = xhr.send;
      xhr.open = function(method, url, async, user, password){
        url = url;
        page = url
        open.call(this,method, url, async, user, password)
      }
      xhr.send = function(data){
        begin = new Date().getTime();
        send.call(this,data)
      }
      xhr.onreadystatechange = function(){
        if(page && xhr.readyState === 4){
          let time = new Date().getTime() - begin;
          let status = xhr.status || 200
          if(xhr.status >= 200 && xhr.status <= 299){
            if ("function" == typeof xhr.getResponseHeader) {
              var r = xhr.getResponseHeader("Content-Type");
              if (r && !/(text)|(json)/.test(r)) return;
              console.log('====== ajax success ======',page,status,time);
            }
          } else {
            console.log('====== ajax fail ======',page,status,time);
          }
        }
      }
      return xhr;
    }
  }
}
export default hackAjax