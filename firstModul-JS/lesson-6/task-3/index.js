/* 
* Задание
* Задача состоит в том, чтобы задавать вопросы с помощью confirm и выводить ответы через alert.
* То есть сначала идет вопрос, а затем после нажатия одной из кнопок (“OK” либо “Cancel”) выводится ответ.

* Синтаксис функции confirm выглядит следующим образом:
* confirm('Ваш текст');

* Используйте данные вопросы:
* JavaScript появился в 1995 году?
* Спецификация JavaScript называется ECMAScript?
* JavaScript был создан за 1 месяц?

* В случае, если ответ на вопрос утвердителен, то выводите в alert строку “Верно”, иначе выведите правильный ответ.
*/

let question1 = confirm('JavaScript появился в 1995 году?');
let message1 =
  question1 === true
    ? alert('Верно')
    : alert('Не верно: JavaScript появился в 1995 году');

let question2 = confirm('Спецификация JavaScript называется ECMAScript?');
let message2 =
  question2 === true
    ? alert('Верно')
    : alert('Не верно: Спецификация JavaScript называется ECMAScript');

let question3 = confirm('JavaScript был создан за 1 месяц?');
let message3 =
  question3 === false
    ? alert('Верно')
    : alert('Не верно: JavaScript был создан за 10 дней');
