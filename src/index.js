
import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const cart = [];
const wishList = [];


console.log("💫 Bem vindo ao seu carrinho da Shopee!💫");

const item1 = await createItem("Tênis Nike", 179.99, 1);
const item2 = await createItem("Camisa Adidas", 79.99, 2);
const item3 = await createItem("Calça Levi's", 109.99, 2);
const item4 = await createItem("Relógio Casio", 199.99, 1);


await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.addItem(cart, item3);

await cartService.deleteItem(cart, item4.name);

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);
