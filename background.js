
function show() {
  var time = /(..)(:..)/.exec(new Date());     // 当前时间.
  var hour = time[1] % 12 || 12;               // 当前小时.
  var period = time[1] < 12 ? '上午' : '下午'; 
  new Notification(period+ ' ' + hour + time[2]  , {
    icon: 'icon/48.png',
    body: '祝你测试开心：魔法棒.'
  });
}




var _hostName = window.location.hostname;

// if(_hostName == 'detail.m.tmall.com' || _hostName == 'h5.m.taobao.com'){
    
// }


show();