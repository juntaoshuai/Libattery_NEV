$(document).ready(function() {
    $.ajax({
        type : 'post',
        contentType : "application/x-www-form-urlencoded;charset=utf-8",
        url : '/loginStatus.xhtml',
        dataType : 'json',
        cache : false,
        data : {},
        success : function(responseData) {
            if(responseData) {
                var userType = responseData.userType;
                if(userType == 3) {
                    $("#centerHref").attr("href", "/exhibitor/info/index.xhtml");
                } else if(userType == 1){
                    $("#centerHref").attr("href", "/gotoCenter.xhtml");
                }
                $("#centerHref").html(responseData.name);
                $("#login_nav").hide();
                $("#user_nav").show();
            } else {
                $("#login_nav").show();
                $("#user_nav").hide();
            }
        }
    });
});

$(function() {
	  leftscroll(40, "media");
	  
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

   //五大展区
   $.fn.center=function(){
	var currH=this.height();
	var faH=$(".pic_show li").height();
	var top=(faH-currH)/2;
	this.css("top",top);
	return this;
	}
	
	 $.fn.moveCenter=function(){
	var currH=this.height();
	var faH=$(".pic_show li").height();
	var top=(faH-currH)/2;
	this.animate({"top":top},500);
	return this;
	}
	
	
   $(".pic_show h4").each(function() {
      $(this).center();
});
   
   
   
   $(".pic_show li").hover(function(){
	   var currH=$(this).find("p").outerHeight();
	   var h4h=$(this).find("h4").outerHeight();
	var faH=$(this).height();
	var bottom=((faH-currH)/2)-(h4h/2);
	   
	   $(this).find("h4").stop().animate({"top":((faH-currH)/2-50)},500);
	   $(this).find("p").stop().animate({"bottom":bottom},500,function(){
		   $(this).prev().css("border-bottom","1px solid #fff");
		   
		   });
	   
	   },function(){
	     $(this).find("h4").moveCenter();
		 $(this).find("h4").css("border-bottom","none").next("p").stop().animate({"bottom":"-90px"},500);
		
	   
	   });

   

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





