/*
 * Задание
 * создадим 2 функции. Они будут нашими будущими колбеками:
 * 1. showSuccessMessage - принимает в себя параметр message и выводит его в консоль через console.log
 * 2. showErrorMessage - принимает в себя параметр message и выводит его в консоль
 * через console.error (console.error тоже выводит сообщение в консоль, но красным цветом).
 * Далее необходимо создать еще одну функцию под названием checkTextOnErrorSymbol.
 * С помощью нее мы будем искать в тексте запрещенный символ и выводить ошибку в консоль, если такой символ был найден.

 * checkTextOnErrorSymbol принимает в себя 4 параметра:
 * 1. text, тип данных string. Отвечает за текст, в котором мы будем искать запрещенный символ
 * 2. errorSymbol, тип данных string. Это запрещенный символ, который мы будем искать
 * 3. successCallback - функция, которая будет выводить успешное сообщение, если запрещенных символов не было найдено
 * 4. errorCallback - функция, которая будет выводить ошибку в консоль, если был найден запрещенный символ

 * Если запрещенный символ был найден, то вызовите колбэк errorCallback и передайте в
 * него сообщение “Найден запрещенный символ "${errorSymbol}" под индексом ${i}.”
 * (замените errorSymbol на запрещенный символ, i - на индекс строки, в котором был обнаружен запрещенный символ.
 * Если ни одного запрещенного символа в строке не было найдено, то вызовите колбэк
 * successCallback и передайте в него сообщение “В данном тексте нет запрещенных
 * символов”. Проверяйте работоспособность вашей функции на данном коде:
 * const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
 * checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);

 * Подсказка:
 * Для того, чтобы получить символ строки по индексу, используйте следующую запись text[index].
 */

const showSuccessMessage = (message) => console.log(message);
const showErrorMessage = (message) => console.error(message);

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  let countErrors = 0;
  for (let i = 0; i <= text.length; i++) {
    const currentSymbol = text[i];

    if (currentSymbol === errorSymbol && errorCallback) {
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`
      );
      countErrors++;
    }
  }

  if (successCallback && countErrors === 0) {
    successCallback('В данном тексте нет запрещенных символов.');
  }
};

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
