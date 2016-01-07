  PanLi(function(){
        var _hostName = window.location.hostname;
     
    
     
		PanLi(".action-bar").html('');
		
		
		PanLi(".action-bar,#detail-base-smart-banner,.tryme,.cart-concern-btm-fixed,.item-action").remove();
		
		
		PanLi(".pd-close").parent().remove();
		
		PanLi("body").on("touchend click touchmove touchstart",".mask-top,.mask-bottom",function(event){
			console.log("阻止");
			event.stopPropagation();          
			return false;
			
		});      
  })