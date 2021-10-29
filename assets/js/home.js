document.addEventListener("DOMContentLoaded", () => {
    $(".epoch-nav-tab").click(function (e) {
        $(this)
          .addClass("epoch-nav-tab-active")
          .siblings()
          .removeClass("epoch-nav-tab-active");
        var class1 = $(this).attr("data-id");
        $("." + class1 + "")
          .removeClass("epoch_tab_hide")
          .siblings()
          .addClass("epoch_tab_hide");
      });
    
      // var policy_category_height = document.querySelector(
      //   ".main_policies_category"
      // ).offsetHeight;
      // if (screen.width > 768) {
      //   document.querySelector(".wrap_policy").style.height =
      //     policy_category_height + "px";
      // }
});
$(".testimonial").slick({
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
});
$(".partner_slider").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
$(".awards_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(".knowledge_slider").slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
});
$(".blog_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(".poly_details_main_slider").slick({
  slidesToShow: 7,
  slidesToScroll: 7,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});