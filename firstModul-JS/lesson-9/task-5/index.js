/*
* Задание

 * Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни.
 * Также создайте функцию askClientToGiveEstimation, которая должна выводить сообщение “Как вы оцениваете
 * нашу кофейню от 1 до 10?” через prompt. Конечный результат, который введет пользователь, должен быть типом данных number.
 * Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, иначе же никаких действий не совершайте.
 * Для добавления оценок вызовите функцию askClientToGiveEstimation 5 раз.
 * Рекомендуется это сделать через цикл for.

 * После того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательных оценки.
 * Положительной оценкой является число больше 5, отрицательной - число, меньшее за 5 либо равное 5.
 * Выведите через alert сообщение “Всего положительных оценок: goodEstimations; Всего отрицательных оценок: notGoodEstimations”,
 * где goodEstimations - количество положительных оценок, а notGoodEstimations - количество отрицательных оценок.

 * Условия:
 * 1. В решение должен быть использован метод массивов filter.
*/

let clientsEstimations = [];

// Вариант 1
// for (let i = 0; i < 5; i++) {
//   askClientToGiveEstimation = Number(
//     prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
//   );

//   if (askClientToGiveEstimation >= 1 && askClientToGiveEstimation <= 10) {
//     clientsEstimations.push(askClientToGiveEstimation);
//   }
// }

// const goodEstimations = clientsEstimations.filter((number) => {
//   let sum = 0;
//   if (number > 5) {
//     sum++;
//   }

//   return sum;
// });

// const notGoodEstimations = clientsEstimations.filter((number) => {
//   let sum = 0;
//   if (number <= 5) {
//     sum++;
//   }

//   return sum;
// });

// alert(
//   `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
// );

// Вариант 2

const askClientToGiveEstimation = () => {
  const clientEstimationString = prompt(
    'Как вы оцениваете нашу кофейню от 1 до 10?'
  );
  const clientEstimation = Number(clientEstimationString.trim());

  if (clientEstimation >= 1 && clientEstimation <= 10) {
    clientsEstimations.push(clientEstimation);
  }
};

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

alert(
  `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
);
