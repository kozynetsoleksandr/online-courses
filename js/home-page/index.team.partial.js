
let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.team__nav-btn--prev');
const btnNext = document.querySelector('.team__nav-btn--next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPostiotion();
    checkBtns();
})
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPostiotion();
    checkBtns();
})

const setPostiotion = () => {
    track.style.transform = `translateX(${position}px)`
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();
