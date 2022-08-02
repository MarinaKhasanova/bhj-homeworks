const chatWidget = document.querySelector('.chat-widget');
const inputTextArea = document.getElementById('chat-widget__input');
let answerMessages = ['Вы не купили ни одного товара, чтобы с нами так разговаривать', 'Где ваша совесть?', 'Мы ничего не будем вам продавать', 'Напишите в чат позже', 'Кто тут?', 'К сожалению, все операторы сейчас заняты, не пишите нам больше', 'Добрый день!До свидания!'];
const outputMessages = document.querySelector( '.chat-widget__messages' );

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

inputTextArea.addEventListener('input', (event) => {
  document.addEventListener('keypress', (eventEnter) => {
    if(eventEnter.code === 'Enter' && inputTextArea.value) {
      let date = new Date();
      let hours =  date.getHours();
      let minutes = date.getMinutes();
      outputMessages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">`+ hours + `:` + minutes + `</div>
          <div class="message__text">`+ inputTextArea.value + `</div>
        </div>`;
      outputMessages.innerHTML += `
        <div class="message">
          <div class="message__time">` + hours + `:` + minutes + `</div>
          <div class="message__text">`+ answerMessages[Math.floor(Math.random() * answerMessages.length)];+
          `</div>
        </div>
      `;
    inputTextArea.value = '';
    }    
  })
});
