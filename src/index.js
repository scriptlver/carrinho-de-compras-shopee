import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const cart = [];
const wishList = [];

console.log("💫 Bem vindo ao seu carrinho da Shopee!💫");

const item1 = await createItem("Nike Air Max 90", 179.99, 1);
const item2 = await createItem("Adidas Essentials Camiseta Masculina", 79.99, 2);
const item3 = await createItem("Calça Levi's 511 Slim Fit", 109.99, 2);
const item4 = await createItem("Relógio Casio Vintage A168", 199.99, 1);
const item5 = await createItem("Fone JBL Tune 510BT", 99.99, 1);
const item6 = await createItem("Mochila Vans Old Skool III", 129.99, 3);
const item7 = await createItem("Jaqueta The North Face Resolve 2", 249.99, 1);
const item8 = await createItem("Tênis Puma Smash V2", 159.99, 2);
const item9 = await createItem("Camisa Polo Lacoste Classic Fit", 89.99, 1);
const item10 = await createItem("Calça Levi's 501 Original Fit", 109.99, 2);
const item11 = await createItem("Tênis Vans Old Skool", 199.99, 1);


await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.addItem(cart, item3);
await cartService.addItem(cart, item4);
await cartService.addItem(cart, item5);
await cartService.addItem(cart, item6);
await cartService.addItem(cart, item7);
await cartService.addItem(cart, item8);
await cartService.addItem(cart, item9);
await cartService.addItem(cart, item10);

await cartService.deleteItem(cart, item11.name);

//await cartService.removeItem(cart, 1); 

await cartService.displayCart(cart);

await cartService.calculateTotal(cart);
