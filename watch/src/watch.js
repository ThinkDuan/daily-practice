/*
 * @Author: duanxinxin
 * @Date: 2020-03-29 20:39:11
 * @LastEditTime: 2020-03-29 20:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /daily-practice/watch/src/watch.js
 */
import hackConsole from './common/js/console'
import hackHistory from './common/js/history'
import hackAjax from './common/js/hackAjax'
import handleErrorType from './common/js/errorType'
import performance from './common/js/performance'
import event from './common/utils/event'
import hackFetch from './common/js/hackFetch';
import Fingerprint2 from 'fingerprintjs2';
import Global from './common/js/global';

// TODO: add config
class Watch {
  constructor(options){
    this.options = options
  }
  hackConsole();
  hackHistory();
  hackAjax();
  hackFetch();
  /**
   * @description: 监听error
   * @param {type} none
   * @return: none
   */
  addEventListenerError(){
    window.addEventListener('error',function(e){
      console.groupEnd('======Error======')
      let baseUrl = e.target.baseUrl || '';
      console.log(e)
      console.table(e)
      handleErrorType(e)
      console.groupEnd()
      return true
    },true)
  }
  /**
   * @description: 监听promise错误
   * @param {type} none
   * @return: none
   */
  addEventListenerPromise(){
    window.addEventListener("unhandledrejection", function(e){
      console.groupEnd('====== Promise Error ======')
      e.preventDefault()
      console.log(e.reason);
      console.groupEnd()
      return true;
    });
  }
  addEventListenerClick(){
    window.addEventListener('click',handleClick)
  }
  handleClick(event){
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

  addEventListenerHashChange(){
    window.addEventListener('hashchange',function(e){
      console.log('------hash change------',e)
    })
  }

  addEventListenerHistoryStateChange(){
    let startTime = 0;
    let pageStay = 0;
    event.on('historyStateChange',function(data){
      console.log('>>>>>> index.js: historyStateChange: startTime',new Date(startTime).toLocaleString())
      if(startTime !== 0){
        let endTime = new Date().getTime();
        console.log('>>>>>> index.js: historyStateChange endTime',new Date(endTime).toLocaleString())
        pageStay = endTime - startTime;
        console.log('>>>>>> index.js totalTime:',pageStay/1000)
        startTime = new Date().getTime();
        console.log('>>>>>> index.js: startTime again',new Date(startTime).toLocaleString())
      } else {
        startTime = new Date().getTime();
        console.log('>>>>>> index.js: startTime',new Date(startTime).toLocaleString())
      }
      console.log('====== historyStateChange data ======',data,'last page stay time s',pageStay/1000)
    })
  }
/**
 * @description: 获取静态资源列表
 * @param {type} 
 * @return: 
 */  

  getResource(){
    window.performance.getEntriesByType("resource");
  }
  /**
   * @description: 使用fingerprintjs2 获取浏览器指纹从而统计相关的指标
   * @param {type} 
   * @return: 
   */
  getPerformance(){
    window.onload = function(){
      console.log('>>>>>> index.js: onload');
      let now = new this.Date().getTime();
      Global.enterAppTime = now;
      this.console.log(">>>>>> 进入页面时间: ",new this.Date(now).toLocaleString())
      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
            Fingerprint2.get(function (components) {
              var values = components.map(function (component) { return component.value })
              var fingerprint = Fingerprint2.x64hash128(values.join(''), 31)
              Global.userAgentMessage = components;
              Global.userAgentFingerPrint = fingerprint
              console.log('>>>>>> index.js components:',components) // an array of components: {key: ..., value: ...}
              console.log('>>>>>> index.js 指纹：',fingerprint)
            })
        })
      } else {
          setTimeout(function () {
              Fingerprint2.get(function (components) {
                console.log(components) // an array of components: {key: ..., value: ...}
              })  
          }, 500)
      }
    }
  }


  /**
   * @description: 统计离开页面时间
   * @param {type} 
   * @return: 
   */
  getOuterTime(){
    window.onbeforeunload = function(){
      let now = new window.Date().getTime();
      Global.outerAppTime = now
      this.console.log('>>>>>> 离开页面时间：',new Date(now).toLocaleString())
    }
  }
}
