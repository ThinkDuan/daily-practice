/* eslint-disable */
let idCard = (value,callback) => {
  let cityCodeList = ["11", "12", "13", "14", "15", "21", "22","23", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43","44", "45", "46", "50", "51", "52", "53", "54", "61", "62", "63","64", "65", "71", "81", "82", "91" ];
  let reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$/;
  let idCardLength = 0;
  if(!value){
     callback(true);
  } else {
    idCardLength = value.length;
  }
  if(idCardLength === 15){
    if(!firstIdCard(value)){
      callback("身份证校验错误")
    }
  } else if(idCardLength === 18){
    if(!secondIdCard(value)){
      callback("身份证校验错误")
    }
  }else {
    callback("身份证位数错误")
  }
  function firstIdCard(idCard){
    let reg = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/;
    if(reg.test(idCard)){
      return true;
    }
    return false;
  };
  function secondIdCard(idCard){
    let cityCode = idCard.substring(0,2);
    let birthDate = idCard.substring(6,14);
    if(!reg.test(value)){
      return false;
    }
    if(!(cityCodeList.indexOf(cityCode) >= 0)){
      return false;
    }
    if(!checkDate(birthDate)){
      return false;
    }
    if(!checkCode(idCard)){
      return false;
    }
    return true;
  };
  function translateFirstToSecond(idCard){
    let secondCard;
    return secondCard;
  };
  function checkDate(value){
    let reg = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if(reg.test(value)){
      let year = value.substring(0, 4);
      let month = value.substring(4, 6);
      let date = value.substring(6, 8);
      let date2 = new Date(year+"-" + month+"-" + date);
      if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
          return true;
      }
    }
    return false;
  };
  function checkCode(idCard){
    let factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
    let parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
    let code = idCard.substring(17);
    let sum = 0;
    for(let i=0;i<17;i++) {
        sum += idCard[i]*factor[i];
    }
    if(parity[sum % 11] == code.toUpperCase()) {
        return true;
    }
    return false;
  }
   callback(true);
};
let email = (value,callback) => {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if(!value){
    callback('邮箱格式错误')
  } else if(!reg.test(value)){
    callback('邮箱格式错误')
  } else {
    callback(true)
  }
};
let cellPhone = (value,callback) => {
  let reg = /^[1][3456789][0-9]{9}$/;
  if(!value){
    callback('手机格式错误')
  } else if(!reg.test(value)){
    callback('手机格式错误')
  } else {
    callback(true)
  }
};
let phoneNoRequired = (value,callback) => {
  let phone = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  let cellPhone = /^[1][3456789][0-9]{9}$/;
  if(!value){
     callback(true);
  } else if(!phone.test(value) && !cellPhone.test(value)){
    callback('电话或手机格式错误')
  } else {
     callback(true);
  }
};
let phone = (value,callback) => {
  let phone = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  let cellPhone = /^[1][3456789][0-9]{9}$/;
  if(!value){
    callback('电话或手机不能为空')
  } else if(!phone.test(value) && !cellPhone.test(value)){
    callback('电话或手机格式错误')
  } else {
     callback(true);
  }
};
let number = (value,callback) => {
  let numberReg = /^[0-9]*$/;
  if(!numberReg.test(value)){
    callback('请输入数字类型')
  } else {
     callback(true);
  }
};
let numberDecimal = (value,callback) => {
  let numberReg = /^[0-9\.]*$/;
  if(value){
    if(typeof value === 'number'){
      value += ''
    }
    if(!numberReg.test(value)){
      callback('请输入正确的数字类型')
    } else if(value.indexOf('.') === 0){
      callback('请输入正确的数字类型')
    } else if(value.split('.').length > 2){
      callback('请输入正确的数字类型')
    } else {
       callback(true);
    }
  } else {
     callback(true);
  }
};
let nameType = (value,callback) => {
  let numberReg = /^[\u4e00-\u9fa5\·]+$/;
  if(!numberReg.test(value)){
    callback('请输入正确的姓名')
  }else if(value.substring(0,1) === '·' || value.substring(value.length - 1) === '·'){
    callback('请输入正确的姓名')
  } else if(value.length > 20){
    callback('姓名长度不能大于20个字符')
  } else {
     callback(true);
  }
};
let vin = (value,callback) => {
  if(value.length !== 17){
    callback("车架号位数错误")
  } else if(value.indexOf('I') > -1 || value.indexOf('O') > -1 || value.indexOf('Q') > -1){
    callback("车架号校验错误")
  } else if(!checkCode(value)){
    callback("车架号校验错误")
  } else {
    callback(true)
  }
  function checkCode(value){
    let factor = ['8','7','6','5','4','3','2','10','0','9','8','7','6','5','4','3','2'];
    let vinMap = {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'A': 1,
      'B': 2,
      'C': 3,
      'D': 4,
      'E': 5,
      'F': 6,
      'G': 7,
      'H': 8,
      'J': 1,
      'K': 2,
      'L': 3,
      'M': 4,
      'N': 5,
      'P': 7,
      'R': 9,
      'S': 2,
      'T': 3,
      'U': 4,
      'V': 5,
      'W': 6,
      'X': 7,
      'Y': 8,
      'Z': 9
    };
    let valueList = [];
    let totalNumber = 0;
    let checkCode;
    if(value){
      valueList = value.split('');
    }
    valueList.forEach((item,index) => {
      totalNumber += vinMap[item] * factor[index]
    });
    checkCode = totalNumber%11;
    if(checkCode === 10){
      checkCode = 'X'
    } else {
      checkCode += '';
    }
    if(checkCode === valueList[8]){
      return true;
    } else {
      return false;
    }
  }
};
let businessLicence = (value,callback) => {
  let reg = /[IOZSV]/;
  if(typeof value === 'number'){
    value += '';
  }
  if(value.length !== 15 && value.length !== 18){
    callback(new Error('营业执照号码位数错误'))
  } else if(reg.test(value)){
    callback(new Error('营业执照号码错误'))
  } else {
    if(value.length === 15){
      let regNum = /^[0-9A-Z]{15}$/;
      if(!regNum.test(value)){
        callback(new Error('营业执照号码错误'))
      } else if(!check15(value)){
        callback(new Error('营业执照号码错误'))
      } else {
         callback(true);
      }
    } else if(value.length === 18){
      let regNum = /^[0-9A-Z]{18}$/;
      if(!regNum.test(value)){
        callback(new Error('营业执照号码错误'))
      } else if(!check18(value)){
        callback(new Error('营业执照号码错误'))
      } else {
         callback(true);
      }
    }
  }
  function check15(value){
   let valList = value.substring(0,14).split('');
   let result = 10;
   let tmp = void 0;
   valList.forEach((item,index) => {

     item = parseInt(item);
     tmp = (item + result)%10
     if(tmp === 0){
       tmp = 10
     }
     result = (tmp*2)%11;
   })
   if(!((result + parseInt(value.substring(14)))%10 === 1)){
     return false;
   } else {
     return true;
   }
  };
  function check18(value){
    let parity = [1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];
    let resultList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','T','U','W','X','Y'];
    if(typeof value === 'string'){
      let valList = value.substring(0,17).split('');
      let total = 0;
      let result = 0;
      valList.forEach((item,index) => {
        total += item*parity[index];
      });
      result = 31 - total%31;
      if(value.substring(17) == resultList[result]){
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  };
};
let postalCode = (value,callback) => {
  let reg = /^[0-9]\d{5}$/;
  if(!value){
    callback('邮政编码格式错误')
  } else if(!reg.test(value)){
    callback('邮政编码格式错误')
  } else {
    callback(true)
  }
};
let money = (value,callback) => {
  let reg = /(^(([1-9]([0-9]+)?)|(0{1}))(\.[0-9]{1,2})?$)/;
  if(!value){
    callback('金额格式错误')
  } else if(!reg.test(value)){
    callback('金额格式错误')
  } else {
    callback(true)
  }
}
export {
  idCard,
  email,
  cellPhone,
  phoneNoRequired,
  phone,
  number,
  numberDecimal,
  vin,
  businessLicence,
  nameType,
  postalCode,
  money
}