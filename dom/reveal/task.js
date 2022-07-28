const reveals = document.getElementsByClassName("reveal");

document.addEventListener('scroll', function() {
  for (let reveal of reveals) {
    const viewportHeight = window.innerHeight;
    const reveal_top = reveal.getBoundingClientRect().top;
    if (reveal_top < viewportHeight && reveal_top > 0) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  } 
});
