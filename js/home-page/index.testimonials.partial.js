import { Slider } from "../components/Slider.js";

const testimonialsContainer = document.querySelector(".testimoinals__slider-container");

if (testimonialsContainer) {
  new Slider({
    container: testimonialsContainer,
    track: document.querySelector(".testimoinals__slider-track"),
    btnPrev: document.querySelector(".testimoinals__nav-btn--prev"),
    btnNext: document.querySelector(".testimoinals__nav-btn--next"),
    slidesToShow: 1,
    slidesToScroll: 1,
  })
}
