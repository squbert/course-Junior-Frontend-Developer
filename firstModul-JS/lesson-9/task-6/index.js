/* 
 * Задание

 * Вам дан массив чисел.
 * const numbers = [10, 4, 100, -5, 54, 2];
 * Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9]
 * должен быть следующий результат:
 * 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
 * Решите данную задачу 4-мя способами:
 * 1. Через цикл for
 * 2. Через цикл for of
 * 3. Через метод forEach
 * 4. Через метод reduce
 * Для данного массива numbers сумма кубов должна равняться 1158411.
*/

const numbers = [10, 4, 100, -5, 54, 2];

// for
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  const cub = numbers[i] ** 3;
  sum1 += cub;
}
console.log('for:', sum1);

// for of
let sum2 = 0;
for (number of numbers) {
  sum2 += number ** 3;
}
console.log('for of:', sum2);

// forEach
let sum3 = 0;
numbers.forEach((number) => {
  sum3 += number ** 3;
});
console.log('forEach:', sum3);

// reduce
const sum4 = numbers.reduce((acc, item) => acc + item ** 3);
console.log('reduce:', sum4);
