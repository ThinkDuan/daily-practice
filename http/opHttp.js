// 请求合并
import http from './http'
let promiseList = {}
setTimeout(function () {
  promiseList = {}
}, 10000)
function checkPromise (data) {
  const key = setKey(data)
  if (promiseList[key]) {
    return promiseList[key]
  } else {
    return false
  }
}
function setKey (data) {
  let parmas = null
  let url = null
  const copyData = JSON.parse(JSON.stringify(data))
  if (copyData.params) {
    parmas = JSON.parse(JSON.stringify(copyData.params))
  }
  url = copyData.url
  return url + JSON.stringify(parmas)
}
function get (data) {
  const isCache = checkPromise(data)
  if (isCache) {
    return isCache
  }
  const promise = http(data)
  const key = setKey(data)
  promiseList[key] = promise
  return promise
}
export default get
