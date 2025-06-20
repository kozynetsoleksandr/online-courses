import { Slider } from "../components/Slider.js";

const teamContainer = document.querySelector(".team__slider-container");

if (teamContainer) {
  new Slider({
    container: document.querySelector(".team__slider-container"),
    track: document.querySelector(".team__slider-track"),
    btnPrev: document.querySelector(".team__nav-btn--prev"),
    btnNext: document.querySelector(".team__nav-btn--next"),
    slidesToShow: 4,
    slidesToScroll: 3,
  });
}