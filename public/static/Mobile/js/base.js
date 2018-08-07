$(function(){
	$(".carFlash").height($(window).height()-220);//3D部分高度
	$(".menu-list").height($(window).height()-70);//头部菜单列表高度
	var $contH = $(window).height()-$(".header").height()-$(".footer").height();
	$(".public-parts").height($contH);//内容部分高度
	$(".interact__question").height($contH-80);//互动问答高度
	var $parameterWrapH = $(window).height()-172;
	$(".allParameter__cont").css("height",$parameterWrapH);//参数配置高度

	// 头部菜单
	$(".sidebar-icon").on("click",function(){
		if($('.menu-list').css("display") == "none"){
			$(".menu-list").show();
			$(this).hide();
		}else{
			$(".menu-list").hide();
			$(this).show();
		}
	});
	$(".close_menu").on("click",function(){
		$(".menu-list").hide();
		$(".sidebar-icon").show();
	})

	/*feature列表宽度*/
	$(".config__feature-ul").each(function(){
		var _this = $(this);
		_this .width(_this.find("li").outerWidth(true) * _this.find("li").length);
	});

	// 初始化滚动条
	$(".resetScrollbar__row").mCustomScrollbar({
		scrollEasing:"easeOutBack",
		autoDraggerLength:false,
		axis:"x"
	});
	$(".resetScrollbar").mCustomScrollbar({
		scrollEasing:"easeOutBack",
		autoDraggerLength:false,
		axis:"y"
	});

	//参数列表展开收起
	$(".parameter-title").on("click",function(){
		if($(this).find(".foldIcon").hasClass("unfoldIcon")){
			$(this).find(".foldIcon").removeClass("unfoldIcon");
			$(this).siblings("ul, table").hide();
		}else{
			$(this).find(".foldIcon").addClass("unfoldIcon");
			$(this).siblings("ul, table").show();
		}
	});

	// 单选按钮
	$(".radio-label").on("click",function(){
		if(!$(this).hasClass("non-optional")){
			$(this).find(".radioIcon").addClass("checked");
			$(this).siblings().find(".radioIcon").removeClass("checked");
		}else{
			return;
		}
	});

	//复选框
	$(".check-label").on("click",function(){
		var _radio = $(this).find(".checkIcon");
		if(_radio.hasClass("checked")){
			_radio.removeClass("checked");
		}else{
			_radio.addClass("checked");
		}
	});

	// 对比页面滚动
	if($(".compareInner").length){
		var topMain = $(".compareInner").offset().top;//153
	}
	$(window).on("scroll",function()
	{
		if($(window).scrollTop()>153){
			$(".compareInner").addClass("nav_compare");
			//$(".tabPlace").show();
		}else{
			$(".compareInner").removeClass("nav_compare");
			//$(".tabPlace").hide();
		};
	});

	//继续
	$(".goBtn").on("click",function(){
		if($(".configCar-parts").css("display") == "block"){//选配页-确认配置页
			$(".configCar-parts").fadeOut();
			$(".confirmConfig-parts").fadeIn();
			$(".footer__list,.footer__line").hide();
			$(this).html("下单");
			var $left = ($(window).width()-1180)/2;
			$(".carFlashWrap").show().css({"width":"550px","height":"308px","left":$left,"top":"50%","transform":"translateY(-50%)","-webkit-transform":"translateY(-50%)","-moz-transform":"translateY(-50%)","-ms-transform":"translateY(-50%)"});
		}
	});
	$(".look-same-car").on("click",function(){//确认配置页-列表页
		$(".confirmConfig-parts").fadeOut();
		$(".carFlashWrap").hide();
		$(".current-parts").fadeIn();
		$(".footer__total,.footer__save,.goBtn").hide();
		$(".footer__compare").show().css("margin-right","6%");
		$(".footer__line,.footer__list").hide();
	});
	$(".toCarDetails").on("click",function(){//列表页-详情页
		$(".current-parts").fadeOut();
		$(".carDetails-parts").fadeIn();
		$(".footer__save,.footer__total,.goBtn").show();
		$(".footer__compare").hide().css("margin-right","20px");
	});
	$(".footer__compare").on("click",function(){//列表页-对比页
		$(".current-parts").fadeOut();
		$(".compare-parts").fadeIn();
		$(".footer").hide();
		$("html,body,.container").css({"height":"auto","overflow":"visible"});
	});
	//返回
	$(".backBtn").on("click",function(){
		if($(".carDetails-parts").css("display") == "block"){//详情页-列表页
			$(".carDetails-parts").fadeOut();
			$(".current-parts").fadeIn();
			$(".footer__save,.footer__total,.goBtn").hide();
			$(".footer__compare").show().css("margin-right","6%");
		}else if($(".current-parts").css("display") == "block"){//列表页-确认配置页
			$(".current-parts").fadeOut();
			$(".confirmConfig-parts").fadeIn();
			$(".footer__save,.footer__total,.goBtn").show();
			$(".footer__compare").hide().css("margin-right","20px");
			var $left = ($(window).width()-1180)/2;
			$(".carFlashWrap").show().css({"width":"550px","height":"308px","left":$left,"top":"50%","transform":"translateY(-50%)","-webkit-transform":"translateY(-50%)","-moz-transform":"translateY(-50%)","-ms-transform":"translateY(-50%)","-o-transform":"translateY(-50%)"});
		}else if($(".confirmConfig-parts").css("display") == "block"){//确认配置页-选配页
			$(".confirmConfig-parts").fadeOut();
			$(".configCar-parts").fadeIn();
			$(".footer__list,.footer__line").show();
			$(".goBtn").html("继续&gt;");
			var _top = ($(window).height() - 76 - 60 - 330)/2;
			$(".carFlashWrap").hide();
		}else if($(".configCar-parts").css("display") == "block"){//选配页-首页
			window.location.href = "index.html";
		}
		return false;
	});
   	$(".compare__back").on("click",function(){
   		$(".compare-parts").fadeOut();
   		$(".current-parts").fadeIn();
   		$(".footer,.backBtn,.footer__compare").show();
   	})

})


/*
**dialog 弹窗类名
**isShow 弹窗是显示还是隐藏
**isAnimate 弹框是否从左侧出来
*/
function dialog(dialog,isShow,isAnimate){
	if(!isShow){
		if(isAnimate){
			$("."+dialog).animate({left:"0"},500);
		}else{
			$("#overlay, ."+dialog).fadeIn();
			$(".footer__list").addClass("active");
		}
	}else{
		if(isAnimate){
			$("."+dialog).animate({left:"-100%"},500);
		}else{
			$("#overlay, ."+dialog).fadeOut();
			$(".footer__list").removeClass("active");
		}
	}
}

/*列表页选中*/
function chooseItem(cla){
	$(".list__con-item").removeClass("active");
	$(cla).addClass("active");
}
// 加入对比
function addCompare(cla){
	var _footerNum = $(".footer__compare .com__num")
	var _num = parseInt(_footerNum.text());
	if(!$(cla).hasClass("active")){
		$(cla).addClass("active");
		$(".footer__compare").addClass("footer__compare2");
		_footerNum.text(_num+1);
	}else{
		$(cla).removeClass("active");
		if(parseInt(_num)<=1){
			$(".footer__compare").removeClass("footer__compare2");
			_footerNum.text(0);
		}else{
			_footerNum.text(_num-1);
		}
	}
}


