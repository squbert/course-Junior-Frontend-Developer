# Объекты

- Цель урока:
  Вы научитесь использовать объекты и выполнять базовые действия над ними:
  добавление, изменение и удаление свойств, перебор объектов, объединение нескольких
  объектов в один.

- Содержание урока:

---

1. Создание объектов. Получение значений объектов по ключу

   Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

   Они хранят свойства (пары ключ-значение), где:
   Ключи свойств должны быть строками или символами (обычно строками).
   Значения могут быть любого типа.

   const object = {
   key: value,
   key: value,
   }

   const car = {
   name: 'Nissan',
   maxSpeed: 220,
   'interior color': 'brown',
   color: 'green',
   equipment: {
   climateСontrol: 'two zone',
   musicSystem: 6.1,
   }
   }

   Чтобы получить значение объекта по ключу можно использовать два способа:

   1. Через точку
      obj.property
      car.name // Nissan
      car.equipment.musicSystem // 6.1

   2. Через квадратные скобки
      obj['property']
      car['name'] // Nissan
      car['interior color'] // brown (Такая запись работает только с помощью скобок)
      car['equipment']['musicsystem'] // 6.1

      const key = 'name';
      car[key] // Nissan

---

2. Удаление, добавление и изменение свойств объектов

   const programmer = {
   id: 21,
   programmingLanguage: 'JavaScript',
   hasExperienceInReact: false,
   }

   ### Добавление объекта

   programmer.experience = '2 years';

   ### Удаление объекта

   delete programmer.hasExperienceInReact;

   ### Изменение значения объекта

   programmer.programmingLanguage = 'PHP';

---

3. Объект - ссылочный тип данных

   Любой объект в JS является ссылочным типом данных. И у объекта в любой ситуации сохраняется ссылка.
   Если сравнить между собой два одинаков объекта, то они будут разными. Т.к у них разные ссылки.
   console.log({} === {}); // false
   console.log([] === []); // false

   А если сравнить так, то будет true:
   const object = {};
   const copyObject = object;
   console.log(object === copyObject); // true

   Т.к в copyObject была передана ссылка на object. И при сравнении они одинаковые.

   Пример:

   const setName = (entity, value) => {
   if (typeof entity === 'object') {
   entity.name = value;
   } else {
   entity = value;
   }
   }

   const car = {
   name: 'Nissan',
   }

   let carName = 'Nissan';

   setName(car, 'Mazda');
   setName(carName, 'Mazda');

   console.log(car); // Mazda
   console.log(carName); // Nissan

---

4. Перебор объектов. Создание массивов из объектов (keys, values, entries)

   const infoProduct = {
   id: 1,
   price: 115,
   currency: '$',
   name: 'shoes',
   }

   ### for in

   Проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.

   for (const key in infoProduct) {
   console.log(key);
   const value = infoProduct[key];
   console.log(value);
   }

   ### Object.keys

   Возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке что и цикл for...in.
   Возвращает массив из ключей объекта.

   const infoProductKeys = Object.keys(infoProduct);
   console.log(infoProductKeys); // Array(4) [ "id", "price", "currency", "name" ]

   ### Object.values

   Возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in.

   const infoProductValues = Object.values(infoProduct);
   console.log(infoProductValues); // Array(4) [ 1, 115, "$", "shoes" ]

   ### Object.entries

   Метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in.

   const infoProductKeysAndValues = Object.entries(infoProduct);
   console.log(infoProductKeysAndValues); // Array(4) [ (2) […], (2) […], (2) […], (2) […] ]
   console.log(infoProductKeysAndValues[0]); // Array [ "id", 1 ]

---

5. Работа с ключами объекта

   Значение у объекта может быть любым типом данных.
   А ключ может быть 2-х типов - String и Symbol

   Пример:
   const user = {
   name: 'Bob',
   25: '138',
   undefined: undefined,
   [false]: false,
   }

   console.log(Object.keys(user)); // Array(4) [ "25", "name", "undefined", "false" ] (все ключи преобразовались в String)

   Symbol - это специальный тип данных в JS который существует для создания уникальных ключей объекта.

   Если мы создадим в объекте одинаковые ключи, то применится только последний ключ:
   const user = {
   name: 'Bob',
   name: 'Jim',
   }
   console.log(user) // Object { name: "Jim" }

   Если использовать Symbol (без восклицательного знака !):
   const name = Symbol('name');

   const user = {
   ! [Symbol('name')]: 'Bob',
   ! [Symbol('name')]: 'Jim',
   ! [name]: 'Bill',
   name: 'Viki',
   };
   console.log(user); // Object { name: "Viki", Symbol("name"): "Bob", Symbol("name"): "Jim", Symbol("name"): "Bill" }
   console.log(user[name]); // Bill

   ### in

   Значение in проверяет, существует ли указанный ключ в объекте.
   console.log('name' in user) // true
   console.log('id' in user) // false
   console.log(name in user) // true

---

6. Объединение нескольких объектов в один.
   Первый способ Spread syntax (...):
   const userInfo = {
   name: 'Jim',
   age: 25,
   }

   const userExtraInfo = {
   name: 'Bob',
   height: 180,
   country: 'Mexico'
   }

   const user = {
   ...userInfo,
   ...userExtraInfo
   }
   console.log(user); // Object { name: "Bob", age: 25, height: 180, country: "Mexico" }

   Если у объектов два одинаковых ключа, то применится тот ключ, который будет у последнего объекта.
   Если в примере поменять у user местами объекты, то name будет 'Jim'
   const user = {
   ...userExtraInfo,
   ...userInfo,
   }
   console.log(user); // Object { name: "Jim", height: 180, country: "Mexico", age: 25 }

   Так же можно добавлять или изменять параметры объекта:
   const user = {
   ...userExtraInfo,
   ...userInfo,
   name: 'Viki',
   gender: 'female',
   }
   console.log(user); // Object { name: "Viki", height: 180, country: "Mexico", age: 25, gender: "female" }

   Второй способ объединения Object.assign
   const user2 = Object.assign(userInfo, userExtraInfo);
   console.log(user2); // Object { name: "Bob", age: 25, height: 180, country: "Mexico" }

---

7. Опциональная цепочка
   Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных объектов, даже если какое-либо из промежуточных свойств не существует.

   Опциональная цепочка сокращает проверки и не только:
   const car = {
   name: 'Nissan',
   maxSpeed: 220,
   'interior color': 'brown',
   color: 'green',
   equipment: {
   climateСontrol: 'two zone',
   musicSystem: 6.1,
   }
   }

   Если не использовать Опциональную цепочку
   if (car && car.equipment && car.equipment.climateСontrol) {
   console.log('the car has two zone climate control');
   } else {
   console.log('the car NOT has two zone climate control');
   }

   Используя опциональную цепочку:
   if (car?.equipment?.climateСontrol) {
   console.log('the car has two zone climate control');
   } else {
   console.log('the car NOT has two zone climate control');
   }

---

- Дополнительные материалы:
  1. [Как использовать Symbol в качестве ключей объекта?](https://learn.javascript.ru/symbol)
  2. [Как получить массив всех symbol-ов в объекте?](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
  3. [Методы объектов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object#methods)
  4. [Опциональная цепочка “?.”](https://learn.javascript.ru/optional-chaining)
