// JavaScript Document

// JavaScript Document
$(function(){
var wjs = {
    setCookie: function(name, value, expires) {
      document.cookie = name + '=' + value + '; path=/; domain=' + document.domain + (expires ? '; expires=' + expires.toGMTString() : '');
    },
    getCookie: function(name) {
      var prefix = name + '=';
      var start = document.cookie.indexOf(prefix);
      if (start == -1)
        return null;
      var end = document.cookie.indexOf(';', start + prefix.length);
      if (end == -1)
        end = document.cookie.length;
      var value = document.cookie.substring(start + prefix.length, end);
      value = decodeURIComponent(value)
      return value;
    },
    lefttime: function() {
      // var endtime = new Date('2015 / 05 /27, 00: 00: 00');
      var endtime = new Date('2016 / 04 / 27, 09: 00: 00');
      var nowtime = new Date();
      var leftsecond = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
      var _d = parseInt(leftsecond / 3600 / 24);
      var _h = parseInt((leftsecond / 3600) % 24);
      var _m = parseInt((leftsecond / 60) % 60);
      var _s = parseInt(leftsecond % 60);
      var timer;
	  jQuery(".Date").show();
	  

      if (leftsecond > 0)
	  {
          jQuery('#lefttime').html('<span>' + _d + '</span><span>' + _h + '</span><span>' + '' + _m + '' + '</span><span>' + '' + _s + '' + '</span><span>');
      }
	  else {
        //wjs.$('lefttime').innerHTML = '<span class="timeout"></span>';
		
		jQuery(".Date").hide();
        jQuery("#btn1").html('<img src="images/btn_sq02.gif" />');
		jQuery(".banner_right").css("padding-top","26px");
        clearTimeout(timer);
      }

      timer = setTimeout(wjs.lefttime, 1000);
    }
  };

  wjs.lefttime();
})
