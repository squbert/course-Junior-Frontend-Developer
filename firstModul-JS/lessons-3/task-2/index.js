/* 
* Задание 2
* требуется с помощью ключевого слова let создать любые 3 переменные,
* которые будут представлять следующие типы данных:
* 1. number,
* 2. string,
* 3. boolean.

* После 1-ю переменную (с number) нужно переопределить, заменив на любое значение с
* типом данных string. 2-ю заменяем на значение с типом данных number, а значение 3-ей
* замените на null. Также затем выведите значения измененных переменных в модальное
* окно.

* Например:
* let age = 18;
* age = '18'; // Теперь age это тип данных string
* alert(age);
*/

let telNumber = 2568;
let adres = 'Gora';
let isTime = true;

telNumber = 'Pety';
adres = 658;
isTime = null;

alert(telNumber);
alert(adres);
alert(isTime);