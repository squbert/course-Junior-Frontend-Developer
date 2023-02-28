/*
 * Задание
 * Часто мы записываем даты в следующем формате “день.месяц.год”. Сейчас вам необходимо создать функцию getDateFormat,
 * которая будет приводить дату к этому формату. Она принимает 2 параметра:
 * 1. date - объект даты, который нужно перевести в данный текстовый формат “день.месяц.год”
 * 2. separator - разделитель дня, месяца и года. По умолчанию он должен быть равен точке “.”
 * Если в качестве разделителя будет передано тире “-”, то формат уже должен быть таким “день-месяц-год”
 * Также, учтите, что номер месяца в JavaScript считается с 0 до 11. Кроме этого, если день
 * либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. То
 * есть результат должен быть не таким “5.5.2001”, а “05.05.2001”.
 */

// Вариант 1
// const getDateFormat = (date, separator = '.') => {
//   const year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   if (month < 10) {
//     month = '0' + month;
//   }
//   let dateMonth = date.getDate();
//   if (dateMonth < 10) {
//     dateMonth = '0' + dateMonth;
//   }

//   return (newDate = [year, month, dateMonth]).join(separator);
// };

// Вариант 2
const addZero = (number) =>
  String(number).length === 1 ? `0${number}` : String(number);

const getDateFormat = (date, separator = '.') => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateMonth = date.getDate();
  const newDate = [year, month + 1, dateMonth].map((element) =>
    addZero(element)
  );

  return newDate.join(separator);
};

console.log(getDateFormat(new Date(2023, 1, 1), '-'));
