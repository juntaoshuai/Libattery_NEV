//生成时间，如果是一位数，就前面补0
function getTime(time) {
	if (time < 10) {
		return "0" + time
	}
	return time;
}

function getCurrentTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var currentTime = getTime(hours) + ":" + getTime(minutes) + ":"
			+ getTime(seconds);
	return currentTime;
}

function getCurrentSeconds() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	return (hours * 3600 + minutes * 60 + seconds);
}

var minuteArr = [];

//生成有范围的随机数字
function randomRange(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}
//随机生成0-count的数字
function randomNum(count) {
	return parseInt(Math.random() * count);
}
var arr = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c',
		'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
		'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E',
		'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
		'T', 'U', 'V', 'W', 'S', 'Y', 'Z' ];
function randomAudi() {
	var xin = randomRange(4, 10);
	var xinNum = "";
	for (var i = 0; i < xin; i++) {
		xinNum += "*";
	}
	return arr[randomNum(arr.length)] + xinNum + arr[randomNum(arr.length)];

}
//console.log("观众"+randomAudi(arr,randomRange(2,20)));	

function compareSeconds(time) {
	var time = time.split(":");
	var s = time[0] * 3600 + time[1] * 60 + time[2] * 1;
	return s;
}

$(function() {
	$(".zs_box p").each(
			function(i) {
				var divH = $(this).height();
				var $span = $("span", $(this)).eq(0);
				while ($span.outerHeight() > divH) {
					$span.text($span.text().replace(
							/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));

				}
				;
			});

	// 首页进入展台按钮
	$(".zs_model .zs_box").hover(function() {
		$(this).find(".zs_btn").addClass("zs_btn_red").stop().animate({
			'width' : '150px'
		}, 500);

	}, function() {
		$(this).find(".zs_btn").removeClass("zs_btn_red").stop().animate({
			'width' : '80px'
		}, 500);
	})

	// 登录提示
	$("#tip_fixed .close").click(function() {
		$("#tip_fixed").hide();
	})

	// 样品申请页
	$("#pro_nav ul li").click(
			function() {
				$(this).addClass("on").siblings("li").removeClass("on");
				$(".main_right").eq($(this).index()).show().siblings(
						".main_right").hide();
			})

	// 搜索框
	var isShow = false;
	$(".search .pull_list").click(function() {
		if (isShow == false) {
			$(this).find("p").show();
			isShow = true;
		} else {
			$(".search .pull_list .other").hide();
			isShow = false;
		}
	})

	$(".search .pull_list p").click(function() {

		var thisText = $(this).text();

		var otherText = $(this).siblings().text();

		$(".search .pull_list .current").text(thisText);

		$(".search .pull_list .other").text(otherText);

		if (isShow == true) {
			$(".search .pull_list .other").hide();
		}
	})

	// 首页聊天窗
	//$("#livechat_main").addClass("opa").find("object").addClass("opa");

	$("#livechat .live_mr").click(function() {
		$(this).hide();
		// $("#livechat_main").show();
		$("#livechat_main").animate({
			'bottom' : 0
		}, 500);
		//$("#livechat_main").removeClass("opa").find("object").removeClass("opa");
	})

	$("#livechat #close").click(function() {
		// $("#livechat #livechat_main").hide();
		$("#livechat_main").animate({
			'bottom' : -520
		}, 500);
		//$("#livechat_main").addClass("opa").find("object").addClass("opa");;
		$("#livechat .live_mr").show();
	})

	$("#livechat .chat_nav ul li").click(
			function() {
				$(this).addClass("on").siblings("li").removeClass("on");
				$("#livechat .chat_msg").eq($(this).index()).show().siblings(
						".chat_msg").hide();
			})

	// 首页公告超过两条滚动
	$.fn.extend({
		Scroll : function(opt, callback) {
			// 参数初始化
			if (!opt)
				var opt = {};
			var _this = this.eq(0).find("ul:first");
			var lineH = _this.find("li:first").height(), // 获取行高
			line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height()
					/ lineH, 10),
			// 每次滚动的行数，默认为一屏，即父容器高度
			speed = opt.speed ? parseInt(opt.speed, 10) : 500, // 卷动速度，数值越大，速度越慢（毫秒）
			timer = opt.timer ? parseInt(opt.timer, 10) : 4000; // 滚动的时间间隔（毫秒）
			if (line == 0)
				line = 1;
			var upHeight = 0 - line * (lineH + 12);
			// 滚动函数
			scrollUp = function() {
				_this.animate({
					marginTop : upHeight
				}, speed, function() {
					for (i = 1; i <= line; i++) {
						_this.find("li:first").appendTo(_this);
					}
					_this.css({
						marginTop : 0
					});
				});
			}
			// 鼠标事件绑定
			_this.hover(function() {
				clearInterval(timerID);
			}, function() {
				timerID = setInterval("scrollUp()", timer);
			}).mouseout();
		}
	});

	// 超过两条时滚动
	if ($("#scroll_note li").length > 2) {
		$("#scroll_note").Scroll({
			line : 2,
			speed : 1000,
			timer : 4000
		});
	}

	// 导航最近展会下拉效果
	/*$("#last_zhanhui").hover(
			function() {
				$(this).find(".zh_list").show();
				$(".zh_list dt").mouseover(
						function() {
							$(this).addClass("selected").siblings("dt")
									.removeClass("selected");
						})
			}, function() {
				$(this).find(".zh_list").hide();
			})

	//导航已经举办展会下拉效果
    $("#end_zhanhui").hover(function(){
        $(this).find(".zh_list").show();
        $(".zh_list dt").mouseover(function(){
            $(this).addClass("selected").siblings("dt").removeClass("selected");
        })
    },function(){
        $(this).find(".zh_list").hide();
    })*/

	// 导航hover效果
	$("#g_nav li").not(".line").hover(function() {
		$(this).addClass("on");
	}, function() {
		$(this).removeClass("on");
	})

})

function query(urlRequired, page) {
    var keyword = $("#keyword").val();
    var form = $("#searchForm");
    var text = $(".search .pull_list .current").text();
    var methodName = '';
    if (text == '参展商') {
        methodName = 'queryExhibitor';
    } else {
        methodName = 'queryProduct';
    }
    var url = "/exhibition/index.xhtml?" + urlRequired + "&method=" + methodName;
    if (page) {
        url = url + "&page=" + page;
    }
    form.attr("action", url);
    form.submit();
	
}

document.onkeydown = function(e) {
	var theEvent = window.event || e;
	var code = theEvent.keyCode || theEvent.which;
	if (code == 13) {
		//query(theme, mode, page);
	}
}

// 首页推荐展商滚动
function leftscroll(speed, demo) {

	function Marquee() {
		if (demo2.offsetWidth - demo.scrollLeft <= 0)
			demo.scrollLeft -= demo1.offsetWidth;
		else {
			demo.scrollLeft++;
		}
	}

	if ($("#" + demo).length) {
		var speed = speed;
		var c2 = demo + '1';
		var c3 = demo + '2';
		var scrname = setInterval(Marquee, speed);
		var demo = document.getElementById(demo);
		var demo1 = document.getElementById(c2);
		var demo2 = document.getElementById(c3);
		demo2.innerHTML = demo1.innerHTML;
		demo.onmouseover = function() {
			clearInterval(scrname)
		}
		demo.onmouseout = function() {
			scrname = setInterval(Marquee, speed);
		}
	}

}



function notifyUserEnterExhibition(notification) {
	try {
		//        var notification = eval(msgText);
		if (notification) {
			var user = notification.user;
			if (user.userType == 1) {
				/** <li>
				        <span class="msg_date">15:00:25</span>
				        <p class="padleft30 font14">观众张三进入展厅</p>
				    </li>*/
				var elementText = "<li><span class='msg_date'>"
						+ notification.time
						+ "</span><p class='padleft30 font14'>观众" + user.name
						+ "进入展厅</p></li>";
				var element = $(elementText);
				var area = $("#gz_msg");
				var exists = area.find("li");
				if (exists.length >= 3) {
					exists[0].remove();
				}
				element.appendTo(area);
			}
		}
	} catch (e) {
	}
}

$(document).ready(
		function() {
			//   setInterval(function() {
			//       var data =  {time:'xxx', user:{userType:1, name: 'test' + new Date().getTime()}};
			//       notifyUserEnterExhibition(data);
			//   }, 1000)

			$(".active_list li:even:not(.act_head)").css("background",
					"#fafafa");
			$(".active_list li").eq(1).find(".act_con").append(
					"<dd class='first_bg'></dd>");
			$(".active_list li:last").find(".act_con").append(
					"<dd class='last_bg'></dd>");
			if ($(".active_list li").length % 2 == 0) {
				$(".active_list .act_con .last_bg").css("background", "#fff");
			} else {
				$(".active_list .act_con .last_bg")
						.css("background", "#fafafa");
			}
			//大厅分享活动
			$("#share").hover(function() {
				$(this).find(".jiathis_style").show();
			}, function() {
				$(this).find(".jiathis_style").hide();
			})

			/*  $(".act_ifr_box iframe").attr("id","act_ifr")
			 var ifrH= $(window.frames["act_ifr"].document).find("body").height();
			 alert(ifrH);*/
			$(".act_ifr_box iframe").height(153); //离上面距离30px，body高+30

		});

//楼层半透明背景，中间块的高度计算
$(function() {
	$(".bg-middle").each(function(i) {
		var wrapH = $(this).parent().outerHeight();
		$(this).height(wrapH - 180);
		$(this).siblings(".bg-top,.bg-bottom").css("visibility", "visible");
	})
})

//展会大厅悬浮
$(window).scroll(function() {
	var winScroll = $(window).scrollTop();
	if (winScroll > 75) {
		$(".we_nav").addClass("we_nav_fixed");
	} else if (winScroll < 75) {
		$(".we_nav").removeClass("we_nav_fixed");
	}
})

$(function(){

	function topscroll(speed,demo){
	  //向上无缝滚动
	  if(!document.getElementById(demo)){return;};
	  var speed = speed;
	  var c2 = demo+'1';
	  var c3 = demo+'2';
	  var scrname=setInterval(Marquee,speed); 
	  var demo = document.getElementById(demo);
	  var demo1 = document.getElementById(c2);
	  var demo2 = document.getElementById(c3);
	  demo2.innerHTML=demo1.innerHTML;
	  demo.onmouseover=function(){ clearInterval(scrname) }
	  demo.onmouseout=function(){ scrname=setInterval(Marquee,speed) }
	  function Marquee(){
	  if(demo2.offsetHeight-demo.scrollTop<=0)
	     demo.scrollTop-=demo1.offsetHeight
	  else{
	     demo.scrollTop++
	  }
	  }
	}

topscroll(70,"winners_dl")

})

//tab切换
function tab1(o1,o2,c,e){
    o1.each(function(i){
        $(this).bind(e,function(){
            o2.hide().eq(i).show();
            o1.removeClass(c);
            $(this).addClass(c);
        })
    })
}

$(function(){
	tab1($(".ni-tab-btn li"),$(".ni-tab-cot li"),"current","mouseover");
})


//回顾，点击“进入展台”按钮显示提示弹窗
$(function(){

	var overPopup = $(".over-popup");//获取弹窗模块
	var winW = $(window).width();//获取视口宽度
	var box;

    $(".main_wrapper").delegate(".zs_box h6 a,.zs_box h3 a,.zs_box .zs_btn a","click",function(event){
    	event.preventDefault();
    	$(".zs_box").css("zIndex","99");
        box = $(this).parents(".zs_box").css("zIndex","99999");
        box.append(overPopup.css("left","115px").show());
        if( winW - box.offset().left < 430 ){
        	overPopup.css("left","-300px");
        }
    });

    $(".op-close").click(function(){
    	$(this).parents(".over-popup").hide();
    })

})

$(function(){
	//精彩回放
	$(".pl-vl-list li").each(function(i){
	    $(this).on("click",function(){
	        $(".pl-vl-list li").removeClass("current").eq(i).addClass("current");
	        $(".pl-title li").hide().eq(i).show();
	        switchVideo(i);
	    })
	})

	function switchVideo(i){
	    var src = [
	    "file=video/2015120205.mp4&image=http://video.ofweek.com/Upload/video/2015120205.mp4big.jpg",
	    "file=video/2015120206.mp4&image=http://video.ofweek.com/Upload/video/2015120206.mp4big.jpg",
	    "file=video/2015120207.mp4&image=http://video.ofweek.com/Upload/video/2015120207.mp4big.jpg"
	    ];
	    var $warp = $("#playerbox");
	    $warp.html('<embed type="application/x-shockwave-flash" src="http://video.ofweek.com/js/player.swf" width="471" height="265" id="single" name="single" bgcolor="#000000" quality="high" allowfullscreen="true" wmode="transparent" flashvars="mute=false&amp;skin=http://video.ofweek.com/js/skin/lulu.xml&amp;width=471&amp;height=265&amp;streamer=rtmp://fms.ofweek.com:1935/vod&'+src[i]+'">');
	}

})；


//登录
$(function() {
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


