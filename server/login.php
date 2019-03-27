<?php
    include('connet_db.php');
    // 获取传递的信息
    $username = $_POST['username'];
    $password = $_POST['password'];
    // $code = $_POST['code'];
    $sql = "select * from siku where username='$username' and password='$password'";
    // var_dump($sql);
    $db = new DB();
    $result = $db -> fetch($sql, "object");
    // var_dump($result);
    if($result) {
        echo "
            <script>
               // 把用户id存储到cookie中
                document.cookie = 'id=$result->id; path=/';
                alert('登录成功, 正在跳转');
                location.href = 'https://passport.secoo.com/';
            </script>";
    } else {
        echo "<script>  
                alert('登录失败, 用户名称或者密码输入错误');
                location.href = '../login.html';
              </script>";
    }


?>