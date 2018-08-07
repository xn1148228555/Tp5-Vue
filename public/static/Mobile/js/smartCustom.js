$(document).ready(function () {
    calcGrade(); 
    // 评分滑动
    $(".dragBar").on("mousedown",function(e)
    {
        var $this = $(this);
        var e=e||e.event;
        var maxW = $this.parents(".rangeSection").width()-$this.width()/2;
        var divideList = $this.parents(".rangeSection").width()/40;
        var halfBar = $this.width()/2;
        var disX = e.clientX-this.offsetLeft;
        var left,limitNum;
        document.onmousemove=function(e)
        {
            var e=e||e.event;
            var l=e.clientX-disX;console.log(l);
            if(l<=0){
                left = -halfBar;
                limitNum = 0;
            }else if(l > 0 && l <= divideList){
                left = -halfBar;
                limitNum = 0;
            }else{
                for(var i=0;i<=19;i++){
                    if(l > divideList*(2*i+1) && l <= divideList*(2*i+3)){
                        left = divideList*(2*i+2)-halfBar;
                        limitNum = 5*(i+1);
                    }
                }
            }

            $this.css("left",left);
            $this.parent().css("width",left+halfBar);
            $this.parents(".rangeSection").siblings(".perNum").text(limitNum+"%");

            calcGrade();
            
            if($(".circle-text i").text() >= 100){//判断100%不再滑动
                $(".circle-text i").text(100);
                document.onmousemove=null;
                document.onmouseup=null;
               // return false;
            }
        }
        document.onmouseup=function()
        {
            document.onmousemove=null;
            document.onmouseup=null;
        }
        return false;
    }) 

	//评分点击		
	// $(".rangeSection").on("click",function(event){
 //    	var $this = $(this);
 //        var curPos = event.clientX;
 //        var disX = curPos-$this.offset().left;
 //        var maxW = $this.width()-$this.find(".dragBar").width()/2;
 //        var divideList = $this.width()/40;
 //        var halfBar = $this.find(".dragBar").width()/2;
 //        var left,limitNum;

 //        if(disX > 0 && disX <= divideList){left = -halfBar;limitNum = 0;}
	// 	else{
 //            for(var i=0;i<=19;i++){
 //                if(disX > divideList*(2*i+1) && disX <= divideList*(2*i+3)){
 //                    left = divideList*(2*i+2)-halfBar;
 //                    limitNum = 5*(i+1);
 //                }
 //            }
 //        }

	// 	$this.children(".progressBar").css("width",left+halfBar);
 //        $this.find(".dragBar").css("left",left);
 //        $this.siblings(".perNum").text(limitNum+"%");

 //        calcGrade();  

 //        event.preventDefault();  
 //    });

    //九宫格点击family选择feature
    $(".family-btn").on("click",function(){
        $(".family-list").removeClass("active");
        $(this).parent().addClass("active");
        var left = $(this).parent().position().left;
        $(".family-list").find(".config__feature-list").fadeOut();
        $(".family-list").find(".arrow").hide();
        $(".family-list").css("padding-bottom","0");
        $(this).siblings().fadeIn();
        $(this).siblings(".config__feature-list").css("left",-left);
        $(this).parent().css("padding-bottom","115px");
    });
    /*九宫格单项feature选中效果切换*/
    $(".config__feature-list li").each(function(i){
        var _this = $(this);
        var _des = $(this).parents(".choose-featureBox");
        var _name = _des.find(".feature__name");    //名称
        var _price = _des.find(".feature__price");  //价钱
        var _pic = _des.find(".feature__pic");      //图片
        _this.click(function(){
            _name.text("featurename"+i);
            _price.text("¥18,00");
            _pic.attr("src","images/temp/equip1.png");
        });
    });
});
// 赋值计算
function calcGrade () {
    var perLen = $(".perNum").length;
    var perSum=0;
    for(var i=0;i<perLen;i++){
        var perNum = parseInt($(".perNum").eq(i).text());
        perSum=perSum+perNum;
    }
    $(".circle-text i").text(perSum);
    var circlePro = parseInt(perSum)/100;
    

    if($('.smartCustom-circle').length){
        $('.smartCustom-circle').circleProgress({
            value:circlePro,
            size: 256,
            startAngle: -Math.PI / 4*2,
            emptyFill:"#efefef",
            animation: false,
            thickness: 10,
            fill: {
                color: '#1b54ab'
            }
        });
    } 
}


     


