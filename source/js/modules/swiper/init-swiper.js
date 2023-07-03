import Swiper from '../../vendor/swiper';

const sliderCoaches = document.querySelector('.coaches__slider');
const prevButtonCoaches = document.querySelector('.coaches__button-prev');
const nextButtonCoaches = document.querySelector('.coaches__button-next');

const reviewSlider = document.querySelector('.review__slider');
const prevButton = document.querySelector('.review__slider-button-prev');
const nextButton = document.querySelector('.review__slider-button-next');

const initSwiper = () => new Swiper(sliderCoaches, {
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
    nextEl: nextButtonCoaches,
    prevEl: prevButtonCoaches,
  },
});

const initReviewSwiper = () => new Swiper(reviewSlider, {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },
});

export {initSwiper, initReviewSwiper};
