import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

console.log("Hello world!");
  

const swiper = new Swiper(".mySwiper", {
    
  spaceBetween: 48,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    
  },
  navigation: {      //切頁按鈕    
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
  pagination: {
    el: ".swiper-pagination-custom",    
    type: "fraction"
  },
  loop: "true"
});