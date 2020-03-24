const Koa = require('koa');
const controllers = require('./middleware/getControllers');
const bodyparser = require('koa-bodyparser');

const Sequelize = require('sequelize');
const sqlConfig = require('./config/sqlConfigDev');

const app = new Koa()
app.use(async (ctx,next) => {
  console.log(ctx.request.url)
  await next()
})
app.use(async (ctx,next) => {
  let startTime = new Date().getTime()
  console.log('startTime',startTime)
  await next()
  let endTime = new Date().getTime()
  console.log('endTime',endTime)
  console.log('total Time=',endTime - startTime)
})

app.use(bodyparser())
app.use(controllers())
app.listen(3001)
console.log('app is runnuing at 3001')