const container = document.querySelector('.js-list');
const clear = document.querySelector(".js-clear");
const totalPrice = document.querySelector(".js-total-price");

const LS_KEY = 'basket';

const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
let totalCost;

if(products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
}

totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : 'Your basket is empty';
container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClear);

function handleClear() {
    localStorage.removeItem(LS_KEY);
    window.location.href = './03-shop.html';
}

function createMarkup(arr) {
    return arr.map(({ img, name, price, qty }) => `
        <li class="cart-item">
            <img class="product-img" src="${img}" alt="${name}"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p>
        </li>
    `).join("");
}






