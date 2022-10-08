const inputPrice = document.querySelector('.js-price');
const inputPercent = document.querySelector('.js-percent');
const inputPurchase = document.querySelector('.js-purchase');
const inputDelivery = document.querySelector('.js-delivery');
const btnNode = document.querySelector('.js-btn');
const resultNode = document.querySelector('.js-result');

function answer(price, percent, purchase, delivery) {
    const percentSumm = price / 100 * percent;
    const total = price - percentSumm - purchase - delivery;
    resultNode.innerHTML = `<p>Итого чистая прибыль: ${total}</p>`;
};

btnNode.addEventListener('click', () => {
    const price = inputPrice.value;
    const percent = inputPercent.value;
    const purchase = inputPurchase.value;
    const delivery = inputDelivery.value;
    answer(price, percent, purchase, delivery);
});