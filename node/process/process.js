process.on('beforeExit', (code) => {
  console.log('beforeExit code:', code)
})
process.on('exit', (code) => {
  console.log('exit code:', code)
})
console.log(process.argv)
console.log(process.argv0)
console.log('此消息显示最早')
console.log(process.cpuUsage())
console.log(process.cwd())
console.log(process.debugPort)
console.log(process.env)