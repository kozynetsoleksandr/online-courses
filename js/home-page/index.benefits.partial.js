const buttons = document.querySelectorAll('.benefits__button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Видалити активний клас з усіх
    buttons.forEach(btn => {
      btn.classList.remove('benefits__button--active');
      const svg = btn.querySelector('.benefits__button-svg');
      svg?.classList.remove('benefits__button-svg--active');
    });

    // Додати активний клас до натиснутого
    button.classList.add('benefits__button--active');
    const svg = button.querySelector('.benefits__button-svg');
    svg?.classList.add('benefits__button-svg--active');
  });
});
