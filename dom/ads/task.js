const rotator = document.getElementsByClassName('rotator__case');
let i = 1;

setInterval(() => {
  if (i == 0) {
    rotator[rotator.length-1].classList.remove("rotator__case_active");
    rotator[i].classList.add("rotator__case_active");
  }  
  else {
    rotator[i-1].classList.remove("rotator__case_active");
    rotator[i].classList.add("rotator__case_active");
  }
  if (i < rotator.length-1) {i++;} 
  else {i = 0;}
}, 1000)
