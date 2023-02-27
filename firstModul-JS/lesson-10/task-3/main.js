/* 
 * Задание
 * Вам необходимо создать функцию, которая будет работать с объектами. Назовите ее handleObject.
 * handleObject принимает в себя 3 параметра:
 * 1. obj. Объект, с которым будет работать функция
 * 2. key. ключ объекта
 * 3. action. Действие, которое мы будем совершать над объектом
 * Параметр action может быть 4-мя значениями:
 * 1. ‘get’. Если action равен ‘get’, то функция handleObject должна вернуть значение ключа key в объекте obj.
 * 2. ‘add’. Если action равен ‘add’, то функция handleObject должна добавить новый ключ key в объект object
 * и присвоить значение пустой строки “”. Также из функции необходимо возвратить обновленный объект obj.
 * 3. ‘delete’. Если action равен ‘delete’, то функция handleObject должна удалить свойство key из объекта obj
 * и возвратить обновленный объект.

 * Если action равен любому другому значению, то функция handleObject должна возвратить объект obj.

 * Протестируйте функцию на этом коде:
 * const student = {
 * name: 'Maxim',
 * programmingLanguage: 'JavaScript',
 * }
 * const result = handleObjects(student, 'programmingLanguage',
 * 'delete');
 * console.log('result', result);
*/

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
};

const handleObject = (obj, key, action) => {
  switch (action) {
    case 'get':
      return obj[key];
      break;
    case 'add':
      obj[key] = '';
      return obj;
      break;
    case 'delete':
      delete obj[key];
      return obj;
      break;
    default:
      return obj;
  }
};
const result = handleObject(student, 'programmingLanguage', '');
console.log('result', result);
