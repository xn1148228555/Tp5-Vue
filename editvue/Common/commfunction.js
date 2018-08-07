/***
* vue调取视图
*/
function vueView(name) {
	 return function (resolve, reject) {
		 require(['views/'+name], function (comp) {
			 resolve(comp)
		 })
	 }
} 
/***
* vue调取组件
*/
function vueComponent(name) {
	 return function (resolve, reject) {
		 require(['components/'+name], function (comp) {

			 resolve(comp)
		 })
	 }
} 
