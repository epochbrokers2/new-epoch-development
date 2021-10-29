document.addEventListener("DOMContentLoaded", () => {
  //Navbar js
  !(function (e) {
    e.fn.menumaker = function (n) {
      var s = e(this),
        i = e.extend({ format: "dropdown", sticky: !1 }, n);
      return this.each(function () {
        return (
          s.find("li ul").parent().addClass("has-sub"),
          (multiTg = function () {
            s.find(".has-sub").prepend('<span class="submenu-button"></span>'),
              s.find(".submenu-button").on("click", function () {
                e(this).toggleClass("submenu-opened"),
                  (e(this).siblings("ul").hasClass("open")
                    ? e(this).siblings("ul").removeClass("open")
                    : e(this).siblings("ul").addClass("open")
                  ).slideToggle();
              });
          }),
          "multitoggle" === i.format ? multiTg() : s.addClass("dropdown"),
          !0 === i.sticky && s.css("position", "fixed"),
          (resizeFix = function () {
            1e3 < e(window).width() && s.find("ul").show(),
              e(window).width() <= 1e3 &&
                s.find("ul").hide().removeClass("open");
          }),
          resizeFix(),
          e(window).on("resize", resizeFix)
        );
      });
    };
  })(jQuery),
    (function (n) {
      n(document).ready(function () {
        n("#cssmenu").menumaker({ format: "multitoggle" });
      });
    })(jQuery);
  // Footer js
  $(document).on("click", ".showmore_list", function () {
    var s = $(this).children();
    console.log(s),
      $(this).hasClass("extraHidden")
        ? ($(this).removeClass("extraHidden").addClass("extraVisible"),
          $(this).find("a").html("Show less"),
          $(this).prevAll("li.read-more-target").css("display", "block"))
        : ($(this).removeClass("extraVisible").addClass("extraHidden"),
          $(this).find("a").html("Show more"),
          $(this).prevAll("li.read-more-target").css("display", "none"));
  });
  //Lazy loading js
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let t = new IntersectionObserver(function (e, r) {
      e.forEach(function (r) {
        if (r.isIntersecting) {
          let e = r.target;
          (e.src = e.dataset.src), e.classList.remove("lazy"), t.unobserve(e);
        }
      });
    });
    lazyImages.forEach(function (e) {
      t.observe(e);
    });
  }
  //Navbar toggle js
  function classToggle() {
    const e = document.querySelector(".navbar nav"),
      o = document.querySelector("#navbar-toggle");
    e.classList.toggle("navbar__ToggleShow"), o.classList.toggle("hamburger");
  }
  document
    .querySelector(".navbar__Link-toggle")
    .addEventListener("click", classToggle);
});
