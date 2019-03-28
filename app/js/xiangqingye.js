$('.qwe').click(function () {
    $('.qwe').css({ "border": "1px solid Violet" });
    $('.qwer').css({ "border": "0" });
})
$('.qwer').click(function () {
    $('.qwer').css({ "border": "1px solid Violet" });
    $('.qwe').css({ "border": "0" });
})
var $add = document.querySelector('.add');
var $jiaoshao = document.querySelector('.jiaoshao');
var $count = document.querySelector('.count')
var count =1;
$add.onclick = function(){
    count++;
    $count.innerHTML = count;
}
$jiaoshao.onclick =function(){
    if(count == 1){
        $count.innerHTML =count
    }else{
        count--;
        $count.innerHTML = count;
    }
}
    window.onload=function(){
        var $mengban =document.querySelector('.mengban');
        var $tupian = document.querySelector('.tupian');
        var $apple =document.querySelector('.apple');
        var $dabox =document.querySelector('.dabox');
        var $sha = document.querySelector("#close_login");
        var $box =document.querySelector('#mask');
        var $btn = document.querySelector('#youbian_01');
        var $login = document.querySelector('#login');
        var $qwe = document.querySelector('.zuo');
        var $ewq = document.querySelector('.you')

        $btn.onclick = function(){
            $box.style.display = 'block';
            $login.style.display = 'block';
        $sha.onclick =function(){
            $box.style.display = 'none';
            $login.style.display = 'none';
        }
        $qwe.onclick = function(){
            location.href = "http://localhost:7777/checking.html";
        }
        $ewq.onclick = function(){
            location.href = "http://localhost:7777/headpage1.html";
        }
      }
    };
    class Glass {
        constructor(ele) {
          this.$ele = ele;
          if (typeof ele === 'string') {
            this.$ele = document.querySelector(ele);
          }
          // 展示图片的盒子
          this.$showImageBox = this.$ele.querySelector('.show-image');
          // 展示的图片
          this.$showImage = this.$showImageBox.querySelector('img');
          // 过滤器
          this.$filter = this.$showImageBox.querySelector('.filter');
          // 展示大图的盒子
          this.$showBigImageBox = this.$ele.querySelector('.show-big-image');
          // 展示的大图片
          this.$showBigImage = this.$showBigImageBox.children[0];
          // 获取展示小图片盒子
          this.$smallImageBox = this.$ele.querySelector('.img-box');
          // 获取所有小图片
          this.$smallImage = this.$smallImageBox.children;
          this.addIndex();
          this.event()
        }
        event() {
          const self = this;
          this.$showImageBox.onmouseenter = function (e) {
            self.$filter.style.display = 'block';
            self.$showBigImageBox.style.display = 'block';
            // 获取鼠标位置
          }
          this.$showImageBox.onmousemove = function (e) {
            e = e || window.event;
            // debugger
            let X = e.pageX - self.$filter.offsetWidth / 2 - self.$showImageBox.offsetLeft;
            let Y = e.pageY - self.$filter.offsetHeight / 2 - self.$showImageBox.offsetTop;
            console.log(self.$showImageBox.offsetTop)
            console.log(e.pageY)

            let maxX = self.$showImageBox.clientWidth - self.$filter.offsetWidth,
              maxY = self.$showImageBox.clientHeight - self.$filter.offsetHeight;
            // 判断合法性
            if (X < 0) {
              X = 0;
            } else if (X > maxX) {
              X = maxX;
            }
            if (Y < 0) {
              Y = 0
            } else if (Y > maxY) {
              Y = maxY;
            }
            self.$filter.style.left = X + 'px';
            self.$filter.style.top = Y + 'px';
            self.$showBigImage.style.left = -3 * X + 'px';
            self.$showBigImage.style.top = -3 * Y + 'px';
  
          }
          this.$showImageBox.onmouseleave = function () {
            self.$filter.style.display = 'none';
            self.$showBigImageBox.style.display = 'none';
          }
          this.$smallImageBox.onclick = function (e) {
            // console.log(e.target.nodeName); 
            if (e.target.nodeName == 'IMG') {
              self.showImage(e.target.parentNode.index);
            }
          }
        }
        addIndex() {
          // console.log(this.$smallImage);
          for (let i = 0; i < this.$smallImage.length; i++) {
            this.$smallImage[i].index = i;
          }
        }
        showImage(index) {
          console.log(index);
          for (let i = 0; i < this.$smallImage.length; i++) {
            this.$smallImage[i].classList.remove('active');
          }
          const $li = this.$smallImage[index];
          $li.classList.add('active');
          // 获取小图片的地址
          let src = $li.children[0].getAttribute('src');
          this.$showImage.src = src.replace('small', 'big');
          this.$showBigImage.src = src.replace('small', 'largest');
        }
      }
  
      var glass = new Glass('.box');
      console.log(glass);