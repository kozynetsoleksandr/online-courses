import { Slider } from '../components/Slider.js';

const mySlider = new Slider({
    container: document.querySelector('.slider-container'),
    track: document.querySelector('.slider-track'),
    btnPrev: document.querySelector('.team__nav-btn--prev'),
    btnNext: document.querySelector('.team__nav-btn--next'),
    slidesToShow: 4,
    slidesToScroll: 3
});
