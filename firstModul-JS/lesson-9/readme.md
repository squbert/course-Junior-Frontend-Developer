# Массивы

- Цель урока:

Вы научитесь выполнять базовые действия с массивами: удаление, добавление,
изменение элементов. Также мы разберем такие темы, как перебор массива, сортировка
массива разными способами, объединение нескольких массивов в один.

- Содержание урока:

---

1. Что такое массивы и как их создавать?

   Массивы - это набор элементов. Массивы позволяют хранить несколько значений, одного или нескольких типов.
   Массивы обычно описываются как «объекты, подобные спискам».

   Массивы создаются из квадратных скобок , которые содержат список элементов, разделённых запятыми.
   const namesArray = ['Вася', 'Петя', 'Гоша', 'Паша'];
   const numbesrArray = [1, 2, 10, 20, 100];
   const mixedArray = [1, 'max', 20, 'min'];

---

2. Добавление, удаление и изменение элементов массива

   const number = [100, 300, 400, 600];

   ### Добавление элементов

   - Добавляет элемент в конец массива (можно добавлять сразу несколько элементов): push();
     number.push(1000) // number = [100, 300, 400, 600, 1000];

   - Добавляет элемент в начало массива (можно добавлять сразу несколько элементов): unshift();
     number.unshift(200) // number = [200, 100, 300, 400, 600, 1000];

   ### Удаление элементов

   - Удаляет элемент в начале массива. Не принимает в себя значения. Может вывести удаленный элемент: shift();
     number.shift() // 200
     number = [100, 300, 400, 600, 1000];

   - Удаляет элемент в конце массива. Не принимает в себя значения. Может вывести удаленный элемент: pop();
     number.pop() // 1000
     number = [100, 300, 400, 600];

   ### Изменение элементов

   number[2] = 1000;
   number = [100, 300, 1000, 600];

---

3. Перебор массивов с помощью for, for of и forEach

   const namesArray = ['Bob', 'James', 'Alex', 'Kate'];

   ### Цикл for

   for (let i = 0; i < namesArray.length; i++) {
   console.log(namesArray[i]);
   }

   ### Цикл for of

   for (const name of namesArray) {
   console.log(name);
   }

   ### forEach()

   namesArray.forEach((name, index, array) => {
   console.log(name); // выведет имена
   console.log(index); // выведет индексы
   console.log(array); // выведет массивы
   })

   Необязательно писать все три параметра
   namesArray.forEach((name, index, array) => {}

   Можно написать один
   namesArray.forEach((name) => {
   console.log(name); // выведет имена
   }

---

4. Работа с методами массивов: map, filter, find, findIndex, some, every

   ### map()

   Возвращает новый массив в котором содержаться элементы измененные с помощью функции callback
   (number, index, arrat) => {
   return number + 2;
   }

   const numbers = [100, 300, 600, 800];

   const newNumbers = numbers.map((number, index, arrat) => {
   return number + 2;
   })

   console.log(newNumbers); // [102, 302, 602, 802];

   ### filter()

   Возвращает новый массив со всеми элементами, которые подходят под условие, заданное в передаваемой функции.

   const filteredNumbers = numbers.filter((number, index, arrat) => {
   return index % 2 === 0;
   })

   console.log(filteredNumbers); // [100, 600];

   ### find()

   Возвращает значение первого найденного в массиве элемента, которое довлетворяет условию переданному в callback функции.
   В противном случае возвращается undefined.

   const searchedNumbers = numbers.find((number, index, arrat) => {
   return number === 300;
   })

   console.log(searchedNumbers); // 300;

   ### findIndex()

   Возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.
   В противном случае возвращается -1.

   const searchedIndex = numbers.findIndex((number, index, arrat) => {
   return number === 300;
   })

   console.log(searchedIndex); // 1;

   ### some()

   Проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
   Если хоть один элемент удовлетворяет заданное условие, вернет true.
   Если нет ни одного элемента удовлетворяющего условие, вернет false.

   const elementExists = numbers.some((number, index, arrat) => {
   return number === 600;
   })

   console.log(elementExists); // true;

   ### every

   Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
   Если хоть один элемент не удовлетворяет заданное условие, вернет false.
   Если все элементы удовлетворяют условие, вернет true.

   const allElementExists = numbers.every((number, index, arrat) => {
   return number < 500;
   })

   console.log(allElementExists); // false;

---

5. Метод массивов reduce

   Применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

   Метод reduce() принимает в callback 4 параметра .reduce((acc, item, index, array) => {}, 0);
   Помимо callback'a reduce принимает еще начальное значение (указано 0);
   Если не задавать начальное значение, то оно будет равно первому элементу в массиве.

   const numbersArray = [10, 50, 70, 110];

   - Пример 1:
     numbersArray.reduce((acc, item, index, array) => {
     console.log(acc); // выведет сначало 0 (Начальное значение), а потом 3 раза undefined;
     }, 0);

   - Пример 2:
     numbersArray.reduce((acc, item, index, array) => {
     console.log(acc); // выведет сначало 0 (Начальное значение), а потом 3 раза hello;
     return 'hello';
     }, 0);

   - Пример 3:
     numbersArray.reduce((acc, item, index, array) => {
     console.log(acc); // выведет сначало 10 (Начальное значение), а потом 3 раза hello;
     return 'hello';
     });

   - Пример 4:
     const sum = numbersArray.reduce((acc, item, index, array) => {
     console.log(acc, item); // выведет в консоль пошаговую итерацию
     return acc + item;
     }, 0);
     console.log(sum); // Вернет сумму всех элементов в массиве: 240;

---

6. Метод массивов sort

   Сортирует элементы массива и возвращает отсортированный массив.
   Этот метод не возвращает новый массив, а изменяет текущий массив.
   Принимает два значения array.sort((a, b) => {});
   Если в метод sort не передавать callback, то он преобразует все значения в массиве в строки
   и будет сортировать строки по возрастанию.

   - Пример 1:
     Сортировка по возрастанию.

     const numbers = [200, 10, 500, 1, 2000];

     numbers.sort((a, b) => {
     return a - b;
     });
     console.log(numbers); // [1, 10, 200, 500, 2000]

   - Пример 2:
     Сортировка по убыванию.

     numbers.sort((a, b) => {
     return b - a;
     });
     console.log(numbers); // [2000, 500, 200, 10, 1]

   - Пример 3:
     Сортировка без callback'a.

     numbers.sort()
     console.log(numbers); // [1, 10, 200, 2000, 500]

   - Пример 4:
     Сортировка строк по возрастанию.

     const names = ['Bob', 'Matilda', 'Viki', 'Sam'];

     names.sort((a, b) => {
     if (a > b) {
     return 1;
     }

     if (a < b) {
     return -1;
     }

     return 0;
     });
     console.log(names); // ['Bob', 'Matilda', 'Sam', 'Viki']

   - Пример 5:
     Сортировка строк по убыванию.

     const names = ['Bob', 'Matilda', 'Viki', 'Sam'];

     names.sort((a, b) => {
     if (a < b) {
     return 1;
     }

     if (a > b) {
     return -1;
     }

     return 0;
     });
     console.log(names); // ['Viki', 'Sam', 'Matilda', 'Bob']

---

7. Методы массивов: splice, slice, indexOf, includes, join, reverse

   ### splice

   Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
   Принимает в себя три параметра (индекс с которого нужно начать удаление, индекс на котором нужно закончить удаление, элементы на котрые нужно заменить удаленные значения).

   - Пример 1
     Удаляем элементы с 0-го индекса по 2-й.

     const animals = ['dog', 'cat', 'monkey', 'mouse'];

     animals.splice(0, 2);
     console.log(animals); // ['monkey', 'mouse']

   - Пример 2
     Удаляем элементы с 0-го индекса по 2-й. Добавляем три новых.

     animals.splice(0, 2, 'Lion', 'Bear', 'Wolf');
     console.log(animals); // ['Lion', 'Bear', 'Wolf', 'monkey', 'mouse']

   - Пример 3
     Возвращаем в консоль удаленные элементы.

     const removedElements = animals.splice(0, 2);
     console.log(removedElements); // ['dog', 'cat']
     console.log(animals); // ['monkey', 'mouse']

   ### slice

   Возвращает новый массив, содержащий копию части исходного массива.
   Принимает два параметра (индекс с которого начать обрезать массив, индекс на котором нужно закончить обрезку).
   Разница между slice и splice заключается в том, что slice не изменяет текущий массив, а возвращает новый.

   - Пример

     const animals = ['dog', 'cat', 'monkey', 'mouse'];

     console.log(animals.slice(0, 2)) // ['dog', 'cat']
     console.log(animals) // ['dog', 'cat', 'monkey', 'mouse']

   ### indexOf

   Возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

   - Пример

     const animals = ['dog', 'cat', 'monkey', 'mouse'];
     const favoriteAnimal = animals.indexOf('monkey');
     console.log(favoriteAnimal); // 2

   ### includes

   Определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

   - Пример
     const animals = ['dog', 'cat', 'monkey', 'mouse'];
     const favoriteAnimal = animals.includes('monkey');
     console.log(favoriteAnimal); // true

     const favoriteAnimal = animals.includes('lion');
     console.log(favoriteAnimal); // false

   ### split

   Разбивает объект String на массив строк путём разделения строки указанной подстрокой.
   Принимает два параметра (символ, используемый в качестве разделителя внутри строки, и целое число, определяющее ограничение на количество найденных подстрок).

   - Пример 1
     Вернет массив из одной строки.

     const animals = 'dog, cat, monkey, mouse';
     const animalsArray = animals.split();
     console.log(animalsArray); // ['dog, cat, monkey, mouse']

   - Пример 2
     Вернет массив из элементов.

     const animals = 'dog, cat, monkey, mouse';
     const animalsArray = animals.split(', '); // если после запятой не добавить пробел, то в массиве в начале слова будет пробел
     console.log(animalsArray); // ['dog', 'cat', 'monkey', 'mouse']

     - Пример 3
       Вернет массив из 2-х элементов.

       const animals = 'dog, cat, monkey, mouse';
       const animalsArray = animals.split(', ', 2); // если после запятой не добавить пробел, то в массиве в начале слова будет пробел
       console.log(animalsArray); // ['dog', 'cat']

   ### join

   Объединяет все элементы массива (или массивоподобного объекта) в строку.
   Принимает в себя один параметр (разделитель).

   - Пример
     const animals = ['dog', 'cat', 'monkey', 'mouse'];

     const animalsString = animals.join('; ');
     console.log(animalsString); // dog; cat; monkey; mouse

   ### reverse

   Обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
   Не принимает параметры.
   Изменяет текущий массив.

   - Пример
     const animals = ['dog', 'cat', 'monkey', 'mouse'];

     console.log(animals.reverse()); // [ "mouse", "monkey", "cat", "dog" ]

---

8. Объединение нескольких массивов в один

   ### concat

   Возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

   - Пример
     const animals = ['dog', 'cat', 'monkey', 'mouse'];
     const names = ['Bob', 'Matilda', 'Viki', 'Sam'];

     const animalsNames = animals.concat(names);
     console.log(animalsNames); // Array(8) [ "dog", "cat", "monkey", "mouse", "Bob", "Matilda", "Viki", "Sam" ]

   ### Спред оператор (...)

   - Пример
     const animals = ['dog', 'cat', 'monkey', 'mouse'];
     const names = ['Bob', 'Matilda', 'Viki', 'Sam'];

     const animalsNames = [
     ...animals,
     ...names
     ];
     console.log(animalsNames); // Array(8) [ "dog", "cat", "monkey", "mouse", "Bob", "Matilda", "Viki", "Sam" ]

---

- Дополнительные материалы:

1. [Spread-оператор в JavaScript (...)](https://habr.com/ru/post/348718/)
2. [Массивы и их методы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
3. [Как работает reduce в javascript](https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-reduce-%D0%B2-javascript-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B2%D0%B5%D1%89%D0%B8-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D1%81-%D0%BD%D0%B8%D0%BC-b650c397bee6)
4. [Метод sort в JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
5. [Методы массивов (forEach, map, filter, reduce, find, findIndex)](https://www.youtube.com/watch?v=nEabP9CYCAQ)
6. [Всё о деструктуризации](https://www.youtube.com/watch?v=wWYokY0Pt2M)
