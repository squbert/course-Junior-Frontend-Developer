/*
 * Задание
 * Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday,
 * которая будет возвращать количество дней до следующего дня рождения.
 * Данная функция должна принимать 1 параметр nextBirthdayDate, который является объектом
 * даты и указывает на дату вашего ближайшего дня рождения.
 * Год стоит указывать ближайший к текущей дате, а не год вашего рождения.

 * Также рекомендуется создать вспомогательную функцию convertMsToDays, которая переводит миллисекунды в дни.
 * Для округления итогового числа используйте Math.round.
 */

const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);
// Миллисекунды / 1000ms / 60sec / 60min / 24hours

const getDaysBeforeBirthday = (nextBirthdayDate) => {
  // высчитываем разницу дат. Разница = будующая дата - дата в данный момент
  const difference = nextBirthdayDate.getTime() - Date.now();
  // возвращает разницу переведенную с Ms в days
  return convertMsToDays(difference);
};

console.log(getDaysBeforeBirthday(new Date(2024, 6, 13)));
