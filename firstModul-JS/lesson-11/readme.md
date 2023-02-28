# Дата и время в JavaScript

- Цель урока:
  Вы научитесь работать с датами и временем в JavaScript, а также считать разницу между двумя датами,
  чтобы вычислить конкретный отрезок времени.

- Содержание урока:

---

1. Создание дат и использование объекта Date
   const date = new Date();

   Date принимает в себя такие параметры как:
   year, month, date, hours, minutes, seconds, ms

   Month указывается в диапазоне от 0 до 11 (0 - январь; 11 - декабрь)

   const newDate = new Date(2023, 5, 13, 15, 52, 23, 4500) // Date Tue Jun 13 2023 15:52:27 GMT+0300 (Moscow Standard Time)

   Для получения данных из Date, есть специальные методы:
   console.log(newDate.getFullYear()); // 2023
   newDate.getMonth() // 5
   newDate.getDate() // 13
   и т.д.

   День недели указывается в диапазоне от 0 до 6 (0 - воскресенье; 6 - суббота)
   newDate.getDay() // 2 (вторник)

   Изменение данных
   newDate.setFullYear(2024);
   console.log(newDate); // Date Thu Jun 13 2024 15:52:27 GMT+0300 (Moscow Standard Time)

   newDate.setMonth(7);
   newDate.setHours(7);
   и т.д.

---

2. Подсчет разницы во времени между двумя датами
   Для подсчета разницы между датами используют метод getTime().

   Метод getTime() возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени.

   getTime возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

   Пример:
   const date1 = new Date(2022, 5, 15);
   const date2 = new Date(2023, 5, 15);

   console.log(date1.getTime()); // 1655240400000
   console.log(date2.getTime()); // 1686776400000

   Высчитываем разницу:
   const difference = date2.getTime() - date1.getTime();
   console.log(difference); // 31536000000

   Получаем минуты:
   console.log(difference / 1000 / 60); // 525600

   Подсчет времени для выполнения процесса или функции или чего либо:

   const startTime = Date.now();

   for (let i = 0; i < 1000000; i++) {
   // do something
   }

   const endTime = Date.now();

   const difference = endTime - startTime;
   console.log(difference); // 1 (1 миллисекунда на выполнение цикла for)

   Date.now() аналогично new Date().getTime();

---

- Дополнительные материалы:
  [Дата в JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)
