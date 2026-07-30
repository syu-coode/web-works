$(function () {

  $("#hamburger").on("click", function () {
    $(this).toggleClass("is-open");
    $(".header-nav").toggleClass("is-open");
    $("body").toggleClass("is-fixed");
  });

  $(".header-nav a").on("click", function () {
    $("#hamburger").removeClass("is-open");
    $(".header-nav").removeClass("is-open");
    $("body").removeClass("is-fixed");
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $("#header").addClass("is-scroll");
    } else {
      $("#header").removeClass("is-scroll");
    }
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    const $target = target === "#" ? $("html") : $(target);
    if ($target.length) {
      const headerHeight = $("#header").outerHeight() || 0;
      $("html, body").animate({
          scrollTop: $target.offset().top - headerHeight,
        },
        500
      );
    }
  });

  $(".skills-item-ttl").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next(".skills-item-detail").stop().slideToggle(300);
  });

  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    speed: 800,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
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

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#page-top").addClass("is-active");
    } else {
      $("#page-top").removeClass("is-active");
    }
  });

  $("#page-top a").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: 0,
      },
      500
    );
  });

  function fadeAnime() {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    $(".fade").each(function () {
      if ($(this).hasClass("fade-up")) return;

      const elemPos = $(this).offset().top;

      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass("fade-up");
      }
    });
  }
  $(window).on("load scroll", fadeAnime);

  $(".fv-slider").slick({
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
  });

});