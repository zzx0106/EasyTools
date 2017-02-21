(function($){
//	获取浏览器窗口内尺寸
	var windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidht;

	var cover = $('#cover');
	var topdiv = $('.topdiv');
	var body = $('body');
	
	var wheelnum = 0;
	document.body.onmousewheel = function(event) {
    event = event || window.event;
   
   
    if(event.wheelDelta>0){
    	topdiv.css({
    		opacity: '1',
		    top:'0px',
		    transition: '1s ease'
    	})
    }else{
    	topdiv.css({
    		opacity: '0',
		    top:'-80px',
		    transition: '1s ease'
    	})	
    }
};
	cover.css({
		width:'100%',
		height:windowH
	})
	cover.html(
	'<div class="cover-box">'+
	'<div class="cover-title">' +
		'<span class="t_E">E</span>' +
		'<span class="t_asy">asy</span>' +
		'<span class="t_T">T</span>' +
		'<span class="t_ools">ools</span>' +
		'<p class="cover-content">' +
			'享受极致的快捷' +
		'</p>' +
	'</div>' +
	'<a class="cover-btn md-xwzx" href="#pagerview">立  即  体  验</a>'+
	'</div>' +	
	'<img src="img/coverbg.jpg" width="' + windowW + 'px" height="' + windowH + 'px"  hspace="5" vspace="5" border="0" lowsrc="img/coverbglow.jpg"/>'
	)
	
	
	var covertitle = $('.cover-title');
	var coverbox = $('.cover-box');
	var t_E=$('.t_E');
	var t_T=$('.t_T');
	var t_asy=$('.t_asy');
	var t_ools=$('.t_ools');
	var coverContent = $('.cover-content');
	covertitle.css({
		height:t_E.height() + coverContent.height()+50,
		top:55,
		right:50
	});
	coverbox.css({
		top:70,
		height:windowH - 70,
		width:covertitle.width()+100,
		right:-(covertitle.width()+100)
	})
	//右边栏出现
	setTimeout(function() {
		coverbox.css({
			right: 0
		})
	}, 200)
	
	var coverbtn = $('.cover-btn');
	
	coverbtn.bind('click',function(){
		
	})
	
	//设置锚点动画
	maodian_animation();
	
	
	var i = 0;
	var interv =setInterval(function(){
		if(i==0){t_E.css({opacity:1})}
		if(i==1){t_T.css({opacity:1})}
		if(i==2){
			t_asy.css({opacity:1});
			t_ools.css({opacity:1});
		}
		if(i==3){
			coverContent.css({
				opacity:1,
				bottom:0
			})
			clearInterval(interv);
		}
		i++;	
	},1000)
	
	function maodian_animation(){
		$('.md-xwzx,.md-jrtt,.md-kjtt,.md-about').click(function() {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
			return false;
		});
	}
})(jQuery)
