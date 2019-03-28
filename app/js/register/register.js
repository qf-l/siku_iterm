
function yzm(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    var str = '';
    for(var i = 0 ; i < 4 ; i ++ )
        str += ''+arr[Math.floor(Math.random() * arr.length)];
    return str;
}

var check = {   

    username(val) {
        const reg = /^1[35789]\d{9}$/;
        return reg.test(val);
    },
    password(val) {
        const reg = /^\w{6,25}$/;
        return reg.test(val);
    },
    code(val) {
        const reg = $('#yzm').text();
        if(reg == val){         
          return true;        
        }
        
    },
    message(val) {
        const reg =  /^\d{6}$/;
        return reg.test(val);
    },

}
var checkInput = (function () {
    return {
        init(ele) {
            $form = $(ele);
            $requestInpAll = $('input[required]');
            $password=$('#password');
            $btn = $('.login_btn');
            $guibing = $('.guibing');
            $repassword = $('#repassword');
            this.event();
        },
        event() {
            const self = this;
              for (let i = 0; i < $requestInpAll.length; i++) {               
                $requestInpAll.eq(i).on('blur',function(){
                    self.tips(this);
                })
            }
            $repassword.on('blur', (function () {
                let text = this.value;
                const $p = this.previousElementSibling;
                let use = $password.val();
                if (text == use) {
                    
                    $p.innerHTML = '';
                } else {
                    $p.innerHTML = '两次密码输入不一致,请重新输入';
                    $p.className = 'blur';
                }
            }))

            $('.guibing').click (function() {

                if($('.guibingma').is(':hidden')){
                    $('.guibingma').show();
                    }else{
                    $('.guibingma').hide();
                    }
            })
            
            $btn.click (function () {
                for (let i = 0; i < $requestInpAll.length; i++) {
                    const $input = $requestInpAll.eq(i);
                    const $p = $input.prev();
                    if ( $p.text() != '') {
                        $input.focus();
                        return false;
                    }
                 }
                 let username = $('#username').val();
                 let password = $('#password').val();
                 $.post(apiAllGet.register, {
                     username,
                     password
                 }, function (data) {
                     data = JSON.parse(data);
                     if (data.code != '404') {
                         alert(data.message);
                         location.href = 'login.html';
                     } else {
                         alert(data.message);
                     }
                 })                                          
            })
        }, 
        tips($input) {
            const name = $input.name; 
            const text = $input.value;
            const $p = $input.previousElementSibling;
            if (check[name](text)) { 
                if( name == 'username'){                   
                    $('.kapt_show').addClass("abba");
                    $('.verify_code_show').addClass("abba");
                    $('.tdda').html(yzm());
                }            
                $p.innerHTML = '';                              
            } else if($input.value == ''){
                $p.innerHTML = $p.getAttribute("data_error");
                $p.className = 'blur';
            }else{
                $p.innerHTML = $p.getAttribute("data-error");
                $p.className = 'blur';
            }
        }
            
            
        }
    
}())