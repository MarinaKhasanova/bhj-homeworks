const prev = document.querySelector(".slider__arrow_prev");
const ridht = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
const dot = document.querySelectorAll(".slider__dot");
let i = 0; 

let activeSlide = n => {
  for (slide of slider) {
	slide.classList.remove("slider__item_active");
  }
  slider[n].classList.add("slider__item_active");
}

let getCurrentSlide = function (idx) {
  activeSlide(idx);
  dotActive(idx);
}

let nextSlide = function () {
  if (i === slider.length - 1) {
    i = 0;
    getCurrentSlide(i);
  } else {
      i++;
      getCurrentSlide(i);
	}
}

let prevSlide = function () {
  if (i === 0) {
    i = slider.length - 1;
    getCurrentSlide(i);
  } else {
      i--;
      getCurrentSlide(i);
	}
}

ridht.onclick = function () {
  nextSlide();
  return false;
}

prev.onclick = function () {
  prevSlide();
  return false;
}