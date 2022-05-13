const timerStart = document.getElementById('timer');

const massage = setInterval (function () {
  timerStart.textContent--; 
  if (timerStart.textContent == 0) { 
    alert('Вы победили в конкурсе!');
    clearInterval(t);
  }
}, 1000); 