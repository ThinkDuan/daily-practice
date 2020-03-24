export default function(){
  console.group('====== performance ======')
  console.log(window.performance)
  const performanceTiming = window.performance.timing
  let dns = performanceTiming.domainLookupEnd - performanceTiming.domainLookupStart; // DNS解析耗时
  let tcp = performanceTiming.connectEnd - performanceTiming.connectStart; // TCP连接耗时
  let ssl = performanceTiming.connectEnd - performanceTiming.secureConnectionStart; // SSL安全链接耗时
  let ttfb = performanceTiming.responseStart - performanceTiming.requestStart; // 网络请求耗时
  let trans = performanceTiming.responseEnd - performanceTiming.responseStart; // 数据传输耗时
  let dom = performanceTiming.domInteractive - performanceTiming.domContentLoadedEventEnd; // DOM解析耗时
  let firstByte = performanceTiming.responseStart - performanceTiming.domainLookupStart; // 首包时间
  let fpt = performanceTiming.responseEnd - performanceTiming.fetchStart; // 首屏时间
  let tti = performanceTiming.domInteractive - performanceTiming.fetchStart; // 首次可交互时间
  let ready = performanceTiming.domContentLoadedEventEnd - performanceTiming.fetchStart; // HTML加载完成时间
  let load = performanceTiming.loadEventStart - performanceTiming.fetchStart; // 页面加载耗时
  let tableHead = ['DNS解析耗时','TCP连接耗时','SSL安全链接耗时','网络请求耗时','数据传输耗时','DOM解析耗时','页面加载耗时'];
  let data = [
    {
      '事件名称': 'DNS解析耗时',
      '时间': dns
    },
    {
      '事件名称': 'TCP连接耗时',
      '时间': tcp
    },
    {
      '事件名称': 'SSL安全链接耗时',
      '时间': ssl
    },
    {
      '事件名称': '网络请求耗时',
      '时间': ttfb
    },
    {
      '事件名称': '数据传输耗时',
      '时间': trans
    },
    {
      '事件名称': 'DOM解析耗时',
      '时间': dom
    },
    {
      '事件名称': '首包时间',
      '时间': firstByte
    },
    {
      '事件名称': '首屏时间',
      '时间': fpt
    },
    {
      '事件名称': '首次可交互时间',
      '时间': tti
    },
    {
      '事件名称': 'HTML加载完成时间',
      '时间': ready
    },
    {
      '事件名称': '页面加载耗时',
      '时间': load
    }
  ]
  console.table(data)
  console.groupEnd()
}