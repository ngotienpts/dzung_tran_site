document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // header
  var header = document.querySelector('#header');

  // submenu
  var subMenu = document.querySelector('.sub-menu-wrapper');

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // 
      if(header){
        var extendsMenu = header.querySelectorAll('.header-extend-icon');
        extendsMenu.forEach(function(a){
          if(subMenu){
            subMenu.style.top = header.clientHeight + 'px';
            a.onclick = function(){
              subMenu.classList.toggle('open');
            }
          }
        })
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // slider linh vuc hoat dong
    sliderFiledActivity: function(){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 5,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        },
      });
    },
    // slider cty thanh vien
    sliderCompany: function(){
      var swiper2 = new Swiper(".mySwiperCompa", {
        slidesPerView: 2,
        spaceBetween: 60,
        slidesPerGroup: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        hideOnClick:true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 98,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slider linh vuc hoat dong
      this.sliderFiledActivity();
      // slider cty thanh vien
      this.sliderCompany();
    },
  };

  app.start();
});
