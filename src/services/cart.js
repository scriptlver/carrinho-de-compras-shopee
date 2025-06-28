async function addItem(userCart, item){ //funcao para adicionar item no carrinho
  userCart.push(item);
}

async function deleteItem(userCart, name){ //funcao para delte um item do carrinho a partir do seu nome
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}  

async function removeItem (userCart, index){ //funcao para diminuir um item do carrinho 

}

async function displayCart(userCart) {
    console.log("\n🛒 Produtos no carrinho:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal: R${item.subtotal()}`);
    });
}


async function calculateTotal(userCart){ //funcao para calcular o total do carrinho
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(`\n✨ TOTAL: ${result}`);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}

