const classInterests = document.querySelectorAll('.interests');

for (let elemClassInterests of classInterests) {
  const mainMenuItem = elemClassInterests.closest('.interest');
  if (mainMenuItem) {
    mainMenuItem.querySelector('.interest__check').onclick = () => {
      const menuItems = elemClassInterests.querySelectorAll('.interest__check');
      if (mainMenuItem.querySelector('.interest__check').checked) {
        for (let menuItem of menuItems) {
          menuItem.checked = true;
        }
      } else {
          for (let menuItem of menuItems) {
            menuItem.checked = false;
          }
        }
    }
  }
}
