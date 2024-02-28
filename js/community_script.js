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

//📌bookclub_tab
$(function () {

    $(".tab_content").hide();
    $(".tabs").children().eq(0).addClass("active").show();
    $(".tab_content:first").show();

    $(".tabs").children().click(function () {
        $(".tabs").children().removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("span").attr("href");

        $(activeTab).fadeIn();
        return false;
    });

});

//📌forum_tab
$(function () {

    $(".tab_content1").hide();
    $(".tabs1").children().eq(0).addClass("active").show();
    $(".tab_content1:first").show();

    $(".tabs1").children().click(function () {
        $(".tabs1").children().removeClass("active");
        $(this).addClass("active");
        $(".tab_content1").hide();

        var activeTab = $(this).find("span").attr("href");

        $(activeTab).fadeIn();
        return false;
    });

});

//📌book_report_tab
$(function () {

    $(".tab_content2").hide();
    $(".tabs2").children().eq(0).addClass("active").show();
    $(".tab_content2:first").show();

    //On Click Event
    $(".tabs2").children().click(function () {

        $(".tabs2").children().removeClass("active");
        $(this).addClass("active");
        $(".tab_content2").hide();

        var activeTab = $(this).find("span").attr("href");

        $(activeTab).fadeIn();
        return false;
    });

});

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