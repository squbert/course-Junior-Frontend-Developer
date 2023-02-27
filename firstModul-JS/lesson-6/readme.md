# Введение в основы JS

- Цель урока:
  Вы научитесь работать с самыми базовыми вещами, на которых строится язык
  программирования JavaScript. Например, математические выражения, логические
  конструкции (if else, switch case), циклы.

- Содержание урока:

1. [Математика в JavaScript](https://learn.javascript.ru/operators)
2. Операторы сравнения в JS: > < >= <= == ===
3. if else, switch case, ? :
4. Логические операторы: || (ИЛИ), && (И) и ! (НЕ), ??
5. Циклы. for, while, do while

# Используемые методы в этом уроке

1. - .charCodeAt() - возвращает числовое значение Юникода для символа по указанному индексу.

- Разница между строгим сравнением (===) и не строгим сравнением (==):
  не строгое сравнение (==) - сравнивает значение. Например: (100 == '100') будет true.
  строгое сравнение (===) - сравнивает типы. Например: (100 === '100') будет false.

### Примечание:

Никогда в разработке веб-приложений не используйте нестрогое сравнение “==”.
Оно является инициатором большого количества багов, так как производит преобразование типов.
Используйте исключительно строгое сравнение “===”. Оно не преобразует типы и уменьшает шанс возникновения ошибок.

- Логические конструкции

1. if
2. if else
3. switch case
4. ? :

- Примеры:

  1. const isFavorite = true;

  if (isFavorite) {
  console.log('это условие истино')
  } else {
  console.log('это условие не истино')
  }

  2. const number1 = 5;
     const number2 = 10;

  if (number1 > number2) {
  console.log('Первое число больше второго')
  } else if (number1 === number2) {
  console.log('Числа равны')
  } else if (number1 < number2){
  console.log('Первое число меньше второго')
  } else {
  console.log('Непонятно')
  }

  3. const animal = 'Dog';

  switch (animal) {
  case 'Dog':
  console.log('Это собака');
  break;

  case 'Cat':
  console.log('это кошка');
  break;

  case 'Lemur':
  console.log('Это лемур');
  break;
  default:
  console.log('Что это за зверь такой?');
  }

  4. const favoriteFood = 'Burger';
     const message =
     favoriteFood === 'Burger'
     ? console.log('Ваша любимая еда это Бургер')
     : console.log('Какая ваша любимая еда?');
     console.log(message);

     Эта запись эквивалентна:
     let message = '';
     if (favoriteFood === 'Burger') {
     message = 'Ваша любимая еда это Бургер';
     } else {
     message = 'Какая ваша любимая еда?';
     }
     console.log(message);

- Дополнительные материалы:

1. [Оператор объединения с null](https://learn.javascript.ru/nullish-coalescing-operator)
2. [Циклы while и for](https://learn.javascript.ru/while-for)
3. [Условное ветвление if else, ? :](https://learn.javascript.ru/ifelse)
4. [Логические операторы](https://learn.javascript.ru/logical-operators)
5. [Операторы стравнения в JS](https://learn.javascript.ru/comparison)
