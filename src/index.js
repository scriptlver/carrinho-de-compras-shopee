import createItem from './services/item.js';

const cart = [];

console.log("Bem vindo ao seu carrinho da Shopee!");

const item1 = await createItem("Tênis Nike", 179.99, 1);
const item2 = await createItem("Camisa Adidas", 79.99, 2);

console.log(item2.subtotal());
