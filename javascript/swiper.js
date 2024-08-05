const swiper = () => {
  const swiper_container = document.querySelector(".swipers");
  const btns = document.querySelectorAll(".preview__btn");
  const swipe_wrap = document.querySelector(".swiper-wrapper");
  const window_url = window.location.pathname.startsWith('/nhrlvck-portfolio') ? '/nhrlvck-portfolio' : '';
  let imageArray = [];
  const fadeSelector = document.querySelector(".fade-show");
  const closeBtn = document.querySelector(".xbtn");
  let swiperInstance = null;

  const start_swiper = () => {
    swiperInstance = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      hideOnClick: {
        el: '.xbtn'
      }
    });
  }

  const closeSlides = () => {
    imageArray = [];
    swiper_container.style.display = 'none';
    fadeSelector.classList.remove("swipers__anim__show");
    swipe_wrap.innerHTML = '';
    if (swiperInstance !== null) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      imageArray = JSON.parse(btn.getAttribute('data-images'));
      swiper_container.style.display = 'flex';
      fadeSelector.classList.add("swipers__anim__show");      
      for (let i = 0; i < imageArray.length; i++) {
        swipe_wrap.innerHTML += `
          <div class="swiper-slide">
            <img src="${window_url}${imageArray[i]}" alt="${imageArray[i]}" loading="lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>`;
      }

      start_swiper();
    });
  });

  closeBtn.addEventListener("click", closeSlides);
}

export default swiper;
