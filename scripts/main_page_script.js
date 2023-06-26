// SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    loopedSlides: Infinity,
    loopAdditionalSlides: Infinity,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      reachEnd: function () {
        swiper.params.autoplay.reverseDirection = true;
        swiper.autoplay.start();
      },
      reachBeginning: function () {
        swiper.params.autoplay.reverseDirection = false;
        swiper.autoplay.start();
      },
    },
  });