/*
 * Задание
 * Вам необходимо создать функцию getDivisorsCount, которая будет высчитывать количество делителей для переданного числа.
 * Она принимает в себя единственный параметр number. По умолчанию он должен быть равен 1.
 * Если number меньше нуля либо является не целым (можно проверить при помощи функции Number.isInteger(number)),
 * то выводите в модальное окно при помощи alert сообщение “number должен быть целым числом и больше нуля!”.

 * Примеры:
 * getDivisorsCount(4) // Вернет 3 (делители - 1, 2, 4)
 * getDivisorsCount(5) // Вернет 2 (делители - 1, 5)
 * getDivisorsCount(12) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
 * getDivisorsCount(30) // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
 */

// Вариант 1
// function getDivisorsCount(number = 1) {
//   if (number < 0 || !Number.isInteger(number)) {
//     alert(`${number} должен быть целым числом и больше нуля!`);
//   } else {
//     let count = 0;

//     for (let i = number; i > 0; i--) {
//       const isDivisor = number % i === 0;
//       if (isDivisor) {
//         count++;
//       }
//     }
//     return count;
//   }
// }

// Вариант 2
function getDivisorsCount(number = 1) {
  if (!Number.isInteger(number) || number < 1) {
    alert('number должен быть целым числом и больше нуля!');
    return;
  }
  // Проще перебирать делители от 1 до половины числа
  // (округлим в меньшую сторону),
  // а затем само число считается делителем.
  let half = Math.floor(number / 2), // Точная половина числа
    count = 1; // Само число уже считается делителем
  for (let i = 1; i <= half; i++) {
    if (!(number % i)) ++count;
  }

  return count;
}

console.log(getDivisorsCount(4));
