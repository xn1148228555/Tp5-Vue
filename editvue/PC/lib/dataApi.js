/**
 * 
 */
define(function () {  
    return {  
		
        //现车销售模式：获取现车销售列表
        findInventories:function (city,featureCodes,maxPrice,minPrice,pageIndex,pageSize,cb) {
            this.http_get("/index.php/Home/Index/findInventories.html?city="+city+'&featureCodes='+featureCodes+'&maxPrice='+maxPrice+'&minPrice='+minPrice+'&pageIndex='+pageIndex+'&pageSize='+pageSize,cb);
        },
        
        http_get:function (url,callback) {

            $("#overlayWihte").show();//不让点击其他项
            $.ajax({
                url:rootPath+url,
                timeout : 20000, //超时时间设置，单位毫秒
                dataType:'json',
                beforeSend:function(){
                },
                success:function(rs){

                    callback(rs);
                },
                complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
                    $("#overlayWihte").hide()
                    if(status=='timeout'){//超时,status还有success,error等值的情况
                        window.route.push('/errorpage');
                    }
                }


            })
        },
    }  
}); 
