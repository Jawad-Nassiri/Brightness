const inputElem = document.querySelector('.range-input'),
  sectionElem = document.querySelector('.wrapper')


inputElem.addEventListener('change', () => {
  let brightnessPercentage = inputElem.value

  sectionElem.style.filter = `brightness(${brightnessPercentage}%)`;
});