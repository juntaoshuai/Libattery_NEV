$(document).ready(function() {
    $.ajax({
        type : 'post',
        contentType : "application/x-www-form-urlencoded;charset=utf-8",
        url : '/ajaxHeader.xhtml',
        dataType : 'html',
        cache : false,
        success : function(responseData) {
            $("div.header").html(responseData);
        }
    });
});

$(function() {
	  //leftscroll(40, "media");
	  
	  //topscroll(40,"online");
	  //topscroll(40,"logomove");
		
		topscroll(50,"zszy");
		topscroll(50,"gzpj");
		topscroll(50,"mtbd");
	  
	  	//导航最近展会下拉效果
    $("#last_zhanhui").hover(function(){
        $(this).find(".zh_list").show();
        $(".zh_list dt").mouseover(function(){
            $(this).addClass("selected").siblings("dt").removeClass("selected");
        })
    },function(){
        $(this).find(".zh_list").hide();
    })

    
    //导航hover效果
    $("#g_nav li").not(".line").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    })

	
	  
	
	
	//导航
	$(window).bind("scroll",function(){
		//nav
		var s_top = $(window).scrollTop();
		var w_top = $("#wear_nav").offset().top;

		if(s_top > 32)
		{
			$("#wear_nav").addClass("wear_nav_fixed");
		}
		else
		{
			$("#wear_nav").removeClass("wear_nav_fixed");
		}		
	})

	
	    //定位导航
	$("ul li.menuitem").click(function(){
		var index=$(this).index();
	    var mtop=$(".item").eq(index).offset().top-50;
		$("html,body").stop().animate({'scrollTop':mtop},500);		
	});
	
		$(".check_in").click(function(){
			
	    var mtop=$(".btn_groups02").offset().top-150;
		$("html,body").stop().animate({'scrollTop':mtop},500);		
	});
	
	
	
	
	$(window).scroll(function(){
		var dataid="";
		var wtop=$(window).scrollTop();
	    $(".item").each(function(index) {
			var m=$(this);
            var itop=m.offset().top-100;
			if(wtop>itop){
			   dataid=$(this).attr("data-id");
			  
		   }else{
			   return false;
			   
			   }
        });
		
		var currentid=$(".menuitem.on");
		if(dataid && (currentid.attr("data-id"))!=dataid){
			currentid.removeClass("on");	
		 }
		 
		 $(".menuitem[data-id="+dataid+"]").addClass("on");
		
		});
			
	
	$("#wear_nav li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
	})

	//轮换图
	var b_index = 1;
    var b_len = $("#w_banner_list li").length;
    $("#w_banner_list li:not(:first-child)").hide();

    function b_show() {
      $("#w_banner_list li").eq(b_index).fadeIn(1000).siblings("li").fadeOut(1000);
      b_index++;
      if (b_index > b_len - 1) {
        b_index = 0;
      }
    }
    var b_timer = setInterval(b_show, 4000);
	
   /* $("#w_banner_list").hover(function() {
      clearInterval(b_timer);

    }, function() {
      b_timer = setInterval(b_show, 3000);
    });*/



	//四大展区
/*$.fn.center = function () {
    var currH = this.height();
    var faH = this.parent().height();
    var top = (faH - currH) / 2;
    this.css("top", top);
    return this;
}

$.fn.moveCenter = function () {
    var currH = this.height();
    var faH = this.parent().height();
    var top = (faH - currH) / 2;
    this.animate({"top": top}, 500);
    return this;
}

$(".jgz-d-list h4").each(function () {
    $(this).center();
});

$(".jgz-d-list li").hover(function () {

    var currH = $(this).find("p").outerHeight();
    var h4h = $(this).find("h4").outerHeight();
    var faH = $(this).height();
    var pos = ((faH - currH - h4h) / 2) - 5;
    var that = $(this).index(".jgz-d-list li");

    $(this).find("h4").stop(true).animate({"top": pos + 4}, 500);
    $(this).find("p").stop(true).animate({"bottom": pos + 3}, 500);
    $(this).find(".bg").stop(true).animate({"bottom": 0}, 500);
    $(this).siblings("li").stop(true).animate({"width":"228px"},500);
    $(this).stop(true).animate({"width":"314px"},500);


}, function () {

    $(this).find("h4").moveCenter();
    $(this).find("p").stop().animate({"bottom": "-145px"}, 500);
    $(this).find(".bg").stop().animate({"bottom": "-170px"}, 500);

});*/


   

    $("#share").hover(function(){
		$(this).find(".jiathis_style").show();
	},function(){
		$(this).find(".jiathis_style").hide();
	})


    //关闭浮窗
    $("#fuchuang_close").click(function(){
		$("#fuchuang").hide();
	})
    



})








//首页支持媒体滚动
function leftscroll(speed,demo){
	var speed=speed;
	var c2 = demo+'1';
	var c3 = demo+'2';
	var scrname=setInterval(Marquee,speed);	
	var demo = document.getElementById(demo);
	var demo1 = document.getElementById(c2);
	var demo2 = document.getElementById(c3);
	demo2.innerHTML=demo1.innerHTML;
	demo.onmouseover=function() {clearInterval(scrname)}
	demo.onmouseout=function() {scrname=setInterval(Marquee,speed);}
	function Marquee(){
	if(demo2.offsetWidth-demo.scrollLeft<=0)
	   demo.scrollLeft-=demo1.offsetWidth;
	else{
	   demo.scrollLeft++;
	}
	}	
}

function topscroll(speed,demo){
	//在线研讨会滚动 
	var speed=speed;
	var c2 = demo+'1';
	var c3 = demo+'2';
	var scrname=setInterval(Marquee,speed);	
	var demo = document.getElementById(demo);
	var demo1 = document.getElementById(c2);
	var demo2 = document.getElementById(c3);
	demo2.innerHTML=demo1.innerHTML;
	demo.onmouseover=function() {clearInterval(scrname)}
	demo.onmouseout=function() {scrname=setInterval(Marquee,speed);}
	function Marquee(){
	if(demo2.offsetHeight-demo.scrollTop<=0)
	   demo.scrollTop-=demo1.offsetHeight;
	else{
	   demo.scrollTop++;
	}
	}	
}

		


//参展企业 
var dis = 0;
var speed = 40;
var ulW = $(".cz_list_box ul li").height() + 150;

//$(".cz_list_box").append($(".cz_list_box").html());
var imgTimer = setInterval(imgMarquee, speed);

function imgMarquee() {
    $(".cz_list_box ul").animate({
        "margin-top": '-=1'
    }, 0, function() {
        var s = Math.abs(parseInt($(this).css("margin-top")));
        if (s >= ulW) {
            $(".cz_list_box ul li:lt(5)").appendTo($(this));
            $(this).css("margin-top", 0);
        }

    });

}
$(".cz_list_box li").hover(function() {
    clearInterval(imgTimer);
}, function() {
    imgTimer = setInterval(imgMarquee, speed);

});



