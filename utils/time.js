/* eslint-disable */
var Time = {
  formatTime: function (value, type) {
    if (!value) {
      return ' ';
    }
    if (!String(value).includes('GMT')) {
      return formatDate(value)
    } else {
      var newDate = new Date(value);
      var year = newDate.getFullYear();
      var mon = addZero(newDate.getMonth() + 1);
      var day = addZero(newDate.getDate());
      var hour = newDate.getHours();
      hour = addZero(hour);
      var min = addZero(newDate.getMinutes());
      var second = newDate.getSeconds();
      second = addZero(second);
      var dateStr = year + '-' + mon + '-' + day + ' ' + hour + ':' + min + ':' + second;
      if (type === 'yyyy-mm-dd') {
        dateStr = year + '-' + mon + '-' + day;
      } else if (type === 'hh:mm:ss') {
        dateStr = hour + ':' + min + ':' + second;
      } else if (type === 'yyyy-mm-dd hh:mm') {
        dateStr = year + '-' + mon + '-' + day + ' ' + hour + ':' + min;
      } else if (type === 'yyyy-mm') {
        dateStr = year + '-' + mon;
      }
      return dateStr;
    }
    function formatDate(date) {
      if(date.includes('T')){
        var arr = date.split("T");
        var d = arr[0];
        var darr = d.split('-');
        var t = arr[1];
        var tarr = t.split('.000');
        var marr = tarr[0].split(':');
        var dd = parseInt(darr[0]) + "/" + parseInt(darr[1]) + "/" + parseInt(darr[2]) + " " + parseInt(marr[0]) + ":" + parseInt(marr[1]) + ":" + parseInt(marr[2]);
        return formatDateTime(dd);
      }else{
        return formatDateTime(date);
      }
    
    }
    function formatDateTime(date) {
      let time = new Date(Date.parse(date));
      time.setTime(time.setHours(time.getHours() + 8));
      let year = time.getFullYear();
      let mon = addZero(time.getMonth() + 1);
      let day = addZero(time.getDate());
      let hour = addZero(time.getHours());
      let min = addZero(time.getMinutes());
      let second = addZero(time.getSeconds());
      var dateStr = year + '/' + mon + '/' + day + ' ' + hour + ':' + min + ':' + second;
      if (type === 'yyyy-mm-dd') {
        dateStr = year + '/' + mon + '/' + day;
      } else if (type === 'hh:mm:ss') {
        dateStr = hour + ':' + min + ':' + second;
      } else if (type === 'yyyy-mm-dd hh:mm') {
        dateStr = year + '/' + mon + '/' + day + ' ' + hour + ':' + min;
      } else if (type === 'yyyy-mm') {
        dateStr = year + '/' + mon;
      }
      // console.log('dateStr---', dateStr)
      return dateStr;
    }

    function addZero(num) {
      return num < 10 ? '0' + num : num;
    }
  }
};
export default Time;
