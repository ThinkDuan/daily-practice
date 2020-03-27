const Koa = require('koa');
const path = require('path');
const controllers = require('./middleware/getControllers');
const staticFile = require('./middleware/static');
const template = require('./middleware/template')
const bodyparser = require('koa-bodyparser');
const model = require('./orm/model')
model.sync()


const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa()
app.use(async (ctx,next) => {
  console.log('>>>>>> app.js: start......')
  ctx.model = model;
  let url = ctx.request.url;
  console.log('>>>>>> app.js: url',url)
  if(url === '/login'){
    ctx.cookies.set('session_token','123456',{
      httpOnly: true
    });
    ctx.cookies.set('access_token','1234568910',{
      httpOnly: true
    })
  } else {
    ctx.cookies.set('session_token','000000',{
      httpOnly: true
    })
  }
  await next()
})
app.use(async (ctx,next) => {
  let startTime = new Date().getTime()
  console.log('>>>>>> app.js: startTime',startTime)
  await next()
  let endTime = new Date().getTime()
  console.log('>>>>>> app.js: endTime',endTime)
  console.log('>>>>>> app.js: total Time=',endTime - startTime)
})
if(!isProduction){
  app.use(staticFile('/static/',path.resolve(__dirname,'./static')))
}
app.use(bodyparser())
app.use(template('views',{
  noCache: !isProduction,
  watch: !isProduction
}));
app.use(controllers())

module.exports = app
