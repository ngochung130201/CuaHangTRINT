import Swiper from "swiper";

const setSwiperInstance = (swiper: Swiper) => {
  setInterval(() => {
    swiper.slideNext();
  }, 3000);
}
export {
  setSwiperInstance
}
