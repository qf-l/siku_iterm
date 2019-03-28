<?php
   $username = $_POST['username'];
   $password = $_POST['password'];
   $sqlName = "select * from siku where username='$username'";
   $sql="INSERT INTO siku (`username`, `PASSWORD`) VALUE ('$username','$password')";
   $coon = new Mysqli('localhost', 'root', '', 'biao', 3306);
   $resultName = $coon -> query($sqlName);
  
   if($resultName->fetch_object()){
    $arr = array('code' => '404','message' => '用户名已存在，请重新注册！');
    }else{
       $result = $coon -> query($sql);

    if($result) {
        $arr = array('code' => '200','message' => '恭喜您注册成功');
        
    }else {
        $arr = array('code' => '500','message' => '注册失败，请重新注册！');        
    }
  }
   echo json_encode($arr);
  
?>