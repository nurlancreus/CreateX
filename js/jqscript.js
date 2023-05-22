$(document).ready(function () {
  if (!$(".main-header").hasClass("bg-white")) {
    $(".navbar-toggler").on("click", function () {
      $(".main-header").addClass("bg-white");
    });
  }
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".main-header").addClass("bg-white");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".main-header").removeClass("bg-white");
      }
    }
  });
});
