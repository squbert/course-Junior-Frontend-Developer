/*
 * Задание
 * Необходимо запросить пароль у пользователя при помощи prompt. Отобразите сообщение “Введите пароль”.

 * Пароль должен удовлетворять следующим условиям:
 * 1. Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая 20).
 * 2. Пароль должен содержать минимум 1 прописную (большую) букву.
 * 3. Пароль должен содержать минимум 1 цифру.

 * Если все условия удовлетворены, то выведите при помощи alert сообщение “Пароль валидный. Добро пожаловать в аккаунт!”,
 * иначе - “Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.”

 * Возможные результаты:
 * 1. “1234f” - не удовлетворяет условиям
 * 2. “123456” - не удовлетворяет условиям
 * 3. “1234F” - удовлетворяет условиям
 * 4. “12” - не удовлетворяет условиям
 * 5. “JavaScript”- не удовлетворяет условиям
 * 6. “JavaScript123” - удовлетворяет условиям
 */

const userPassword = prompt('Введите пароль');
const errorMessage =
  'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

if (userPassword.length < 3 && userPassword.length > 20) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;

  for (let i = 0; i < userPassword.length; i++) {
    const symbol = userPassword[i];
    const isNumberSymbol = !isNaN(parseInt(symbol));
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}
