// 获取cookie中指定字段值
var getCookie = function (sName) {
  var sRE = "(?:; )?" + sName + "=([^;]*);?";
  var oRE = new RegExp(sRE);

  if (oRE.test(document.cookie)) {
    return decodeURIComponent(RegExp["$1"]);
  } else
    return null;
}

