let counterClick = document.getElementById("clicker__counter");
let count = counterClick.textContent;
const cookie = document.getElementById("cookie");

cookie.onclick =function() {
  count ++;
  counterClick.textContent = count;
  if (count % 2) {
    cookie.width = 100;
  } else { 
      cookie.width = 200;}
}