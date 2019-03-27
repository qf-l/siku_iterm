<?php
   $username=$_POST['username'];
   echo $username;
   $password=$_POST['password'];
   $code = $_POST['code'];
   $sql="INSERT INTO siku (`username`, `PASSWORD`,`code`) VALUE ('$username','$password','$code')";
   $coon = new Mysqli('localhost', 'root', '', 'biao', 3306);
   $result = $coon -> query($sql);
    if($result) {
        echo "<script>
                alert('恭喜您注册成功');
                location.href = '../login.html';
              </script>";
    } else {
        echo "<script>
                alert('很遗憾, 注册失败!!!马上跳转到到注册页,请重新注册!!');
                location.href = '../register.html';
            </script>";
    }





?>