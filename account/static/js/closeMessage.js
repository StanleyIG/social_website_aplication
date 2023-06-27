// Получаем все элементы закрытия сообщений
var closeButtons = document.querySelectorAll('.messages .close');

// Добавляем обработчик события клика на каждый элемент закрытия сообщения
closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Получаем родительский элемент сообщения
    var message = button.parentNode;
    // Скрываем родительский элемент сообщения
    message.style.display = 'none';
  });
});