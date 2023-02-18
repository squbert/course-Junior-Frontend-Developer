/*
 * Задание
 * Необходимо запрашивать пользователя ввести нужные данные в текстовое поле.

 * Воспользуемся уже известной нам функцией prompt. В каждую из следующих
 * переменных clientName, clientSpentToday и clientSpentForAllTime присвойте значение,
 * которое введет пользователь в текстовое поле. Итоговые данные clientSpentToday и
 * clientSpentForAllTime должны быть типом данных number.

 * Для clientName сообщение в prompt должно быть “Введите имя клиента”, clientSpentToday - “Сколько клиент потратил сегодня?”,
 * clientSpentForAllTime - “Сколько клиент потратил за все время?”.
 * Если пользователь ввел неверные данные для clientSpentToday и
 * clientSpentForAllTime (например, “hello”), то выведите в модальном окне текст “Сумма,
 * которую клиент потратил за все время и которую потратил сегодня, должна быть числом!
 * Перезагрузите страницу, чтобы повторить попытку.”. При неверных данных не позволяйте
 * пользователю идти дальше к подсчету скидки. Используйте if else, чтобы реализовать данную логику.
 */

const clientName = prompt('Введите имя клиента');
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
let clientSpentToday = prompt('Сколько клиент потратил сегодня?');
let discount = 0;
clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

if (!clientSpentForAllTime || !clientSpentToday) {
  alert(
    'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.'
  );
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
  } else if (clientSpentForAllTime >= 500) {
    discount = 30;
  } else {
    discount = 0;
  }

  alert(`Вам предоставляется скидка в ${discount}%!`);
  clientSpentToday -= (clientSpentToday * discount) / 100;
  clientSpentForAllTime += clientSpentToday;
  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  );
}
