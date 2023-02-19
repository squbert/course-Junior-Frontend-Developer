/* 
* Задание
* Сейчас вам требуется создать 5 переменных с помощью const:
* 1. myName - ваше имя
* 2. programmingLanguage - язык програмирования
* 3. courseCreatorName - создатель данного курса
* 4. reasonText - причина, почему вы хотите стать веб-разработчиком
* 5. numberOfMonth - количество месяцев, которое вы уделили изучению JavaScript до начала курса

* Подставьте их с помощь 2-го способа конкатенации строк в данный текст.

* 'Всем привет! Меня зовут, myName. Сейчас я изучаю язык программирования
* programmingLanguage на курсе по programmingLanguage у courseCreatorName.
* Я хочу стать веб-разработчиком, потому что reasonText. До этого я изучал(а)
* programmingLanguage numberOfMonth месяцев. Я уверен(а), что пройду данный курс до
* конца!'

*Выведите конечный текст в консоль и посмотрите на результат в браузере.
*/

const myName = 'Петя';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владимира Высоцкого';
const reasonText = 'мне это очень нравиться и интересно';
const numberOfMonth = 2;

const myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до
конца!`;

console.log(text);
