/**
 * 统一所有路由
 */
define(function () {  
    return [
			  { path: '/home', component: vueView('home'),name:"home" },//配置对比页面
			  { path: '/mdemo', component: vueView('mdemo'),name:"mdemo" },//配置对比页面
		] 
}); 
