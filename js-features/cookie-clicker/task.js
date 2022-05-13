let counterClick = document.getElementById("clicker__counter");
let count = counterClick.textContent;
const cookie = document.getElementById("cookie");

cookie.onclick =function() {
  count ++;
  counterClick.textContent = count;
  cookie.width = count % 2 ? 250 : 200;
}