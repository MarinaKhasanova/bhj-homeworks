const reveals = document.getElementsByClassName("reveal");

document.addEventListener('scroll', function() {
  for (let reveal of reveals) {
    if (reveal) {
      reveal.classList.toggle('reveal_active');
    }
  }
});


/*

document.addEventListener('scroll', function() {
    for (let reveal of reveals) {
        if (reveal) {
            let top = reveal.getBoundingClientRect().top;//возвращает размер элемента и его позицию относительно viewport
            const view = window.innerHeight;//фиксируем высоту элемента относительно страницы
            if (top < view) reveal.classList.add("reveal_active");//если высота элемента меньше экр показываем элемент
            else reveal.classList.remove("reveal_active");//если нет скрываем
        }
    }
});
*/