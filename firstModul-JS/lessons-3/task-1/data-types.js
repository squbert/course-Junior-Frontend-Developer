/*
* Задание 1

* требуется создать 8 переменных, которые будут представлять 8 разных типов данных.
* Каждую переменную объявляйте при помощи const.
* Также для каждой переменной необходимо вывести в консоль ее значение, и значение typeof.

* Например:
* const age = 20;
* console.log('age', age, typeof age);
 */

const numberVariable = 205;
const stringVariable = 'hello';
const booleanVariable = true;
const nullVariable = null;
const undefinedVariable = undefined;
const objectVariable = {
  name: 'Pety',
  surname: 'Parker',
  age: 50,
};
const bigIntVariable = 100n;
const symbolVariable = Symbol('as');

console.log('numberVariable', numberVariable, typeof numberVariable);
console.log('stringVariable', stringVariable, typeof stringVariable);
console.log('booleanVariable', booleanVariable, typeof booleanVariable);
console.log('nullVariable', nullVariable, typeof nullVariable);
console.log('undefinedVariable', undefinedVariable, typeof undefinedVariable);
console.log('objectVariable', objectVariable, typeof objectVariable);
console.log('bigIntVariable', bigIntVariable, typeof bigIntVariable);
console.log('symbolVariable', symbolVariable, typeof symbolVariable);

// !Исключения
// !typeof 'null' - будет тип данных Object
// !typeof 'console.log' - будет тип данных function (такого типа в JS не существует)
