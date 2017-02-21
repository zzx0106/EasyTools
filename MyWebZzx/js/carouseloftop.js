$(function() {
	var bns = $('.banner-dots li');
	var li1 = $('.bxc:nth-child(1)');
	var li2 = $('.bxc:nth-child(2)');
	var li3 = $('.bxc:nth-child(3)');
	var bannerdownload = $('.banner-download');
	var next = $('.next');
	var prev = $('.prev');
	var i = 0;
	var oldindex;

	function clearbannerbox() {
		//		移除先前所有bannerbox元素
		var classStr = $('.bxc').attr('class').replace(/banner-box-\w+/g, '');
		$('.bxc').attr('class', classStr);
		bns.removeClass('active');
	}

	bns.bind('click', function() {
		var index = $(this).index('.banner-dots li');

		if(i != index) {
			var changenumber = i - index;
			clearbannerbox();
			if(changenumber > 0) {
				if(changenumber == 1) {
					toleft();
				} else if(changenumber == 2) {
					toleft();
					clearbannerbox();
					toleft();
				}
			} else {
				if(changenumber == -1) {
					toright();
				} else if(changenumber == -2) {
					toright();
					clearbannerbox();
					toright();
				}
			}
		}
	})

	//右边导航
	next.click(function() {
			clearbannerbox();
			toright();
		})
		//左边导航
	prev.click(function() {
			clearbannerbox();
			toleft();
		})
		//定时右移
	setInterval(function() {
		clearbannerbox();
		toright();
	}, 8888);

	function toleft() {
		if(i == 0) {
			moveright_to_center()
		}
		if(i == 1) {
			movecenter_to_left()
		}
		if(i == 2) {
			moveleft_to_right()
		}
		i--;
		if(i < 0) {
			i = 2;
		}
		bns.eq(i).addClass('active');
	}

	function toright() {
		if(i == 0) {
			moveright_to_left()
		}
		if(i == 1) {
			moveleft_to_center()
		}
		if(i == 2) {
			movecenter_to_right()
		}
		i++;
		if(i > 2) {
			i = 0;
		}
		bns.eq(i).addClass('active');
	}

	function moveright_to_left() { //0
		li1.addClass('banner-box-center')
		li2.addClass('banner-box-right')
		li3.addClass('banner-box-left')
		bannerdownload.text('扣丁学堂Android全套视频');
		bannerdownload.css({
			'border-color': '#527302',
			'background': '#527302'
		})
	}

	function moveleft_to_center() { //1
		li1.addClass('banner-box-right')
		li2.addClass('banner-box-left')
		li3.addClass('banner-box-center')
		bannerdownload.text('扣丁学堂IOS全套视频');
		bannerdownload.css({
			'border-color': '#151515',
			'background': '#151515'
		})
	}

	function movecenter_to_right() { //2
		li1.addClass('banner-box-left')
		li2.addClass('banner-box-center')
		li3.addClass('banner-box-right')
		bannerdownload.text('扣丁学堂H5全套视频');
		bannerdownload.css({
			'border-color': '#D84C29',
			'background': '#D84C29'
		})
	}

	function moveleft_to_right() { //0
		li1.addClass('banner-box-center')
		li2.addClass('banner-box-right')
		li3.addClass('banner-box-left')
		bannerdownload.text('扣丁学堂Android全套视频');
		bannerdownload.css({
			'border-color': '#527302',
			'background': '#527302'
		})
	}

	function moveright_to_center() { //1
		li1.addClass('banner-box-right')
		li2.addClass('banner-box-left')
		li3.addClass('banner-box-center')
		bannerdownload.text('扣丁学堂IOS全套视频');
		bannerdownload.css({
			'border-color': '#151515',
			'background': '#151515'
		})
	}

	function movecenter_to_left() { //2
		li1.addClass('banner-box-left')
		li2.addClass('banner-box-center')
		li3.addClass('banner-box-right')
		bannerdownload.text('扣丁学堂H5全套视频');
		bannerdownload.css({
			'border-color': '#D84C29',
			'background': '#D84C29'
		})
	}
})