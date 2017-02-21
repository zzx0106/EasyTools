(function($){
	var content = $('.content-td-main');
	var titletext = $('.item-title-text');
	var tditem = $('.td-item');
	
//		console.log(titletext.length)
//	titletext.click(function(){
//		console.log(tditem)
//		tditem.css({
//			dispaly:'block'
//		})
//	})
	
	loadjson();
	function loadjson(){
		$.getJSON('data/fasttool.json',function(data){
			content.html('');
			$.each(data, function(tindex,toolname) {
				content.append(
			'<!--item标题-->'
				+'<h3 class="item-title-text ">'
				        +toolname.title
				+'</h3>'
				)
				$.each(toolname.include, function(kindex,include) {
					content.append(
				'<!--item-->'
				+'<div class="td-item clearfix">'
				+'<!--item内容-->'
				+'<div class="item-content">'
					+'<h4 class="td-title clearfix">'
								+include.name
					+'</h4>'
					+'<p class="td-p">'
						+include.content
					+'</p>'
					+'<!--item滚动url-->'
					+'<div class="item-url clearfix">'
						+'<p class="url-time">'+include.version+'</p>'
						+'<a class="url" href="'+include.url+'">点击下载</a>'
					+'</div>'
				+'</div>'
			+'</div>'
					)
				});
			});
		})
	}
	$('body').on('click', '.item-title-text', function() {
		console.log(tditem)
		tditem.css({
			dispaly:'block'
		})
		tditem.addClass('asd')
	})
})(jQuery)
