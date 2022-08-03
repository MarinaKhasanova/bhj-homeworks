const helps = document.getElementsByClassName('has-tooltip');
let element = document.createElement('div');
element.classList.add('tooltip');
element.setAttribute('style', 'left: 0; top: 0');

for (let help of helps) {
  help.onclick = () => {
    element.textContent = help.getAttribute('title');
    console.log(element.textContent);
    element.classList.add('tooltip_active');
    help.insertAdjacentElement( "afterend", element);
    return false;
  };
}