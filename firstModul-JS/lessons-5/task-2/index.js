/* 
* Задание
* В прошлом задании вы написали текст и подставили в него ваши данные. Сейчас вы
* продолжите работу с этим текстом.

* Вам требуется выполнить следующие шаги по порядку:
* 1. C помощью метода replaceAll и toUpperCase вам необходимо изменить в
* переменной myInfoText все слова “JavaScript” на те же слова, только с прописными
* буквами (“JAVASCRIPT”). Присвойте переменной myInfoText новое значение с
* измененными словами “JavaScript”.
* 2. Выведите итоговую строку myInfoText в консоль.
* 3. Выведите в консоль длину строки myInfoText.
* 4. Выведите в консоль первый и последний символы строки myInfoText. Чтобы
* получить индекс последнего символа, требуется от длины строки вычесть единицу.
*/

const myName = 'Петя';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владимира Высоцкого';
const reasonText = 'мне это очень нравиться и интересно';
const numberOfMonth = 2;

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до
конца!`;

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toUpperCase()
);

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);
