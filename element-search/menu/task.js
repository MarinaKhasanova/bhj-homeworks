const menuLinks = document.querySelectorAll('.menu__link');

for(let menuLink of menuLinks) {
  const menuSub = menuLink.closest('li').querySelector('ul');
  if (!menuSub) {
    continue;
  }
  menuLink.onclick = function() {
    menuSub.classList.toggle("menu_active");
    return false;
  }
}
