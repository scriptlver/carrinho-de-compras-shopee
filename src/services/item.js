async function createItem(name, price, quantity) { // funcao para criar um item
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity, // metodo para calcular o subtotal do item
  };
}

export default createItem; // exportando a funcao createItem

