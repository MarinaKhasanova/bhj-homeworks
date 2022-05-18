const classMenuLinks = document.querySelectorAll(".menu__link");

for (let menuLink of classMenuLinks) {
  menuLink.onclick = function () {
    const menuLinkParent = menuLink.closest("li");
    const activeMenuItem = document.querySelector(".menu_active");
    const menuSub = menuLinkParent.querySelector(".menu__item > .menu_sub");
    const childrenMenuSub = menuLinkParent.querySelector(".menu_active");
      if (activeMenuItem !== null) {
        activeMenuItem.classList.remove("menu_active");
       }
      if (menuSub !== null && childrenMenuSub === null) {
        menuSub.classList.toggle("menu_active");
      }
    return false;
  };
};