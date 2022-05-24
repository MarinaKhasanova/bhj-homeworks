const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';
const modalClose = document.getElementsByClassName('modal__close_times');

for (let modalCloses of modalClose) {
  modalCloses.onclick = function() {
    modalMain.className = 'modal';
  }
}

const showSuccess = document.getElementsByClassName('show-success');
const modalSuccess = document.getElementById('modal_success');
for (let showSuccesses of showSuccess ) {
  showSuccesses.onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className += ' modal_active';
  }

}