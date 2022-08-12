const helps = document.getElementsByClassName('has-tooltip');
let element = document.createElement('div');
element.classList.add('tooltip');
element.setAttribute('style', 'left: 0; top: 0');

for (let help of helps) {
  help.onclick = () => {
    if (element.textContent === help.getAttribute('title')) {
      element.classList.toggle('tooltip_active');
      return false;
    } else {
        element.classList.add('tooltip_active');
    }
    element.textContent = help.getAttribute('title');
    let positionHelp = help.getBoundingClientRect();
    element.style.left = Math.floor(positionHelp.left) + 'px';
    element.style.top = Math.floor(positionHelp.top + 20) + 'px';
    help.insertAdjacentElement( "afterend", element);
    return false;
  };
}