let login = async (ctx,next) => {
  const model = ctx.model;
  const userModel = ctx.model.user;
  let user = model.define('user',userModel);
  console.log('>>>>>> login.js: model',ctx.model)
  let name = ctx.request.body.name || '';
  let password = ctx.request.body.password || '';
  console.log(`>>>>>> login.js : login name: ${name} password: ${password} `);
  console.log('>>>>>> login.js: begin create user type of user.create',typeof user.create)
  // let createUser = await user.create({
  //   name: 'admin',
  //   password: '123456'
  // })
  // console.log('>>>>>> login.js: end createuser',JSON.stringify(createUser))
  let getUser = await user.findAll({
    where: {
      name: name,
      password: password
    }
  })
  console.log(`>>>>>> login.js: getname: ${getUser.name},password:${getUser.password},${JSON.stringify(getUser)} `)
  if(getUser && getUser.length > 0 && getUser[0].name === name && getUser[1].password === password){
    // ctx.response.body = `<h1>Hello ${name}</h1>`
    ctx.render('loginSuccess.html',{
      title: 'Login success',
      name: name
    })
    next()
  }else{
    // ctx.response.body = `login failed `
    ctx.render('error.html',{
      title: 'Error'
    })
    next()
  }
}
module.exports = {
  'POST /login': login
}