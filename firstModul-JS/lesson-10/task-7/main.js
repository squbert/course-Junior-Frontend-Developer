/* 
 * Задание
 * Ваша задача состоит в том, чтобы создать функцию getKiller. getKiller принимает в себя 2 параметра:
 * 1. suspectInfo. Это объект, в котором ключи - это подозреваемые в преступлении люди,
 * а значения - массивы людей, которых видели подозреваемые в день убийства
 * 2. deadPeople. Это массив с именами людей, которых убил преступник.

 * Преступником является тот, кто видел всех убитых людей в день убийства. Функция getKiller должна возвращать имя преступника.
 * Примеры результатов функции getKiller:
 * getKiller(
 * {
 * 'James': ['Jacob', 'Bill', 'Lucas'],
 * 'Johnny': ['David', 'Kyle', 'Lucas'],
 * 'Peter': ['Lucy', 'Kyle'],
 * },
 * ['Lucas', 'Bill']
 * ); // Убийца James
 * getKiller(
 * {
 * 'Brad': [],
 * 'Megan': ['Ben', 'Kevin'],
 * 'Finn': [],
 * },
 * ['Ben']
 * ); // Убийца Megan
*/

function getKiller(suspectInfo, deadPeople) {
  let killerName = '';
  Object.entries(suspectInfo).forEach((name) => {
    const suspectPerson = name[0];
    const peopleWereSeen = name[1];
    const isKiller = deadPeople.every((deadName) =>
      peopleWereSeen.includes(deadName)
    );
    if (isKiller) {
      killerName = suspectPerson;
    }
  });

  return killerName;
}

const suspectInfo = {
  James: ['Jacob', 'Bill', 'Lucas'],
  Johnny: ['David', 'Kyle', 'Lucas'],
  Peter: ['Lucy', 'Kyle'],
};

const deadPeople = ['Lucas', 'Bill'];
console.log(getKiller(suspectInfo, deadPeople));
