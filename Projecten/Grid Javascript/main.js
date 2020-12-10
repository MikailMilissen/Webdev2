let price;
let quantity;
let total;

price = 5;
quantity = 23345214;
total = price * quantity;

let el = document.getElementById('cost');
el.textContent = '€' + total;