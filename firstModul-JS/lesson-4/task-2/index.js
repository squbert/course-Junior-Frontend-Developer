/* 
* Задание 1

* Ниже вам даны 10 примеров явного и неявного
* преобразования типов. Необходимо определить, какое преобразование явное, а какое неявное.
* Если преобразование является явным, то напишите напротив примера комментарий
* “явное”, если неявным, то исправьте его на явное по шаблону ниже.

* Шаблон ответа на пример console.log(+'1'):
* console.log(+'1'); //неявное
* console.log(Number('1'));

* Также для каждого значения выведете его typeof.
*/

console.log(Number('10'), typeof Number('10')); // явное

//1
// console.log(+'50'); не явное
console.log(Number('50'), typeof Number('50'));

//2
console.log(Number('100'), typeof Number('100')); // явное

//3
// console.log('' + 1); не явное
console.log(String(1), typeof String(1));

//4
console.log(String(1), typeof String(1)); // явное

//5
console.log(Boolean(0), typeof Boolean(0)); // явное

//6
// console.log(+'001'); не явное
console.log(Number('001'), typeof Number('001'));

//7
// console.log(1 + ''); не явное
console.log(String(1), typeof String(1));

//8
console.log(Boolean(1), typeof Boolean(1)); // явное

//9
console.log(String(001), typeof String(001)); // явное

//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное
