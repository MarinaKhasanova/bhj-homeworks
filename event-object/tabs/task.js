const tabs = [...document.getElementsByClassName('tab')];
const tabsContents = [...document.getElementsByClassName('tab__content')];

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (event) => {
    tabs.find((element) => element.classList.contains('tab_active')).classList.toggle('tab_active');
    tabsContents.find((element) => element.classList.contains('tab__content_active')).classList.toggle('tab__content_active');
    tab.classList.toggle('tab_active');
    tabsContents[index].classList.toggle('tab__content_active');
  });
});