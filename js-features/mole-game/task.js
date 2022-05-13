const deadStatus = document.getElementById('dead');
const lostStatus = document.getElementById ('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i ++) {
  let hole = getHole(i);
  console.log(hole); 
  hole.onclick = function () {
    if (hole.className.includes( 'hole_has-mole' )) {
      deadStatus.textContent ++; 
    } else {
      lostStatus.textContent ++;
      }
    if (deadStatus.textContent == 10) {
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
      alert('Вы победили!');
      
    } 
    if (lostStatus.textContent == 5) {
      deadStatus.textContent = 0;
      lostStatus.textContent = 0;
      alert('Вы проиграли (');
    }
  }  
}