//📌submenu
$(function () {
  var header_depth = $("#gnb > li"),
    header = $("#header")

  header_depth.mouseenter(function () {
    header.stop().animate({ height: "420px" });
  }).mouseleave(function () {
    header.stop().animate({ height: "100px" });
  })
});//submenu-End



//📌notice_swiper
$(function () {

  var notice_swiper = new Swiper(".notice_swiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '&nbsp;&nbsp;/&nbsp;' +
          '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});//notice_swiper-End



//📌pick
$(function () {

  $(".pick dl dt").click(function () {
    $(".pick dl").removeClass("on");
    $(this).parent().addClass("on");
  });

});//pick-End



//📌new_swiper
$(function () {

  //Mainswiper
  var new_Mainswiper = new Swiper(".new_swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '&nbsp;&nbsp;l&nbsp;&nbsp;' +
          '<span class="' + totalClass + '"></span>';
      },
    },
  });

  //Subswiper
  var new_Subswiper = new Swiper(".new_detail_swiper", {
    touchRatio: 0,
    loop: true,
  });

  //puase_play_btn
  var puaseButton = document.getElementById("new_swiper_pause")
  puaseButton.addEventListener("click", (event) => {
    $("#new_swiper_play").show();
    $("#new_swiper_pause").hide();
    new_Mainswiper.autoplay.pause();
  });

  var playButton = document.getElementById("new_swiper_play")
  playButton.addEventListener("click", (event) => {
    $("#new_swiper_play").hide();
    $("#new_swiper_pause").show();
    new_Mainswiper.autoplay.resume();
  });

  //connect_main-sub
  new_Mainswiper.on('slideChange', function () {
    idx = new_Mainswiper.realIndex;
    new_Subswiper.slideToLoop(idx);
  });

});//new_swiper-End



//📌shop_swiper
$(function () {

  var shop_swiper = new Swiper(".shop_swiper", {
    slidesPerView: "3",
    spaceBetween: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      snapOnRelease: true,
      dragSize: 200,
    },
  });

});//shop_swiper-End



//📌shop_subscribe_swiper
$(function () {

  //Mainswiper
  var subs_Mainswiper = new Swiper(".shop_subscribe_swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Subswiper
  var subs_SubSwiper = new Swiper(".subscribe_pagswiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //connect_main-sub
  subs_Mainswiper.controller.control = subs_SubSwiper;
  subs_SubSwiper.controller.control = subs_Mainswiper;
});//shop_subscribe_swiper-End



//📌event_swiper
$(function () {

  //able_progressbar_in_autoplay
  const progressLine = document.querySelector('.autoplay-progress svg')

  //swiper
  const event_swiper = new Swiper(".event_swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '   ' +
          '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressLine.style.setProperty("--progress", 1 - progress)
      }
    }
  });

});//event_swiper-End



//📌bookclub
$(function () {

  $(".book").on("click", function () {
    $(this).children(".detail").fadeToggle();
  });

});//bookclub-End



//📌bookclub_scroll
$(function () {

});



//📌hobby_tab
$(function () {

  //tab
  $(".tab_content").hide();
  $(".tabs").children().eq(0).addClass("active").show();
  $(".tab_content:first").show();

  //tab-On Click Event
  $(".tabs").children().click(function () {

    $(".tabs").children().removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();

    var activeTab = $(this).find("span").attr("data");
    //Find the href attribute value to identify the active tab + content
    /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
    .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
    $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
  });

});//hobby_tab-End



//📌hobby_swiper
$(function () {

  //left_Subswiper
  var hobby_left_Subswiper = new Swiper(".hobby_left_swiper", {
    slidesPerView: "2",
    spaceBetween: 40,
    loop: true,
    touchRatio: 0,
  });

  //Mainswiper
  var hobby_Mainswiper = new Swiper(".hobby_swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //middle_Subswiper
  var hobby_middle_Subswiper = new Swiper(".hobby_detail_swiper", {
    loop: true,
    touchRatio: 0,
  });

  //right_Subswiper
  var hobby_right_Subswiper = new Swiper(".hobby_right_swiper", {
    slidesPerView: "2",
    spaceBetween: 40,
    loop: true,
    touchRatio: 0,
  });

  hobby_Mainswiper.on('slideChange', function () {
    idx = hobby_Mainswiper.realIndex;
    hobby_middle_Subswiper.slideToLoop(idx);
    hobby_left_Subswiper.slideToLoop(idx);
    hobby_right_Subswiper.slideToLoop(idx);
  });

}); //hobby_swiper-End

//📌hobby_swiper2
$(function () {

  //left_Subswiper
  var hobby_left_Subswiper2 = new Swiper(".hobby_left_swiper2", {
    slidesPerView: "2",
    spaceBetween: 40,
    loop: true,
    touchRatio: 0,
  });

  //Mainswiper
  var hobby_Mainswiper2 = new Swiper(".hobby_swiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //middle_Subswiper
  var hobby_middle_Subswiper2 = new Swiper(".hobby_detail_swiper2", {
    loop: true,
    touchRatio: 0,
  });

  //right_Subswiper
  var hobby_right_Subswiper2 = new Swiper(".hobby_right_swiper2", {
    slidesPerView: "2",
    spaceBetween: 40,
    loop: true,
    touchRatio: 0,
  });

  hobby_Mainswiper2.on('slideChange', function () {
    idx = hobby_Mainswiper2.realIndex;
    hobby_middle_Subswiper2.slideToLoop(idx);
    hobby_left_Subswiper2.slideToLoop(idx);
    hobby_right_Subswiper2.slideToLoop(idx);
  });

}); //hobby_swiper-End



//📌top_btn
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);//움직이는 시간 조정
        return false;
      }
    }
  });
});