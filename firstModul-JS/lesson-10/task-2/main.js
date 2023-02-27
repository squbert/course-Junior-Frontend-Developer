/* 
 * Задание
 * Вам требуется создать функцию giveTalonsInOrder, которая сортирует очередь из пациентов. Она принимает в себя 2 параметра:
 * 1. patients - массив объектов. Каждый объект хранит информацию об имени пациента и его уникальном номере - id.
 * 2. orders - массив уникальных номеров id, который указывает порядок, в котором должны стоять в очереди пациенты.
 * Функция должна возвращать новый массив, в котором объекты из массива patients будут отсортированы по id из массива orders.
 * Посмотрите на возможный результат функции giveTalonsInOrder:
 * const ordersArr = [4, 2, 1, 3];
 * const people = [
 * { id: 1, name: "Максим" },
 * { id: 2, name: "Николай" },
 * { id: 3, name: "Ангелина" },
 * { id: 4, name: "Виталий" },
 * ];
 * const result = giveTalonsInOrder(people, ordersArr);
 * console.log('result', result);

 * Возвращает массив
 * [
 * { id: 4, name: 'Виталий' },
 * { id: 2, name: 'Николай' },
 * { id: 1, name: 'Максим' },
 * { id: 3, name: 'Ангелина' }
 * ]
*/

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Николай' },
  { id: 3, name: 'Ангелина' },
  { id: 4, name: 'Виталий' },
];

// Вариант 1
// const giveTalonsInOrder = (patients, orders) => {
//   const patientsOrders = [];
//   orders.forEach((order) => {
//     patients.find((patient) => {
//       if (patient.id === order) {
//         patientsOrders.push(patient);
//       }
//     });
//   });

//   return patientsOrders;
// };

// Вариант 2
const giveTalonsInOrder = (patients, orders) => {
  const patient = patients.reduce((acc, curPatient) => {
    acc[curPatient.id] = curPatient;
    return acc;
  }, {});
  return orders.map((order) => patient[order]);
};

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
