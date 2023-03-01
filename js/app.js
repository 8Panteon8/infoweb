document.addEventListener("DOMContentLoaded", () => {
  $(".logo-litera").each(function () {
    const ths = $(this);

    ths.html(ths.html().replace("O", "<span>O</span>"));
  });
  $(".search").click(function () {
    $(".seach-field").stop().slideToggle();
    $(".seach-field input[type=text]").focus();
  });

  $(document)
    .keyup(function (e) {
      if (e.keyCode == 27) {
        $(".seach-field").slideUp();
      }
    })
    .click(function () {
      $(".seach-field").slideUp();
    });
  $(".search-wrap").click(function (e) {
    e.stopPropagation();
  });

  $(".top-line").after('<div class="mobile-menu d-lg-none">');
  $(".top-menu").clone().appendTo(".mobile-menu");
  $(".mobile-menu-button").click(function () {
    $(".mobile-menu").stop().slideToggle();
  });

  $(".col-item").hover(
    function () {
      const ths = $(this);
      const lnk = ths.closest(".col-item").find("h4 a");
      lnk.addClass("hover");
    },
    function () {
      const ths = $(this);
      const lnk = ths.closest(".col-item").find("h4 a");
      lnk.removeClass("hover");
    }
  );

  $("body").prognroll({
    height: 3,
    color: "#ec1c1c",
    custom: false,
  });

  $(".main-menu li").removeClass("active");
  var path = window.location.pathname;
  $(".main-menu li a").each(function () {
    var href = $(this).attr("href");
    if (path.slice(1).substring(0, href.length) === href) {
      $(this).parent("li").addClass("active");
    }
  });
});
