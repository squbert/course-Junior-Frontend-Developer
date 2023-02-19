/* 
* Задание 1

* Необходимо создать 8 переменных с помощью let, которые
* будут представлять 8 разных типов данных. Каждую из этих переменных требуется явно
* преобразовать к 3-м типам: к number, boolean и string. Конечные значения выведите в консоль.

* Пример:
* let age = 18;
* console.log(Number(age), Boolean(age), String(age));

* Обязательно после каждого console.log посмотрите, что у вас выводится в консоль и
* подумайте, почему получилось именно такое значение, которое было выведено.

* Примечание: Symbol вы не сможете преобразовать к типу данных number. Если вы
* попробуете это сделать, то у вас будет ошибка.
*/

let numberVariable = 205;
console.log(
  Number(numberVariable),
  Boolean(numberVariable),
  String(numberVariable)
);

let stringVariable = 'hello';
console.log(
  Number(stringVariable),
  Boolean(stringVariable),
  String(stringVariable)
);

let booleanVariable = true;
console.log(
  Number(booleanVariable),
  Boolean(booleanVariable),
  String(booleanVariable)
);

let nullVariable = null;
console.log(Number(nullVariable), Boolean(nullVariable), String(nullVariable));

let undefinedVariable = undefined;
console.log(
  Number(undefinedVariable),
  Boolean(undefinedVariable),
  String(undefinedVariable)
);

let objectVariable = {
  name: 'Pety',
  surname: 'Parker',
  age: 50,
};
console.log(
  Number(objectVariable),
  Boolean(objectVariable),
  String(objectVariable)
);

let bigIntVariable = 100n;
console.log(
  Number(bigIntVariable),
  Boolean(bigIntVariable),
  String(bigIntVariable)
);

let symbolVariable = Symbol('as');
console.log(
  // Number(symbolVariable),
  Boolean(symbolVariable),
  String(symbolVariable)
);
