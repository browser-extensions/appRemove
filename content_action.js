  PanLi(function(){
        var _hostName = window.location.hostname;
       
     
		PanLi(".action-bar").html('');
		
		
		PanLi(".action-bar,#detail-base-smart-banner,.tryme,.cart-concern-btm-fixed,.item-action").remove();
		
		
		console.log(_hostName);
		
		if(_hostName == 'h5.m.taobao.com'){
				console.log("==h5.m.taobao.com")
				PanLi('body').css({'paddingTop':'0'});
				
				
		}
		
		
		if(_hostName == 'detail.m.tmall.com'){
			PanLi("#content").css({'paddingTop':'0'});
		}
		
		
		setTimeout(function(){
			var taobaoClose = PanLi("[id$='-close']");
			console.log(taobaoClose.html());			
			taobaoClose.parent().remove();
			if(_hostName == 'h5.m.taobao.com'){
				console.log("==h5.m.taobao.com")
				PanLi('body').css({'paddingTop':'0'});
			}
		},500)
		
        
        // 创建一个简单的文字通知：
        var notification = webkitNotifications.createNotification(
        '48.png',  // icon url - can be relative
        'Hello!',  // notification title
        'Lorem ipsum...'  // notification body text
        );

        // 或者创建一个 HTML 通知：
        var notification = webkitNotifications.createHTMLNotification(
        'notification.html'  // html url - can be relative
        );

        // 显示通知
        notification.show();
        
		
		//taobaoClose.parent().remove();
		
		
		
		PanLi("body").on("touchend click touchmove touchstart",".mask-top,.mask-bottom",function(event){
			console.log("阻止");
			event.stopPropagation();          
			return false;			
		});      
  })
  
  
  
  

