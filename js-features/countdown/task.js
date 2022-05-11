const timerStart = document.getElementById('timer');

let t = setInterval (function () {
  timerStart.textContent--; 
  if (timerStart.textContent == 0) { 
    alert('Вы победили в конкурсе!');
    clearInterval(t);
  }
}, 1000); 