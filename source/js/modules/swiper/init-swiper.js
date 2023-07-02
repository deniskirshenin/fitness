import Swiper from '../../vendor/swiper';

const slider = document.querySelector('.swiper');
const prevButton = document.querySelector('.coaches__button-prev');
const nextButton = document.querySelector('.coaches__button-next');

const initSwiper = () => new Swiper(slider, {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    1365: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
});

export {initSwiper};
