$(function(){
	$(".interior__group .config__feature-ul").each(function(){
		var _w = $(this).width();
		if(_w > 630){
			$(this).css("margin-left", 0);
			return;
		}else{
			$(this).css("margin-left", (630-_w)/2);
			return;		
		}
	});
	
	var _top = ($(window).height() - 76 - 60 - 330)/2;
	$(".carFlashWrap").css("top", _top);
	$(".config__family-con").css("top", (_top+350));

	/*单项feature选中效果切换*/
	$(".config__feature-ul li").each(function(i){
		var _this = $(this);
		var _parents = _this.parents(".config__family-son");
		var _title = _parents.find(".config__feature-txt");
		var _price = _parents.find(".config__feature-price");
		_this.click(function(){
			_this.addClass("active").siblings().removeClass("active");
			_title.text("featurename"+i);
			_price.text("¥18,00"+i)
		});
	});
	// family切换
	$(".config__family li").each(function(j){
		var _this = $(this);
		_this.click(function(){
			_this.addClass("active").siblings().removeClass("active");
			$(".config__family-item").css("display","none").eq(j).css("display","block");
		});
	});
	// group切换
	$(".config-inner__ul li").each(function(i){
		var _this = $(this);
		_this.click(function(){
			_this.addClass("active").siblings().removeClass("active");
			$(".config__group").css("display","none").eq(i).css("display","block");
			showCarFlash();
		});
		swiperInit(i);	
	});
	// 外观内饰左侧菜单选中
	$(".config__family-ul li").each(function(){
		var _this = $(this);
		_this.click(function(){
			_this.addClass("active").siblings().removeClass("active");
		});
	});
	$(".family__swiper .config__family-son").each(function(){
		var _this = $(this);
		_this.click(function(){
			_this.parents(".family__swiper").find(".config__family-son").removeClass("active");
			_this.addClass("active");			
		});
	});
	$(".family__swiper").each(function(){
		if($(this).find(".swiper-slide").length<4){
			$(this).parent().find(".swiper-button-prev,.swiper-button-next").hide();
		}
	});
});

// 初始化family-item-swiper
function swiperInit(k){
	var familySwiper;
	familySwiper = new Swiper ('.family__swiper'+k, {
		slidesPerView: 3,
		slideToClickedSlide: true
	});       
	$('.family__prev'+k).on('click', function(e){
		e.preventDefault();
		familySwiper.swipePrev();
		if(familySwiper.slides[0].isActive()){
			$(this).addClass("disabled");			
		}
		$(this).siblings(".family__next"+k).removeClass("disabled");
	})
	$('.family__next'+k).on('click', function(e){
		e.preventDefault();
		familySwiper.swipeNext();
		var _length = $(".family__swiper"+k).find(".swiper-slide").length;
		if(familySwiper.slides[_length-3].isActive()){
			$(this).addClass("disabled");			
		}
		$(this).siblings(".family__prev"+k).removeClass("disabled");
	})
}

function showCarFlash(){
	if($(".interior__group").is(':visible')){
		$(".carFlashWrap").css("display","block");
	}else{
		$(".carFlashWrap").css("display","none");
	}
}