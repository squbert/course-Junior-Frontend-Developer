/* 
* Задание 3
* Имеется код, в котором объявлено 12 переменных. Каждые переменные разделены на подгруппы.
* В каждой группе по 2 переменных и их названия различаются только цифрами на конце (1 либо 2).

* Измените код, который дан выше по следующим правилам:
* 1. Если переменная объявлена с let, то необходимо переопределить переменную с
* цифрой 2 в названии, присвоив ей значение переменной с цифрой 1. Также отобразите в
* консоль новое значение переменной с цифрой 2 в названии и ее typeof. Пример:
* let age1 = 20;
* let age2 = 25;
* age2 = age1;
* console.log(age2, typeof age2);

* 2. Если переменная объявлена с var, то вам необходимо вывести в консоль сообщение
* “var является устаревшим”. После этого удалите из кода var и добавьте вместо него let, а
* затем проделайте действия из пункта 1.

* 3. Если переменная объявлена через const, то отобразите в консоли сообщение
* “Переменную с const переопределить нельзя”. Также выведите в консоль значение двух
* переменных (с цифрой 1 и 2 в названии) и их typeof.
*/

// код
let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя');
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
console.log('var является устаревшим');
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);
