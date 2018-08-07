/**
 * 统一所有路由
 */
define(function () {  
    return [
			  { path: '/home', component: vueView('home'),name:"home" },//配置对比页面
              { path: '/demo', component: vueView('demo'),name:"demo" },//测试页面
		] 
}); 
