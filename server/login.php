<?php
 header('Access-Control-Allow-Origin:*');
    include('connet_db.php');
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "select * from siku where username='$username' and password='$password'";
    $db = new DB();
    $result = $db -> fetch($sql, "object");
    if($result) {        
            $arr = array('code' => '200','id' => $result->id,'username' => $result->username);

        }else {
            $arr = array('code' => '404','message' => '登录失败，用户名或密码错误');
        }
         echo json_encode($arr);


?>