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


  // let theme = document.getElementById('them')
  // theme.addEventListener('click', function(){
  //   if(theme.className == "theme-light"){
  //     theme.innerHTML = '<img src="/images/sun_.png">'
  //     theme.setAttribute('class', 'theme-dark')
  //   }else{
  //     theme.innerHTML = '<img src="/images/moon (1).png">'
  //     theme.setAttribute('class', 'theme-light')
  //   }
  // })

function addOrRemoveTheme(){
  const theme = document.getElementById('them')
  if(theme.className == "theme-light"){
    theme.innerHTML = '<img src="/images/sun_.png">'
    theme.setAttribute('class', 'theme-dark')
    document.body.setAttribute('dark', '')
  }else{
    theme.innerHTML = '<img src="/images/moon (1).png">'
    theme.setAttribute('class', 'theme-light')
    document.body.removeAttribute('dark')
  }
}
