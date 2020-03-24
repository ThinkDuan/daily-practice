import hackConsole from './src/common/js/console'
import hackHistory from './src/common/js/history'
import hackAjax from './src/common/js/hackAjax'
import handleErrorType from './src/common/js/errorType'
import performance from './src/common/js/performance'
import event from './src/common/utils/event'
hackConsole();
hackHistory();
hackAjax();

window.addEventListener('error',function(e){
  console.groupEnd('======Error======')
  let baseUrl = e.target.baseUrl || '';
  console.log(e)
  console.table(e)
  handleErrorType(e)
  console.groupEnd()
  return true
},true)

window.addEventListener("unhandledrejection", function(e){
  console.groupEnd('====== Promise Error ======')
  e.preventDefault()
  console.log(e.reason);
  console.groupEnd()
  return true;
});

window.addEventListener('click',handleClick)
function handleClick(event){
  console.group("====== click ======")
  let target;
  try {
    target = event.target
  } catch (error) {
    target = 'unknow'
  }
  console.log(event)
  console.groupEnd()
}

window.addEventListener('hashchange',function(e){
  console.log('------hash change------',e)
})
let startTime = 0;
let pageStay = 0;
event.on('historyStateChange',function(data){
  if(startTime !== 0){
    pageStay = new Date().getTime() - startTime;
    startTime = new Date().getTime()
  } else {
    startTime = new Date().getTime()
  }
  console.log('====== historyStateChange data ======',data,'last page stay time s',pageStay/1000)
})

// 获取静态资源列表
window.performance.getEntriesByType("resource")