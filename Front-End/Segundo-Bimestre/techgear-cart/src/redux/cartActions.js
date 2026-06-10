// Bilhetinho para ADICIONAR um item ao carrinho
export const addItem = (item) => {
    return {
      type: 'ADD_ITEM',   // nome do bilhetinho
      payload: item      // o produto que vai ser adicionado
    };
  };
  
  // Bilhetinho para REMOVER um item do carrinho
  export const removeItem = (id) => {
    return {
      type: 'REMOVE_ITEM',  // nome do bilhetinho
      payload: { id }      // qual produto remover (pelo id)
    };
  };