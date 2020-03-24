'use strict'
let http = require('http')
let fs = require('fs')
let path = require('path')
let url = require('url')
let root = path.resolve(process.argv[2] || '.')
console.log('root->',root)
let app = http.createServer(function(request,response){
  let pathname = url.parse(request.url).pathname
  let filePath = path.join(root,pathname)
  console.log('filePath->',filePath)
  fs.stat(filePath,function(err,stat){
    if(!err && stat.isFile()){
      response.writeHead(200)
      fs.createReadStream(filePath).pipe(response)
    } else {
      console.log('404',request.url)
      response.writeHead(404)
      response.end('Not Founed')
    }
  })
})
app.listen(3000)
console.log('app is running at http://localhost:3000')