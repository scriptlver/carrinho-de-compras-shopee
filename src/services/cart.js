async function addItem(userCart, item){ //funcao para adicionar item no carrinho
  userCart.push(item);
}

async function deleteItem(userCart, name){ //funcao para delte um item do carrinho a partir do seu nome

}  

async function removeItem (userCart, index){ //funcao para diminuir um item do carrinho 

}

async function calculateTotal(userCart){ //funcao para calcular o total do carrinho
   return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}

