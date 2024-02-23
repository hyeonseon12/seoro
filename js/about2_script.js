//📌submenu
$(function () {

    var header_depth = $("#gnb > li"),
        header = $("#header")

    header_depth.mouseenter(function () {
        header.stop().animate({ height: "420px" });
        header.css("box-shadow", "0 5px 5px rgba(0, 0, 0, 0.5)");
    }).mouseleave(function () {
        header.stop().animate({ height: "100px" });
        header.css("box-shadow", "none");
    })

});//submenu-End

//📌store_tab
$(function () {

    $(".tab_content").hide();
    $(".tabs").children().eq(0).addClass("active").show();
    $(".tab_content:first").show();

    //On Click Event
    $(".tabs").children().click(function () {

        $(".tabs").children().removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("span").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

});//store_tab-End

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

