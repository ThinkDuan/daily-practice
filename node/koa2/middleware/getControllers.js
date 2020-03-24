const fs = require('fs')
const path = require('path')

function addMapping(router,mapping){
  for(let i in mapping){
    if(i.startsWith('GET ')){
      let path = i.substring(4)
      router.get(path,mapping[i])
    } else if(i.startsWith('POST ')){
      let path = i.substring(5)
      router.post(path,mapping[i])
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}
function addController(router,dir){
  let files = fs.readdirSync(path.resolve(__dirname,'../'+ dir))
  let jsFile = files.filter((f) => {
    return f.endsWith('.js')
  })
  for(let i of jsFile){
    let mapping = require(path.resolve(__dirname , '../'+dir+'/' + i))
    addMapping(router,mapping)
  }
}

module.exports = function(dir){
  let controllersDir = dir || 'controllers',
      router = require('koa-router')();
  addController(router,controllersDir);
  return router.routes();
}