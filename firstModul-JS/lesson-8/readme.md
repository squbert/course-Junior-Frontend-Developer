# Functions

- Цель урока:

Вы поймете значимость функций в JavaScript, узнаете про их типы и сможете без проблем
написать свою функцию, правильно назвать и использовать ее в коде.

- Содержание урока:

1. Что такое функции в JavaScript?
2. Виды функций: function declaration, function expression, стрелочная функция.
3. Возврат значения из функции (через return и через стрелочную)
4. Как выбрать имя функции?

Cуществует 3 вида функций: function expression, function declaration и стрелочная функция.

У стрелочных функций параметры передаются в круглые скобки.

Посмотрите на пример:
const showMessage = (message) => {
alert(`Ваше сообщеине: ${message}`);
}

У функции showMessage есть единственный параметр message. Когда у стрелочных
функций есть только 1 параметр, то круглые скобки можно опустить.

const showMessage = message => {
alert(`Ваше сообщеине: ${message}`);
}

Но вот если параметров больше, чем 1, то круглые скобки обязательны, так как без них ничего работать не будет.

const showMessage = (message, personName) => {
alert(`${personName}, у вас новое сообщение!`);
alert(`Ваше сообщеине: ${message}`);
}
