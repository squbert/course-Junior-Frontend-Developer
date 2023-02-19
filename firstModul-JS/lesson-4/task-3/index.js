/* 
* Задание 1

* Сейчас ваша задача состоит в том, чтобы преобразовать явно к string, number и boolean
* следующие сущности, посмотреть на результат и проанализировать его:

* 1. console.log
* 2. { name: 'Maxim' }
* 3. Symbol('key')
* 4. Number
* 5. ''
* 6. 0
* 7. -10
* 8. '-105'
*/

console.log(String(console.log), Number(console.log), Boolean(console.log));

console.log(
  String({ name: 'Maxim' }),
  Number({ name: 'Maxim' }),
  Boolean({ name: 'Maxim' })
);

console.log(String(Symbol('key')), Boolean(Symbol('key')));

console.log(String(Number), Number(Number), Boolean(Number));

console.log(String(''), Number(''), Boolean(''));

console.log(String(0), Number(0), Boolean(0));

console.log(String(-10), Number(-10), Boolean(-10));

console.log(String('-105'), Number('-105'), Boolean('-105'));
