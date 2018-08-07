/**
* 互动模式
*/
define(function(require){
    var Vue = require("vue");
    var dataApi = require("dataApi");
    var html = require("text!views/mdemo_tmpl.html");
    return Vue.extend({
        template:html,
        data:function(){
            
        },
        methods:{
           
        },
        activated:function(){//开启了缓存走这里
           console.log('手机端测试');
        },
        mounted: function(){
            
        }
    });
});
