$(function(){

	lazyLoad('img');
	swiperInit();

	function lazyLoad(dom){
		$(dom).lazyload({
			placeholder: 'images/loading.gif',
			effect: 'fadeIn' //加载图片使用的效果(淡入)
		});
	}

	$('#frstSwiper').find('.swiper-slide').each(function(i){
		swiperSecInit(i);
	});

	$('.close').on('click', function(){
		$('body').css('overflow', 'scroll');
		$(this).parents('.tabs').fadeOut();
	})

	$('#index1 .wapper>a').on('click', function(){
		var index1Height = $('#index1').height();
		$('#index2').show();
		$('html,body').animate({ "scrollTop": index1Height }, 800);
	})

	$('#artistShowWorks li').each(function(i){
		$(this).on('click', function(){
			$('body').css('overflow', 'hidden');
			$('#tabs_' + i).fadeIn();
			$('.tabs .wrapper .content').scrollTop(0);
		})
	});

	$('#artistShowOffer li').each(function(i){
		$(this).on('click', function(){
			$('body').css('overflow', 'hidden');
			$('#tabs_' + i).fadeIn();
			$('.tabs .wrapper .content').scrollTop(0);
		})
	});

    $(window).on('scroll', function(){
    	var oTop = $(window).scrollTop();
    	if(oTop>0){
    		$('#header').css({
    			'position': 'fixed',
    			'top': '0px',
    			'width': '100%',
    		});
    	}
    	else{
    		$('#header').css({
    			'position': 'relative',
    			'top': '0px',
    			'width': '100%',

    		});
    	}
    })

    $('#artistLesson').siblings('#header').find('.navChild').find('li').each(function(i){
    	var conTop = $('.con' + i).offset().top;

    	$(this).on('click', function(){
    		$('.navChild li a').removeClass();
    		$(this).find('a').addClass('active')
    		$('html,body').animate({ "scrollTop": conTop - 140 }, 800);
    	})
    });
})

//Swiper
function swiperInit(){
	var mySwiper = new Swiper ('#artistActivity #frstSwiper', {
	    direction: 'horizontal',
	    loop: true,
	    parallax : true,
	    // mousewheelControl: true,
	    effect : 'fade',
		fade: {
		  crossFade: false,
		},
	    
	    // 如果需要分页器
	    // pagination: '#artistActivity .swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    // nextButton: '#artistActivity .swiper-button-next',
	    // prevButton: '#artistActivity .swiper-button-prev',
	    
	    // 如果需要滚动条
	    // scrollbar: '.swiper-scrollbar',
	    onSlideChangeEnd: function(swiper){
	    	$('#artistActivity').siblings('#header').find('.navChild').find('a').removeClass();
	    	$('#artistActivity').siblings('#header').find('.navChild').find('li').eq(swiper.activeIndex-1).find('a').addClass('active');
		},
	})

	swiperTab(mySwiper);
}

//tab
function swiperTab(mySwiper){
	$('#artistActivity').siblings('#header').find('.navChild').find('li').each(function(i){
		$(this).on('click', function(){
			$('.navChild li a').removeClass();
			$(this).find('a').addClass('active');
			mySwiper.slideTo(i+1, 800, false);
		})
	}); 
}

//SwiperSec
function swiperSecInit(i){
	var mySwiper2 = new Swiper ('#artistActivity #secSwiper_' + i, {
	    direction: 'vertical',
	    loop: true,
	    parallax : true,
	    mousewheelControl: true,
	 //    effect : 'fade',
		// fade: {
		//   crossFade: false,
		// },
	    
	    // 如果需要分页器
	    pagination: '#artistActivity #secSwiper_'+ i +' .swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    // nextButton: '#artistActivity .swiper-button-next',
	    // prevButton: '#artistActivity .swiper-button-prev',
	    
	    // 如果需要滚动条
	    // scrollbar: '.swiper-scrollbar',
	})
}