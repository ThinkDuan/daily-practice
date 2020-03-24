'use strict'
let fs = require('fs')
fs.readFile('../assets/data.json',function(err,data){
  if(err){
    console.log(err)
  } else {
    console.log(data.toString('utf-8'))
  }
})
let dataObj = {sex: 12}
fs.writeFile('../assets/data.json',JSON.stringify(dataObj),function(err){
  if(err){
    throw new Error(err)
  } else {
    console.log('wirte ok')
  }
})

try{
  let data = fs.readFileSync('../assets/data.json')
  console.log(data.toString())
}catch(err){
  throw new Error(err)
}

fs.stat('../assets/data.json',function(err,stat){
  if(err){
    console.log(err)
  } else {
    console.log('is File',stat.isFile())
    if(stat.isFile()){
      console.log('file size ',stat.size)
      console.log('file birth',stat.birthtime)
      console.log('file modefied',stat.mtime,new Date(stat.mtimeMs).toLocaleString())
    }
  }
})


let fsReadStream = fs.createReadStream('../assets/data.json')
let fsWirteStream = fs.createWriteStream('../assets/copyData.json')

fsReadStream.pipe(fsWirteStream)