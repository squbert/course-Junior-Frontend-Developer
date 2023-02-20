/*
 * Задание
 * Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до переданного числа.
 * Выберите любой из 3 типов при создании функции.
 * getSumOfNumbers принимает в себя 2 параметра: number и type.
 * Параметр number - это число, до которого будет считаться сумма. То есть, если было
 * передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + ... + 10).
 * Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”.
 * Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа,
 * пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd.

 * Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.

 * Возможные результаты функции getSumOfNumbers:
 * 1. number = 10, type = ‘odd’. Возвращает 25.
 * 2. number = 10, type = ‘even’. Возвращает 30.
 * 3. number = 10, type = ‘’. Возвращает 55.
*/

// Вариант if else
// function getSumOfNumbers(number, type = 'odd') {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (type === 'odd') {
//       if (i % 2 !== 0) {
//         sum += i;
//       }
//     } else if (type === 'even') {
//       if (i % 2 === 0) {
//         sum += i;
//       }
//     } else {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getSumOfNumbers(10, 'even'));

// Вариант Switch case
function getSumOfNumbers(number, type = 'odd') {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    switch (type) {
      case 'odd':
        if (i % 2 !== 0) {
          sum += i;
        }
        break;

      case 'even':
        if (i % 2 === 0) {
          sum += i;
        }
        break;

      default:
        sum += i;
    }
  }

  return sum;
}

console.log(getSumOfNumbers(10));
