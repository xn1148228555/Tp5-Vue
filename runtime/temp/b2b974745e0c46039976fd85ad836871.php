<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:60:"D:\www\Tp5-Vue\public/../application/index\view\PC\home.html";i:1532665817;s:40:"../application/index/view/PC/header.html";i:1532664461;s:38:"../application/index/view/PC/foot.html";i:1532576991;}*/ ?>
<!--<script src="../../../../../G10/Public/Pc/lib/allRoutes.js">-->
<!--</script>-->
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <title><?php echo $title; ?></title>
    <script src="<?php echo config('STATIC_RESOURCE'); ?>editvue/Common/commfunction.js"></script>





    <script type="text/javascript">

        var _requireJsPath_  =    "<?php echo config('STATIC_RESOURCE'); ?>editvue/PC";

    </script>




    <script src="<?php echo config('STATIC_RESOURCE'); ?>editvue/Common/require.js"></script>
    <script src="<?php echo config('STATIC_RESOURCE'); ?>editvue/Common/config.js"></script>
</head>
<body>
<div class="" id="projectApp">
    <!--header-start-->
    <header-component></header-component>
    <!--header-end-->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

</div>
<script>
    var projectApp;
    var CurrentFileName = 'home';//当前文件名称,不含后缀
    require(['vue','vueRouter','allRoutes','projectAppVue','text'],function(Vue,VueRouter,allRoutes,projectAppVue,text){
        //必须
        Vue.use(VueRouter);
        allRoutes.push( {path: '/', redirect: CurrentFileName});//首页入口
        var router = new VueRouter({
            routes: allRoutes //
        })
        projectAppVue['router'] =router;
        window.route = router;
        projectApp = new Vue(projectAppVue).$mount('#projectApp');
    });
</script>



















</body>
</html>
