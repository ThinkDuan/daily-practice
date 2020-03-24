let login = async (ctx,next) => {
  let name = ctx.request.body.name || '';
  let password = ctx.request.body.password || ''
  console.log(`login ${name} password ${password}`)
  if(name === 'admin' && password === "123456"){
    // ctx.response.body = `<h1>Hello ${name}</h1>`
    ctx.render('loginSuccess.html',{
      title: 'Login success',
      name: 'Tom'
    })
  }else{
    // ctx.response.body = `login failed `
    ctx.render('error.html',{
      title: 'Error'
    })
  }
}
module.exports = {
  'POST /login': login
}