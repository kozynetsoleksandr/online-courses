import { Slider } from "../components/Slider.js";

const mySlider = new Slider({
  container: document.querySelector(".testimoinals__slider-container"),
  track: document.querySelector(".testimoinals__slider-track"),
  btnPrev: document.querySelector(".testimoinals__nav-btn--prev"),
  btnNext: document.querySelector(".testimoinals__nav-btn--next"),
  slidesToShow: 1,
  slidesToScroll: 1,
});

console.log(mySlider.track.children);
