// JavaScript Document

// JavaScript Document tab 切换效果
$(document).ready(function() {
	$.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();
		$(tabtit).find("li:first").addClass("tab").show(); 
		
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab")
		   
			var activeindex = $(tabtit).find("li").index(this);

			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	/*调用方法如下：*/
	$.jqtab("#tabs","#tab_conbox","click");//click
});

/*table的每行颜色*/
$(document).ready(function() {
	$("table tr:even").css("background","#bcdaff")
});



