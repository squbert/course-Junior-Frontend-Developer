/* 
* Задание 1
* Вам даны 10 примеров явного преобразования типов.

* Ваша задача понять, что будет выведено в консоль в каждом примере. Сначала
* запишите свои ответы в заметки, а только потом уже запускайте код и сверьтесь с ответами.

*/

// 1
console.log(Number(' 1 2 3 4 5')); // NaN
// 2
console.log(Number('1234 5')); // NaN
// 3
console.log(Number('12345')); // 12345
// 4
console.log(String(false)); // 'false'
// 5
console.log(Boolean(0000000)); // false
// 6
console.log(Boolean(0.0000001)); // true
// 7
console.log(String(undefined)); // 'undefined'
// 8
console.log(Number('100f')); // NaN
// 9
console.log(Number('100')); // 100
// 10
console.log(Number('000001')); // 1
