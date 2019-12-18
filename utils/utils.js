export function openWindow (url, name, specs) {
  let windowWidth = window.innerWidth
  let windowHeight = window.innerHeight
  let openUrl
  if (url) {
    openUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '#' + url
  } else {
    openUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '#'
    console.log('openWindow需要传入当前要跳转的路由')
  }
  if (!name) {
    name = ''
  }
  if (specs) {
    specs += 'left=' + windowWidth * 0.2 + ',width=' + windowWidth * 0.8 + ',height=' + windowHeight
  } else {
    specs = 'left=' + windowWidth * 0.2 + ',width=' + windowWidth * 0.8 + ',height=' + windowHeight
  }
  window.open(openUrl, name, specs)
}
function checkIdCard (value) {
  let callbackData = {
    type: false,
    message: '身份证校验错误'
  }
  let cityCodeList = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82', '91']
  let reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  let idCardLength = 0
  if (!value) {
    callbackData.message = '身份证不能为空'
    return callbackData
  } else {
    idCardLength = value.length
  }
  if (idCardLength === 15) {
    if (!firstIdCard(value)) {
      return callbackData
    }
  } else if (idCardLength === 18) {
    if (!secondIdCard(value)) {
      return callbackData
    } else {
      callbackData.type = true
      return callbackData
    }
  } else {
    return callbackData
  }
  function firstIdCard (idCard) {
    let reg = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/
    if (reg.test(idCard)) {
      return true
    }
    return false
  }
  function secondIdCard (idCard) {
    let cityCode = idCard.substring(0, 2)
    let birthDate = idCard.substring(6, 14)
    if (!reg.test(value)) {
      return false
    }
    if (!(cityCodeList.indexOf(cityCode) > -1)) {
      return false
    }
    if (!checkDate(birthDate)) {
      return false
    }
    if (!checkCode(idCard)) {
      return false
    }
    return true
  }
  function checkDate (value) {
    let reg = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
    if (reg.test(value)) {
      let year = value.substring(0, 4)
      let month = value.substring(4, 6)
      let date = value.substring(6, 8)
      let date2 = new Date(year + '-' + month + '-' + date)
      if (date2 && date2.getMonth() === (parseInt(month) - 1)) {
        return true
      }
    }
    return false
  }
  function checkCode (idCard) {
    let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let code = idCard.substring(17)
    let sum = 0
    for (let i = 0; i < 17; i++) {
      sum += idCard[i] * factor[i]
    }
    /*eslint-disable*/
    if (parity[sum % 11] == code.toUpperCase()) {
      return true
    }
    return false
  }
}
/**
 *
 * @param {身份证号} idCard
 * @param {获取数据的类型} type
 */
export function getDataByIdCard(idCard) {
  let data = {}
  let idCheckData = checkIdCard(idCard)
  if (!idCheckData.type) {
    console.error(idCheckData.message)
  } else {
    let birthDate = idCard.substring(6, 14)
    let birth = birthDate.substring(0, 4) + '/' + birthDate.substring(4, 6) + '/' + birthDate.substring(6)
    let sexNum = idCard.substring(16, 17)
    let age = Math.floor((Date.parse(new Date()) - Date.parse(birth + ' 00:00:00')) / (1000 * 60 * 60 * 24 * 365))
    data.birth = birthDate.substring(0, 4) + '-' + birthDate.substring(4, 6) + '-' + birthDate.substring(6)
    data.age = age
    if (sexNum % 2 === 0) {
      data.sex = 'female'
    } else {
      data.sex = 'male'
    }
  }
  return data
}
export function mathFloat(type, a, b) {
  let stringA = a + ''
  let stringB = b + ''
  let aDecimalLength = 0
  let bDecimalLength = 0
  let num = 0
  let decMaxNum = 0
  let aDecPart, aIntPart
  let bDecPart, bIntPart
  if (stringA.indexOf('.') > -1) {
    aDecimalLength = stringA.split('.')[1].length
    aIntPart = stringA.split('.')[0]
    aDecPart = stringA.split('.')[1]
  } else {
    aIntPart = stringA
    aDecPart = 0
  }
  if (stringB.indexOf('.') > -1) {
    bDecimalLength = stringB.split('.')[1].length
    bIntPart = stringB.split('.')[0]
    bDecPart = stringB.split('.')[1]
  } else {
    bIntPart = stringB
    bDecPart = 0
  }
  num = Math.pow(10, Math.max(aDecimalLength, bDecimalLength))
  decMaxNum = Math.max(aDecimalLength, bDecimalLength)
  if (aDecimalLength < decMaxNum) {
    for (let i = 0; i < decMaxNum - aDecimalLength; i++) {
      aDecPart += '0'
    }
  }
  if (bDecimalLength < decMaxNum) {
    for (let i = 0; i < decMaxNum - bDecimalLength; i++) {
      bDecPart += '0'
    }
  }
  if (type === 'add') {
    return (((parseInt(aIntPart) + parseInt(bIntPart)) * num) + (parseInt(aDecPart) + parseInt(bDecPart))) / num
  } else if (type === 'reduce') {
    return (((parseInt(aIntPart) - parseInt(bIntPart)) * num) + (parseInt(aDecPart) - parseInt(bDecPart))) / num
  }
}
export function curryMathFloat(type, a) {
  return function (b) {
    return mathFloat(type, a, b)
  }
}
//深度判断两个对象字段是否相同
export function isObjEqual(oldData, newData) {
  function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  };
  if (oldData === newData) return true;
  if (isObject(oldData) && isObject(newData) && Object.keys(oldData).length === Object.keys(newData).length) {
    for (const key in oldData) {
      if (oldData.hasOwnProperty(key)) {
        if (!isObjEqual(oldData[key], newData[key]))
          return false;
      }
    }
  } else if (isArray(oldData) && isArray(oldData) && oldData.length === newData.length) {
    for (let i = 0, length = oldData.length; i < length; i++) {
      if (!isObjEqual(oldData[i], newData[i]))
        return false;
    }
  } else {
    return false;
  }
  return true;
};
//edit==view 不可编辑
export function isEdit(val) {
 val.forEach(item => {
    item.attrs.disabled = true;
  });
}
export function getParmasByName(url,name){
  if(!url){return}
  let parmaList = url.split('?')[1].split('&')
  let parmasObject = {}
  let key,value
  parmaList.forEach((item) => {
    key = item.split('=')[0]
    value = item.split('=')[1] 
    parmasObject[key] = value
  })
  if(parmasObject[name]){
    return parmasObject[name]
  } else {
    return ''
  }
}