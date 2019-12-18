import Vue from 'vue'
/* eslint-disable */
// javascript bridge
function callJavascriptBridge (callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

let bridge = {
  call (...args) {
    var arg = args
    callJavascriptBridge(function (bridge) {
      if (arg.length > 1 && typeof arg[1] === 'function') {
        return bridge.callHandler(arg[0], {}, arg[1])
      }
      bridge.callHandler.apply(bridge, arg)
    })
  },
  register (...args) {
    var arg = args
    callJavascriptBridge(function (bridge) {
      bridge.registerHandler.apply(bridge, arg)
    })
  }
}

// 设置公共参数
window.common = navigator.userAgent.split('###')[2]
if (window.common) {
  window.common = JSON.parse(window.common)
} else {
  window.common = {}
}
console.log(
  'navigator.userAgent：',
  navigator.userAgent,
  'window.common：',
  window.common,
  'token：',
  window.common.token
)
function syncData (data) {
  if (data.authKey) {
    window.common.authKey = data.authKey
  }
  if (data.cookie) {
    eval(data.cookie)
  } else if (data.authKey) {
    document.cookie = 'authKey=' + window.common.authKey + ';path=/;'
  }
}

bridge.register('syncData', data => {
  window.console.log('syncData', data)
  if (data.type === 1 && data.data) {
    syncData(data.data)
  }
})

bridge.register('onNavBack', (_, cb) => {
  // 确保只有一个页面处理返回事件
  var isCalled = false
  window.bus.$emit('onNavBack', t => {
    if (!isCalled) {
      isCalled = true
      cb(t)
    }
  })
})

bridge.register('onResult', d => {
  window.bus.$emit('onResult', d)
})

var wbFuns = [
  'openPage',
  'showLoading',
  'navBarCtl',
  'closeCurrentPage',
  'setSupportBack'
]

wbFuns.map(el => {
  window[el] = function (...args) {
    bridge.call.apply(bridge, [el, ...args])
  }
})

var navBackBlocked = false
Vue.mixin({
  created: function () {
    var onResult = this.$options.onResult
    var self = this
    if (onResult) {
      this.$options._onResult = function (d) {
        if (d) {
          onResult.call(self, d)
        }
      }
      window.bus.$on('onResult', this.$options._onResult)
    }

    var onNavBack = this.$options.onNavBack
    this.$options._onNavBack = function (cb) {
      if (self.__actived && !self.$options.ignoreNativeBackEvent) {
        if (onNavBack) {
          onNavBack.call(self, () => {
            cb({ isHandled: false })
          })
        } else {
          cb({ isHandled: false })
        }
      }
    }
    window.bus.$on('onNavBack', this.$options._onNavBack)
  },
  methods: {
    openPage (arg) {
      window.console.log('openPage', arg)
      arg = arg || { tag: 0 }
      // arg.tag = this.__id * 100 + (arg.tag || 0);y
      bridge.call.call(bridge, 'openPage', arg)
    }
  },
  beforeDestroy: function () {
    if (this.$options._onResult) {
      window.bus.$off('onResult', this.$options._onResult)
    }
    if (this.$options._onNavBack) {
      window.bus.$off('onNavBack', this.$options._onNavBack)
    }
  },
  beforeRouteEnter (to, from, next) {
    setSupportBack({ support: true })
    next(vm => {
      if (!navBackBlocked) {
        if (vm.$options.interceptNavBackEvent) {
          navBackBlocked = true
        }
        vm.__actived = true
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    this.__actived = false
    if (this.$options.interceptNavBackEvent) {
      navBackBlocked = false
    }
    next()
  }
})

// 全局变量和函数
Object.assign(window, { bridge })

export default Vue
