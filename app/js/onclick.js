var photo = (function(){
    return{
        init(){
            this.event();
        },
        event(){
            var _this = this;
            var $potho = document.querySelector('.swiper-container');
            $potho.onclick = function(){
                console.log(1);
            }
        }
    }

}())