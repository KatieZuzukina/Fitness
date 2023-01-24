import Swiper, {Navigation} from 'swiper';

export const initSwiper = () => {
  const swiperCoaches = new Swiper('.coaches__slider', {
    autoHeight: true,
    breakpoints: {

      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 0,
      },

      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        initialSlide: 0,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    direction: 'horizontal',
    grabCursor: true,
    keyboard: true,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.coaches__button-next',
      prevEl: '.coaches__button-prev',
    },

  });

  const swiperReviews = new Swiper('.reviews__slider', {
    autoHeight: true,
    direction: 'horizontal',
    grabCursor: true,
    keyboard: true,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

  });
  return {swiperCoaches, swiperReviews};
};
