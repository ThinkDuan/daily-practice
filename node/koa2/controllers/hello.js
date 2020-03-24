let hello = async(ctx) =>{
  let name = ctx.params.name;
  ctx.response.body = `Hello ${name}`
}
module.exports = {
  'GET /hello/:name': hello
}