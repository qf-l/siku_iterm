$('.login_ewm_title>li').click(function () {
   if (!$('this').hasClass('on')) {
      $(this).addClass('on').siblings().removeClass('on');
      $('.ban').eq($(this).index()).addClass('hua').siblings().removeClass('hua');
      if($('.qqq').hasClass('on')){
         $('.loo').hide();
      }
   }
})

function yzm(){
   var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
   var str = '';
   for(var i = 0 ; i < 4 ; i ++ )
       str += ''+arr[Math.floor(Math.random() * arr.length)];
   return str;
}
// 聚焦和失去焦点
$('.nthb').click(function(){
   $('.picUser').addClass("picUserClick");
})
$('.nthb').on('blur',function(){
   if($('.nthb').val() == ''){
      $('.picUser').removeClass("picUserClick");
   } 
}) 
$('.nthp').click(function(){
   $('.picPassWord').addClass("picUserClick");
   $('.kapt_show').addClass("yyy");
   $('.tdda').html(yzm());

})
$('.nthp').on('blur',function(){
   if($('.nthp').val() == ''){
      $('.picPassWord').removeClass("picUserClick");
   }   
})
// 给登陆按钮加点击事件
$('#loginButton').click(function(){
   let username = $('#userName').val();
   let password = $('.nthp').val();
   $.post(apiAllGet.login,{
      username,
      password
   }, function(data){
       data = JSON.parse(data);
       if(data.code != '404'){
           location.href = 'headlogin.html';
       }else{
           alert(data.message);
       }
       
   })
})





