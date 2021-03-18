var Time = {
  formatTime: function(value,type){
    if(!value){
      return ' ';
    }
    function formatFunc(str) {
      return str > 9 ? str : '0' + str
    }
    var newDate = new Date(value);
    var year = newDate.getFullYear();
    var mon = formatFunc(newDate.getMonth() + 1);
    var day = formatFunc(newDate.getDate());
    var hour = newDate.getHours();
    hour = formatFunc(hour);
    var min = formatFunc(newDate.getMinutes());
    var second = newDate.getSeconds();
    second = formatFunc(second);
    var dateStr = year+'/'+mon+'/'+day+' '+hour+':'+min+':'+second;
    if(type === 'yyyy'){
      dateStr = year;
    } else if(type === 'yyyy-mm'){
      dateStr = year + '/' + mon;
    } else if(type === 'yyyy-mm-dd'){
      dateStr = year + '/' + mon + '/' + day;
    } else if(type === 'hh:mm:ss'){
      dateStr = hour + ':' + min + ':' + second;
    } else if(type === 'yyyy-mm-dd hh:mm'){
      dateStr = year + '/' + mon + '/' + day +' '+hour+':' + min;
    }
    return dateStr;
  }
};
export default Time;