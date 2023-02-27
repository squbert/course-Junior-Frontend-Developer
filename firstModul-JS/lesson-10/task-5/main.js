/* 
 * Задание
 * Вам необходимо создать функцию getTotalPriceOfShoppingBag, которая будет принимать в себя 1 параметр shoppingBag.
 * shoppingBag - это массив продуктов в корзине, состоящий из объектов, в каждом из которых хранится информация о названии
 * продукта (product) и о количестве продукта в корзине (quantity).

 * Также у интернет-магазина есть глобальный объект, в котором хранится вся нужная информация о каждой единице продукта:
 * const groceries = {
 * "Orange Juice": {
 * price : 1.5,
 * discount: 10,
 * },
 * "Chocolate": {
 * price : 2,
 * discount : 0,
 * },
 * }
 * Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость всех товаров
 * в корзине с учетом скидок и с учетом указанных клиентом количеством продуктов.
 * Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью toFixed.

 * Посмотрите на возможно возвращаемое значение функции getTotalPriceOfShoppingBag:
 * const shoppingBag = [
 * { product: 'Chocolate', quantity: 3 },
 * { product: 'Orange Juice', quantity: 23 },
 * ]
 * const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
 * console.log('totalPrice', totalPrice); // Возвращает 37.05
*/

const groceries = {
  'Orange Juice': {
    price: 1.5,
    discount: 10,
  },
  Chocolate: {
    price: 2,
    discount: 0,
  },
};

const shoppingBag = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
];

function getTotalPriceOfShoppingBag(shoppingBag) {
  const shoppingItems = Object.values(shoppingBag);

  if (shoppingItems.length === 0) {
    return 0;
  }

  const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
    const { product, quantity } = currentProduct;
    const productObject = groceries[product];
    const { price, discount } = productObject;
    const priceWithDiscount = productObject.price - (price * discount) / 100;
    let totalProductPrice = priceWithDiscount * quantity;
    return acc + totalProductPrice;
  }, 0);

  return totalPrice.toFixed(2);
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);
