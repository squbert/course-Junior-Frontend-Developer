/*
 * Задание

 * Ваша задача состоит в том, чтобы написать функцию, которая будет работать как мини-калькулятор математических выражений.
 * Назовите данную функцию getMathResult.
 * getMathResult принимает в себя 1 параметр expression, который является массивом и всегда состоит из 3-х элементов.
 * Первый и 3-й элементы в массиве expression - это числа, которые могут записывать как
 * тип данных number либо string (например, 100 или ‘100’). 2-й элемент - это математический знак, который является типом данных string.
 * Математический знак может быть исключительно следующими строками: “>”, “<”, “=”, “+”, “-”, “*”, “/”.
 * Если был знак, которого не существует в данной последовательности,
 * то функция getMathResult должна возвращать ошибку в виде строки “Ошибка”.

 * Примеры результатов функции getMathResult:
 * getMathResult(['200', '+', 300]); // 500
 * getMathResult(['20', '-', '5']); // 15
 * getMathResult([100, '/', 100]); // 1
 * getMathResult([2, '-', 2]); // 0
 * getMathResult(['5', '>', '10']); // false
 * getMathResult(['5', '<', '10']); // true
 * getMathResult(['1', '=', 1]); // true
 * getMathResult(['1', '**', 1]); // 'Ошибка'

 * Также учтите, что в массив expression иногда может быть передано больше 3-х параметров, и это конечно же неверно.
 * Но если все же такое было сделано, вам необходимо удалить лишние элементы в массиве, которые нельзя преобразовать к числу,
 * которые являются ложными. Если же длина массива expression меньше 3, 
 * то функция getMathResult должна возвращать ошибку в виде строки “Ошибка”.

 * Например, если expression был передан как данный массив:
 * ['100', 'hello', 'javascript', , 'help200', '+', 4]
 * то в итоге он должен быть преобразован к:
 * ['100', '+', 4]

 * Примечание. В решении нельзя использовать eval
 */

const possibleMathSigns = ['>', '>', '<', '=', '+', '-', '*', '/'];
const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));

const getMathResult = (expression) => {
  let resultExpression = [...expression];
  if (expression.length > 3) {
    resultExpression = resultExpression.filter(
      (item) => isNumber(item) || possibleMathSigns.includes(item)
    );
  }

  const firstDigit = Number(resultExpression[0]);
  const secondDigit = Number(resultExpression[resultExpression.length - 1]);
  const mathSign = resultExpression[1];

  if (
    resultExpression.length < 3 ||
    expression.length < 3 ||
    !isNumber(firstDigit) ||
    !isNumber(secondDigit) ||
    !possibleMathSigns.includes(mathSign)
  ) {
    return 'Ошибка';
  }

  switch (mathSign) {
    case '>':
      return firstDigit > secondDigit;
    case '<':
      return firstDigit < secondDigit;
    case '=':
      return firstDigit === secondDigit;
    case '+':
      return firstDigit + secondDigit;
    case '-':
      return firstDigit - secondDigit;
    case '*':
      return firstDigit * secondDigit;
    case '/':
      return firstDigit / secondDigit;
    default:
      return 'Ошибка';
  }
};

console.log(getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4]));
