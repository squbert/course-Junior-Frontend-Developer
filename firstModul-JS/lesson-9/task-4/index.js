/* 
 * Задание

 * У вас изначально есть 2 массива: coffees (хранит названия кофе) и prices (хранит цены на кофе).
 * Индексы для названий кофе и цен взаимосвязаны. Т.е. “Latte” стоит 1.5 евро, “Cappuccino” - 1 евро, и т.д.
 * const coffees = ['Latte', 'Cappuccino', 'Americano'];
 * const prices = [1.5, 1, 2];

 * Вам необходимо создать новый массив updatedPrices, который будет содержать те же числа из массива prices, но только увеличенные на 0.5.
 * После подъема цен вам необходимо уведомить об этом клиентов кофейни, поэтому выведите для каждого типа кофе сообщение
 * через alert “Кофе name сейчас стоит price евро”, где name - название кофе, а price - обновленная цена на кофе.

 * Условия:
 * 1. Необходимо использовать методы массивов map и forEach
*/

const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map((price) => price + 0.5);
const message = coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});
