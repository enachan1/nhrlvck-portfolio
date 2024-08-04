const swiper = () => {
  const swiper_container = document.querySelector(".swipers");
  const btns = document.querySelectorAll(".preview__btn");
  const swipe_wrap = document.querySelector(".swiper-wrapper");
  const window_url = window.location.pathname.startsWith('/nhrlvck-portfolio') ? '/nhrlvck-portfolio' : '';
  let isOpen = false;
  let imageArray = [];
  const fadeSelector = document.querySelector(".fade-show");
  const closeBtn = document.querySelector(".xbtn");

  const start_swiper = () => {
    new Swiper('.swiper', {

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      hideOnClick: {
        el: '.xbtn'
      }
    });
  }


  const closeSlides = () => {
    isOpen = !isOpen
    if (isOpen === false) {
      imageArray = []
      swiper_container.style.display = 'none'
      fadeSelector.classList.toggle("swipers__anim__show")
      swipe_wrap.innerHTML = ''
    }
  }

  //events

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      isOpen = !isOpen

      if (isOpen) {
        imageArray = JSON.parse(btn.getAttribute('data-images'))
        swiper_container.style.display = 'flex'
        fadeSelector.classList.toggle("swipers__anim__show")

        for (let i = 0; i < imageArray.length; i++) {
          swipe_wrap.innerHTML += `<div class="swiper-slide">
          <img src="${window_url}${imageArray[i]}" alt="${imageArray[i]}" srcset="" loading="lazy">
          <div class="swiper-lazy-preloader"></div>
        </div>
        `
        }
      }
      start_swiper()
    })
  })
  closeBtn.addEventListener("click", closeSlides)
  start_swiper()
}
export default swiper;