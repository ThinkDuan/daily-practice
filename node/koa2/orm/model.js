const fs = require('fs');
const db = require('./db');
const path = require('path')
console.log('>>>>>> model.js:====== start read model file ======')
let files = fs.readdirSync(path.resolve(__dirname,'../models'));
let js_files = files.filter((file) => {
  return file.endsWith('.js')
})

module.exports = {};

for (let f of js_files) {
  console.log(`>>>>>> model.js: import model from file ${f}...`);
  let name = f.substring(0, f.length - 3);
  module.exports[name] = require(path.resolve(__dirname, '../models/' + f));
}

module.exports.sync = () => {
  db.sync();
}
