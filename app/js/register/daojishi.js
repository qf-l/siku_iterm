$('.btnStyle01').click(function() {
    let count = 60;
    const countDown = setInterval(() => {
      if (count === 0) {
       $('.btnStyle01').text('重新发送').removeAttr('disabled');
       $('.btnStyle01').css({
        background: '#ff9400',
        color: '#fff',
       });
       clearInterval(countDown);
      } else {
       $('.btnStyle01').attr('disabled', true);
       $('.btnStyle01').css({
        background: '#d8d8d8',
        color: '#707070',
       });
       $('.btnStyle01').text(count + '秒后可重新获取');
      }
      count--;
     }, 1000);
    
  });