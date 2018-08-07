<?php
namespace app\index\controller;
use think\Controller;
use \think\Request;
class Index extends Common
{
    public $title='Yappam';

    public  function index()
    {
        $this->assign('title',$this->title);
        if($this->isMobile()) {
            return $this->fetch('Mobile/home');
        }else{
            return $this->fetch('PC/home');
        }
    }

    public function getResponseType()
    {
        $data = array();
        $data = array('msg'=>true,'data'=>'balabalbalabalabalabala!');
        return json($data);
    }
}