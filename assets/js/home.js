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
    
      var policy_category_height = document.querySelector(
        ".main_policies_category"
      ).offsetHeight;
      if (screen.width > 768) {
        document.querySelector(".wrap_policy").style.height =
          policy_category_height + "px";
      }
});