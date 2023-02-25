/* 
 * Задание
 * Вам необходимо создать функцию getSumOfSequence, которая будет создавать массив
 * из чисел и высчитывать сумму первого и последнего элементов массива.

 * Функция принимает в себя один параметр number. Используя этот параметр, нужно создать массив из чисел от 1 до number.
 * Для заполнения массива элементами используйте цикл for. (Например, если был передан number равный 5, то массив должен
 * выглядеть следующим образом: [1, 2, 3, 4, 5])

 * Функция getSumOfSequence должна возвращать сумму первого и последнего элементов итогового массива.
 * Пример:
 * getSumOfSequence(5) = 6 // [1, 2, 3, 4, 5], 1+5=6
*/

const getSumOfSequence = (number) => {
  let finalArray = [];
  for (let i = 1; i <= number; i++) {
    finalArray.push(i);
  }

  const result = finalArray[0] + finalArray[finalArray.length - 1];

  return result;
};

console.log(getSumOfSequence(5));
