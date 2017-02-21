(function($){
	loadInfo();
     function loadInfo() {
     	$.getJSON('data/coursewarp.json', function(data) {
     		$(".cont").html(""); //清空info内容
     		$.each(data, function(i, item) {
     			$(".cont").append(
     			'<div class="course-wrap">'
     				+'<a href="'+item.url+'" target="_blank">'
                      	+'<div class="course-box">'
                            +'<img alt="React.js入门与实战   开发适配PC端及移动端新闻头条平台" src="'+item.img+'">'
                            +'<div class="course-intro">'
                            +'<span class="course-intro-title">内容简介</span>'   
                            +'<span>'+item.content+'</span>'
                            +'</div>'
							+'<div class="course-bottom">'
							+'<h3>'+item.title+'</h3>'
							+'</div>'
                       +' </div>'
					+'</a>'
				+'</div>'
     			)
     		});
     	});
     } 
})(jQuery);    