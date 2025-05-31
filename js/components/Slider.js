export class Slider {
  constructor({
    container,
    track,
    btnPrev,
    btnNext,
    slidesToShow = 4,
    slidesToScroll = 2,
  }) {
    this.position = 0;
    this.slidesToShow = slidesToShow;
    this.slidesToScroll = slidesToScroll;

    this.container = container;
    this.track = track;
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;
    this.items = track.children;
    this.itemsCount = this.items.length;

    this.itemWidth = this.container.clientWidth / this.slidesToShow;
    this.movePosition = this.slidesToScroll * this.itemWidth;

    this.init();
  }

  init() {
    // Проставляємо ширину елементів
    Array.from(this.items).forEach((item) => {
      item.style.minWidth = `${this.itemWidth}px`;
    });

    // Вішаємо обробники
    this.btnPrev.addEventListener("click", () => this.movePrev());
    this.btnNext.addEventListener("click", () => this.moveNext());

    this.update();
  }

  movePrev() {
    const itemsLeft = Math.abs(this.position) / this.itemWidth;
    this.position +=
      itemsLeft >= this.slidesToScroll
        ? this.movePosition
        : itemsLeft * this.itemWidth;
    this.update();
  }

  moveNext() {
    const itemsLeft =
      this.itemsCount -
      (Math.abs(this.position) + this.slidesToShow * this.itemWidth) /
        this.itemWidth;
    this.position -=
      itemsLeft >= this.slidesToScroll
        ? this.movePosition
        : itemsLeft * this.itemWidth;
    this.update();
  }

  update() {
    this.setPosition();
    this.checkBtns();
  }

  setPosition() {
    this.track.style.transform = `translateX(${this.position}px)`;
  }

  checkBtns() {
    this.btnPrev.disabled = this.position === 0;
    this.btnNext.disabled =
      this.position <= -(this.itemsCount - this.slidesToShow) * this.itemWidth;
  }
}
