if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
	var ieversion = new Number(RegExp.$1);
	if(ieversion <= 7){
	      window.location = "/noie.html";
	}
}
