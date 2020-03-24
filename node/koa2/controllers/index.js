const model = require('../orm/model');
console.log('>>>>>> index.js: model',model)
// let pet = model.pet;
model.sync();
let index = async (ctx) => {
  ctx.response.body = `<h1>Index</h1>
  <form action="/login" method="post">
      <p>Name: <input name="name" value="admin"></p>
      <p>Password: <input name="password" type="password"></p>
      <p><input type="submit" value="Submit"></p>
  </form>`;
  // ctx.render('index.html',{
  //   title: 'Welcome'
  // })
}
module.exports = {
  'GET /': index
}