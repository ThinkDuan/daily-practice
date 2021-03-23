// 异步实现,只能配合async 函数实现
function sleep (ms) {
  return new Promise((res) => {
    setTimeout(res, ms)
  })
}
// 同步阻塞实现
function sleepSync (ms) {
  const now = new Date().getTime();
  while (new Date().getTime() - now < ms) {

  }
}

async function fun (ms) {
  await sleep(ms);
  console.log(`after${ms}`)
}
function funSync (ms) {
  sleepSync(ms)
  console.log('funSync')
}
function foo (title) {
  console.log(title)
}
fun(1000)
foo('fun foo')
funSync(1000)
foo('funSync foo')
