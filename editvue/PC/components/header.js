/**
* 公共头部导航
*/
define(function(require){
    var Vue = require("vue");
	var html = require("text!components/header_tmpl.html");
    return Vue.extend({
		template:html,
		data:function(){
            return {

            }
		},
		mounted: function(){
		},
        methods:{

		}
	});
});
 