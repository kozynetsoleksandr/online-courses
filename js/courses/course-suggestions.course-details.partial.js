import { Slider } from "../components/Slider.js";

const teamContainer = document.querySelector(".course-suggestions__slider-container");

if (teamContainer) {
  new Slider({
    container: teamContainer,
    track: document.querySelector(".course-suggestions__slider-track"),
    btnPrev: document.querySelector(".team__nav-btn--prev"),
    btnNext: document.querySelector(".team__nav-btn--next"),
    slidesToShow: 2,
    slidesToScroll: 2,
  });
}