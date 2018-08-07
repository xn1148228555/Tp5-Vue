/**
 * 最外层vue
 */
define(['vue'],function (Vue) {
    var headerComponent = vueComponent("header");
    //全局注册组件
	Vue.component('header-component',headerComponent)
    return {
	  created: function(){
	  	
	  },
	  data: function(){
			return {

			}
	  },
		 methods:{

		}
	}
}); 