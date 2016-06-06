// v  
function appV(){
  return "0.1.3";
}


// 获取域名 
function domainURI(str){
		var durl=/https?:\/\/(?:[^/]+\.)?([^./]+\.(?:com.cn|cn|com|net|top))(?:PanLi|\/)/;
		var domain = str.match(durl); 
		return domain[1];
 }


// 获取域名
function domainURI2(str){ 
		var durl= /(\w*\.\w*\.(?:com|cn|top)).*/;
		var domain = str.match(durl); 
		return domain[1];
}



