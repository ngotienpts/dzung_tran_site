document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // slider filed of activity
  var fieldActivity = document.querySelector('.field-of-activity');

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


      // slider filed of activity
      if(fieldActivity){
        var swipperSlide1 = fieldActivity.querySelectorAll('.swiper-slide');
        var swipperCount = fieldActivity.querySelector('.swiper-work__count');
        swipperSlide1.forEach(function(count){
          console.log(count.matches('.swiper-slide-active'))
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
          768: {
            slidesPerView: 2.5,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
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
    },
  };

  app.start();
});
