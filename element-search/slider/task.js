const prev = document.querySelector(".slider__arrow_prev");
const ridht = document.querySelector(".slider__arrow_next");
const slider = [...document.querySelectorAll(".slider__item")];


let nextSlide = function () {
  let indexActiveSlide = slider.findIndex(element => element.classList.contains('slider__item_active'));
  slider[indexActiveSlide].classList.remove('slider__item_active');
  indexActiveSlide = slider.length - 1 === indexActiveSlide ? 0 : indexActiveSlide + 1;
  slider[indexActiveSlide].classList.add('slider__item_active');
}

let prevSlide = function () {
  let indexActiveSlide = slider.findIndex(element => element.classList.contains('slider__item_active'));
  slider[indexActiveSlide].classList.remove('slider__item_active');
  indexActiveSlide = 0 === indexActiveSlide ? slider.length - 1 : indexActiveSlide - 1;
  slider[indexActiveSlide].classList.add('slider__item_active');
}

ridht.onclick = nextSlide;

prev.onclick = prevSlide;