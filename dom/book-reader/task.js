const sizeElements = document.getElementsByClassName('font-size');
let activElement = document.querySelector('.font-size_active');
const book = document.getElementById('book');

for (let sizeElement of sizeElements) {
  sizeElement.onclick = () => {
    activElement.classList.remove('font-size_active');
    sizeElement.classList.add('font-size_active');
    activElement = document.querySelector('.font-size_active');
    
    if (sizeElement.getAttribute('data-size') === 'small') {
      book.classList.remove('font-size_big');
      book.classList.add('font-size_small');
    } else if (sizeElement.getAttribute('data-size') === 'big') {
        book.classList.remove('font-size_small');
        book.classList.add('font-size_big');
    } else {
        book.classList.remove('font-size_small');
        book.classList.remove('font-size_big');
    }

    return false;
  }

}