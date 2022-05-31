const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    dropdown.querySelector('ul').classList.toggle('dropdown__list_active');
    event.preventDefault();
    if (event.target.classList.contains('dropdown__link')) {
      dropdown.querySelector('.dropdown__value').textContent = event.target.textContent; 
    }
  })
});

