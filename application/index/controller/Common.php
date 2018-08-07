<?php
namespace app\index\controller;
use think\Controller;
use \think\Request;

/**
 * Class Common 公共控制器
 * @package app\index\controller
 */
class Common extends Controller
{
    /*
** 当前是否为移动端
 *
** 2018-03-12
*/
    public function isMobile(){
        return strpos($_SERVER["HTTP_USER_AGENT"],'Mobile')?true:false;
    }
}