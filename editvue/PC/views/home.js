/**
* 互动模式
*/
define(function(require){
    var Vue = require("vue");
    var dataApi = require("dataApi");
    var html = require("text!views/home_tmpl.html");
    return Vue.extend({
        template:html,
        data:function(){
            
        },
        methods:{
            nextbutton:function () {
                this.$router.push({ name: 'demo'});
            }
        },
        activated:function(){//开启了缓存走这里

        },
        mounted: function(){
            
        }
    });
});
